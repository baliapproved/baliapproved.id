import { PostHogProvider } from '@posthog/react'
import type { ReactNode } from 'react'
import { z } from 'zod'

// Safe to expose in the browser and baked in at build time. Leave the token empty to disable analytics.
const env = z
  .object({
    VITE_POSTHOG_PROJECT_TOKEN: z.string().optional(),
    VITE_POSTHOG_HOST: z.url().optional(),
  })
  .parse({
    VITE_POSTHOG_PROJECT_TOKEN: import.meta.env.VITE_POSTHOG_PROJECT_TOKEN || undefined,
    VITE_POSTHOG_HOST: import.meta.env.VITE_POSTHOG_HOST || undefined,
  })

// Pageviews follow route changes on their own. Analytics stay off without
// both settings, including in local development.
export function Analytics({ children }: { children: ReactNode }) {
  const { VITE_POSTHOG_PROJECT_TOKEN: token, VITE_POSTHOG_HOST: host } = env
  if (!token || !host) return children

  return (
    <PostHogProvider
      apiKey={token}
      options={{
        api_host: host,
        defaults: '2026-08-30',
        before_send: (event) => {
          if (event) event.properties.locale = document.documentElement.lang
          return event
        },
      }}
    >
      {children}
    </PostHogProvider>
  )
}
