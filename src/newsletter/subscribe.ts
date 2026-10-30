export type SubscribeInput = {
  email: string
  company?: string
}

export type SubscribeResult =
  | { status: 'success' }
  | { status: 'invalid-email' }
  | { status: 'rate-limited' }
  | { status: 'error' }

const validStatuses = new Set<SubscribeResult['status']>([
  'success',
  'invalid-email',
  'rate-limited',
  'error',
])

export async function subscribe(input: SubscribeInput): Promise<SubscribeResult> {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })

  try {
    const body = (await response.json()) as { status?: unknown }
    if (
      typeof body.status === 'string' &&
      validStatuses.has(body.status as SubscribeResult['status'])
    ) {
      return { status: body.status as SubscribeResult['status'] }
    }
  } catch {
    // Fall back to HTTP status codes below when response body is not JSON.
  }

  if (response.status === 429) return { status: 'rate-limited' }
  if (response.status === 400) return { status: 'invalid-email' }
  return { status: 'error' }
}
