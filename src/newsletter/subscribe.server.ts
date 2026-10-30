import { z } from 'zod'

import type { SubscribeResult } from './subscribe.ts'

export interface RateLimiterLike {
  limit(options: { key: string }): Promise<{ success: boolean }>
}

export interface SubscribeHandlerEnv {
  KIT_API_KEY?: string
  SIGNUP_LIMITER?: RateLimiterLike
}

export interface SubscribeHandlerOptions {
  /** Fallback client IP used only in local development servers without Cloudflare headers. */
  fallbackClientIp?: string
}

const KIT_API = 'https://api.kit.com/v4'
const KIT_FORM_ID = '10086334'
const SITE_URL = 'https://baliapproved.id'
const MAX_BODY_BYTES = 4096
const KIT_TIMEOUT_MS = 30_000

const subscribeInput = z.object({
  email: z.string().trim().max(254).pipe(z.email()),
  // Honeypot. Real visitors never see or fill it.
  company: z.string().max(200).optional(),
})

const kitEnvSchema = z.object({
  KIT_API_KEY: z.string().min(1),
})

const createdResponse = z.object({
  subscriber: z.object({ state: z.string() }),
})

function jsonResponse(
  body: SubscribeResult,
  status: number,
  extraHeaders?: Record<string, string>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  })
}

async function readBodyWithLimit(
  request: Request,
  maxBytes: number,
): Promise<{ ok: true; text: string } | { ok: false; status: 400 | 413 }> {
  const contentLength = request.headers.get('content-length')
  if (contentLength !== null) {
    const declaredLength = Number(contentLength)
    if (!Number.isFinite(declaredLength) || declaredLength < 0) {
      return { ok: false, status: 400 }
    }
    if (declaredLength > maxBytes) {
      return { ok: false, status: 413 }
    }
  }

  if (!request.body) {
    return { ok: true, text: '' }
  }

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let totalBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      totalBytes += value.byteLength
      if (totalBytes > maxBytes) {
        await reader.cancel()
        return { ok: false, status: 413 }
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  const merged = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    merged.set(chunk, offset)
    offset += chunk.byteLength
  }

  return { ok: true, text: new TextDecoder().decode(merged) }
}

async function kitRequest(path: string, apiKey: string, body: unknown): Promise<Response> {
  return fetch(`${KIT_API}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': apiKey,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(KIT_TIMEOUT_MS),
  })
}

export async function handleSubscribeRequest(
  request: Request,
  env: SubscribeHandlerEnv,
  options: SubscribeHandlerOptions = {},
): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ status: 'error' }, 405, { Allow: 'POST' })
  }

  const requestUrl = new URL(request.url)
  const secFetchSite = request.headers.get('sec-fetch-site')
  if (secFetchSite === 'cross-site') {
    return jsonResponse({ status: 'error' }, 403)
  }

  const origin = request.headers.get('origin')
  if (origin !== null && origin !== requestUrl.origin) {
    return jsonResponse({ status: 'error' }, 403)
  }

  const bodyResult = await readBodyWithLimit(request, MAX_BODY_BYTES)
  if (!bodyResult.ok) {
    return jsonResponse({ status: 'error' }, bodyResult.status)
  }

  let rawBody: unknown
  try {
    rawBody = JSON.parse(bodyResult.text)
  } catch {
    return jsonResponse({ status: 'error' }, 400)
  }

  const parsedInput = subscribeInput.safeParse(rawBody)
  if (!parsedInput.success) {
    return jsonResponse({ status: 'invalid-email' }, 400)
  }

  // Bots fill the honeypot. Report success so they learn nothing.
  if (parsedInput.data.company) {
    return jsonResponse({ status: 'success' }, 200)
  }

  const rateLimiter = env.SIGNUP_LIMITER
  if (!rateLimiter) {
    console.error('Newsletter rate limiter binding is missing')
    return jsonResponse({ status: 'error' }, 500)
  }

  const isLocalhost = requestUrl.hostname === 'localhost' || requestUrl.hostname === '127.0.0.1'
  const clientIp =
    request.headers.get('cf-connecting-ip')?.trim() ||
    options.fallbackClientIp ||
    (isLocalhost ? '127.0.0.1' : undefined)

  if (!clientIp) {
    return jsonResponse({ status: 'error' }, 400)
  }

  for (const key of [`ip:${clientIp}`, `email:${parsedInput.data.email.toLowerCase()}`]) {
    const { success } = await rateLimiter.limit({ key })
    if (!success) {
      return jsonResponse({ status: 'rate-limited' }, 429)
    }
  }

  const parsedEnv = kitEnvSchema.safeParse(env)
  if (!parsedEnv.success) {
    console.error('Newsletter Kit environment variables are missing or invalid')
    return jsonResponse({ status: 'error' }, 500)
  }

  try {
    // Kit defaults new subscribers to active, which skips confirmation. Creating is an
    // upsert that keeps an existing subscriber's state, so repeat signups are safe.
    const created = await kitRequest('/subscribers', parsedEnv.data.KIT_API_KEY, {
      email_address: parsedInput.data.email,
      state: 'inactive',
    })
    if (!created.ok) {
      console.error('Kit create subscriber failed', created.status)
      return jsonResponse({ status: 'error' }, 502)
    }

    const parsedCreated = createdResponse.safeParse(await created.json())
    if (!parsedCreated.success) {
      console.error('Kit create subscriber returned unexpected payload')
      return jsonResponse({ status: 'error' }, 502)
    }

    // Only unconfirmed subscribers need the confirmation email. Enrolling an inactive
    // subscriber in the form is what sends it.
    if (parsedCreated.data.subscriber.state !== 'inactive') {
      return jsonResponse({ status: 'success' }, 200)
    }

    const added = await kitRequest(
      `/forms/${KIT_FORM_ID}/subscribers`,
      parsedEnv.data.KIT_API_KEY,
      {
        email_address: parsedInput.data.email,
        referrer: SITE_URL,
      },
    )
    if (!added.ok) {
      console.error('Kit add to form failed', added.status)
      return jsonResponse({ status: 'error' }, 502)
    }

    return jsonResponse({ status: 'success' }, 200)
  } catch (error) {
    console.error('Kit newsletter signup failed', error)
    return jsonResponse({ status: 'error' }, 502)
  }
}
