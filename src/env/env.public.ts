import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

// Safe to expose in the browser. Baked in at build time. Leave the token empty to disable analytics.
export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_POSTHOG_PROJECT_TOKEN: z.string().optional(),
    VITE_POSTHOG_HOST: z.url().optional(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
})
