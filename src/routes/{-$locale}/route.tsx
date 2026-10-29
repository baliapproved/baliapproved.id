import { createFileRoute, notFound, Outlet, redirect } from '@tanstack/react-router'

import {
  defaultLocale,
  getLocalePathPrefix,
  getLocalizedPathname,
  resolveLocale,
} from '@/i18n/locale'

export const Route = createFileRoute('/{-$locale}')({
  beforeLoad: ({ params, location }) => {
    if (!params.locale) return
    const locale = resolveLocale(params.locale)
    if (!locale) throw notFound()

    // Canonicalize English and old regional prefixes to the simple language URLs.
    if (locale === defaultLocale || params.locale !== getLocalePathPrefix(locale)) {
      throw redirect({
        href: `${getLocalizedPathname(location.pathname, locale)}${location.searchStr}${location.hash ? `#${location.hash}` : ''}`,
        statusCode: 308,
      })
    }
  },
  component: Outlet,
})
