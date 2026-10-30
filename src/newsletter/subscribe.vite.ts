import { Readable } from 'node:stream'
import { loadEnv, type Plugin, type ResolvedConfig } from 'vite'

import type { RateLimiterLike } from './subscribe.server.ts'

function createInMemoryRateLimiter(limit: number, periodMs: number): RateLimiterLike {
  const hits = new Map<string, number[]>()

  return {
    limit({ key }) {
      const now = Date.now()
      const cutoff = now - periodMs
      const timestamps = (hits.get(key) ?? []).filter((timestamp) => timestamp > cutoff)
      if (timestamps.length >= limit) {
        hits.set(key, timestamps)
        return Promise.resolve({ success: false })
      }
      timestamps.push(now)
      hits.set(key, timestamps)
      return Promise.resolve({ success: true })
    },
  }
}

export function newsletterDevApi(): Plugin {
  let resolvedConfig: ResolvedConfig

  return {
    name: 'newsletter-dev-api',
    apply: 'serve',
    configResolved(config) {
      resolvedConfig = config
    },
    configureServer(server) {
      const rateLimiter = createInMemoryRateLimiter(5, 60_000)
      const handlerPromise = import('./subscribe.server.ts')

      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split('?')[0]
        if (pathname !== '/api/subscribe') {
          next()
          return
        }

        const envDir = resolvedConfig.envDir || resolvedConfig.root
        const env = loadEnv(resolvedConfig.mode, envDir, '')
        const origin = `http://${req.headers.host ?? 'localhost:4321'}`
        const headers = new Headers()
        for (const [key, value] of Object.entries(req.headers)) {
          if (Array.isArray(value)) {
            for (const item of value) headers.append(key, item)
          } else if (typeof value === 'string') {
            headers.set(key, value)
          }
        }

        const hasBody = req.method !== 'GET' && req.method !== 'HEAD'
        const webRequest = new Request(`${origin}${req.url ?? '/api/subscribe'}`, {
          method: req.method ?? 'GET',
          headers,
          body: hasBody ? (Readable.toWeb(req) as ReadableStream<Uint8Array>) : undefined,
          duplex: hasBody ? 'half' : undefined,
        } as RequestInit)

        const { handleSubscribeRequest } = await handlerPromise
        const response = await handleSubscribeRequest(
          webRequest,
          {
            KIT_API_KEY: env.KIT_API_KEY,
            KIT_FORM_ID: env.KIT_FORM_ID,
            SIGNUP_LIMITER: rateLimiter,
          },
          { fallbackClientIp: req.socket.remoteAddress ?? '127.0.0.1' },
        )

        res.statusCode = response.status
        response.headers.forEach((headerValue, headerName) => {
          res.setHeader(headerName, headerValue)
        })
        res.end(Buffer.from(await response.arrayBuffer()))
      })
    },
  }
}
