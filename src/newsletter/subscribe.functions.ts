import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

export type SubscribeResult =
  | { status: 'success' }
  | { status: 'invalid-email' }
  | { status: 'error' }

const KIT_API = 'https://api.kit.com/v4'
const KIT_FORM_ID = '10086334'
const SITE_URL = 'https://baliapproved.id'
const KIT_TIMEOUT_MS = 30_000

const subscribeInput = z.object({
  email: z.string().max(1000),
  // Honeypot. Real visitors never see or fill it.
  company: z.string().max(200).optional(),
})

const emailSchema = z.string().trim().max(254).pipe(z.email())

const createdResponse = z.object({
  subscriber: z.object({ state: z.string() }),
})

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

export const subscribe = createServerFn({ method: 'POST' })
  .validator(subscribeInput)
  .handler(async ({ data }): Promise<SubscribeResult> => {
    const parsedEmail = emailSchema.safeParse(data.email)
    if (!parsedEmail.success) return { status: 'invalid-email' }
    const email = parsedEmail.data

    // Bots fill the honeypot. Report success so they learn nothing.
    if (data.company) return { status: 'success' }

    const apiKey = process.env.KIT_API_KEY
    if (!apiKey) {
      console.error('Newsletter KIT_API_KEY is missing')
      return { status: 'error' }
    }

    try {
      // Kit defaults new subscribers to active, which skips confirmation. Creating is an
      // upsert that keeps an existing subscriber's state, so repeat signups are safe.
      const created = await kitRequest('/subscribers', apiKey, {
        email_address: email,
        state: 'inactive',
      })
      if (!created.ok) {
        console.error('Kit create subscriber failed', created.status)
        return { status: 'error' }
      }

      const parsedCreated = createdResponse.safeParse(await created.json())
      if (!parsedCreated.success) {
        console.error('Kit create subscriber returned unexpected payload')
        return { status: 'error' }
      }

      // Only unconfirmed subscribers need the confirmation email. Enrolling an inactive
      // subscriber in the form is what sends it.
      if (parsedCreated.data.subscriber.state !== 'inactive') return { status: 'success' }

      const added = await kitRequest(`/forms/${KIT_FORM_ID}/subscribers`, apiKey, {
        email_address: email,
        referrer: SITE_URL,
      })
      if (!added.ok) {
        console.error('Kit add to form failed', added.status)
        return { status: 'error' }
      }

      return { status: 'success' }
    } catch (error) {
      console.error('Kit newsletter signup failed', error)
      return { status: 'error' }
    }
  })
