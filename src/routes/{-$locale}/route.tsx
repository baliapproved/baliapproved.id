import { createFileRoute, notFound, Outlet } from '@tanstack/react-router'
import { resolveLocale } from '@/i18n/locale'

export const Route = createFileRoute('/{-$locale}')({
  beforeLoad: ({ params }) => {
    const locale = resolveLocale(params.locale)
    if (!locale) throw notFound()
    return { locale }
  },
  component: Outlet,
})
