import { createFileRoute } from '@tanstack/react-router'

import { NotFound } from '@/not-found/not-found'
import { notFoundMeta } from '@/not-found/not-found.head'

export const Route = createFileRoute('/{-$locale}/404')({
  head: ({ match }) => ({
    meta: notFoundMeta(match.context.locale, match.pathname),
  }),
  component: NotFound,
})
