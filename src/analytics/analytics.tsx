import { PostHogProvider } from '@posthog/react'
import type { ReactNode } from 'react'

import { env } from '@/env/env.public'

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
