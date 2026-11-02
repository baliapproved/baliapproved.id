import { createCsrfMiddleware, createStart } from '@tanstack/react-start'

// Server functions are same-origin RPC endpoints. Reject cross-site calls.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === 'serverFn',
})

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware],
}))
