import { createFileRoute, notFound, Outlet, redirect } from '@tanstack/react-router'

import { defaultLocale, getLocalizedPathname, isLocale } from '@/i18n/locale'

export const Route = createFileRoute('/{-$locale}')({
  beforeLoad: ({ params, location }) => {
    if (params.locale && !isLocale(params.locale)) throw notFound()

    // English has one canonical URL: /about rather than /en/about.
    if (params.locale === defaultLocale) {
      throw redirect({
        href: `${getLocalizedPathname(location.pathname, defaultLocale)}${location.searchStr}${location.hash ? `#${location.hash}` : ''}`,
        statusCode: 308,
      })
    }
  },
  component: Outlet,
})
