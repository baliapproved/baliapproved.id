import { handleSubscribeRequest } from './subscribe.server'

type WorkerEnv = Env & {
  KIT_API_KEY?: string
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/subscribe') {
      return handleSubscribeRequest(request, env)
    }

    if (url.pathname === '/api' || url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ status: 'not-found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      })
    }

    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<WorkerEnv>
