import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { site } from '@/site/site'

export type SubscribeResult =
  | { status: 'success' }
  | { status: 'rate-limited' }
  | { status: 'error' }

const KIT_API = 'https://api.kit.com/v4'

const subscribeInput = z.object({
  email: z.email().max(254),
  // Honeypot. Real visitors never see or fill it.
  company: z.string().max(200).optional(),
})

const createdResponse = z.object({ subscriber: z.object({ state: z.string() }) })

async function kitRequest(path: string, apiKey: string, body: unknown) {
  return fetch(`${KIT_API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Kit-Api-Key': apiKey },
    body: JSON.stringify(body),
  })
}

export const subscribe = createServerFn({ method: 'POST' })
  .validator(subscribeInput)
  .handler(async ({ data }): Promise<SubscribeResult> => {
    // Bots fill the honeypot. Report success so they learn nothing.
    if (data.company) return { status: 'success' }

    const { env } = await import('@/env/env.server')
    const { env: workerEnv } = await import('cloudflare:workers')
    const { getRequest } = await import('@tanstack/react-start/server')
    const rateLimiter = workerEnv.SIGNUP_LIMITER
    if (!rateLimiter) {
      console.error('Newsletter rate limiter binding is missing')
      return { status: 'error' }
    }

    const clientIp = getRequest().headers.get('cf-connecting-ip')
    if (!clientIp) return { status: 'error' }

    for (const key of [`ip:${clientIp}`, `email:${data.email.toLowerCase()}`]) {
      const { success } = await rateLimiter.limit({ key })
      if (!success) return { status: 'rate-limited' }
    }

    // Kit defaults new subscribers to active, which skips confirmation. Creating is an
    // upsert that keeps an existing subscriber's state, so repeat signups are safe.
    const created = await kitRequest('/subscribers', env.KIT_API_KEY, {
      email_address: data.email,
      state: 'inactive',
    })
    if (!created.ok) {
      console.error('Kit create subscriber failed', created.status)
      return { status: 'error' }
    }
    const { subscriber } = createdResponse.parse(await created.json())

    // Only unconfirmed subscribers need the confirmation email. Enrolling an inactive
    // subscriber in the form is what sends it.
    if (subscriber.state !== 'inactive') return { status: 'success' }

    const added = await kitRequest(`/forms/${env.KIT_FORM_ID}/subscribers`, env.KIT_API_KEY, {
      email_address: data.email,
      referrer: site.url,
    })
    if (!added.ok) {
      console.error('Kit add to form failed', added.status)
      return { status: 'error' }
    }

    return { status: 'success' }
  })
