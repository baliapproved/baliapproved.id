import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

// Secrets and server-only settings. Never import this from client code.
// Local values live in gitignored .env.local; deployed values are Worker secrets.
export const env = createEnv({
  server: {
    KIT_API_KEY: z.string().min(1),
    KIT_FORM_ID: z.coerce.number().int().positive(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
