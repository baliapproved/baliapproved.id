import { HeadContent, Outlet, Scripts, createRootRoute, useLocation } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'
import { IntlayerProvider } from 'react-intlayer'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Analytics } from '@/analytics/analytics'
import appCss from '@/design-system/styles.css?url'
import { Toaster } from '@/design-system/sonner'
import { localeFromPath } from '@/i18n/locale'
import { NotFound } from '@/not-found/not-found'
import { getNotFoundMetadata } from '@/not-found/not-found.head'
import { getPlaces } from '@/places/places.functions'
import { THEME_COLOR } from '@/seo/seo'
import { Footer } from '@/site/footer'
import { Header } from '@/site/header'

export const Route = createRootRoute({
  beforeLoad: ({ location }) => ({
    locale: localeFromPath(location.pathname),
  }),
  loader: ({ context }) => getPlaces({ data: context.locale }),
  head: ({ match, matches }) => {
    const pathname = matches.at(-1)?.pathname ?? '/'
    const locale = match.context?.locale ?? localeFromPath(pathname)
    const { seo } = getIntlayer('site', locale)
    const notFoundMeta = getNotFoundMetadata(matches, locale, pathname)

    return {
      meta: [
        {
          charSet: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: THEME_COLOR,
        },
        ...(notFoundMeta ?? [
          { title: seo.title },
          { name: 'description', content: seo.description },
        ]),
      ],
      links: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        {
          rel: 'stylesheet',
          href: appCss,
        },
      ],
    }
  },
  notFoundComponent: NotFound,
  component: RootLayout,
  shellComponent: RootDocument,
})

function RootLayout() {
  const { locale } = Route.useRouteContext()
  const places = Route.useLoaderData()

  return (
    <>
      <Header locale={locale} places={places} />
      <Outlet />
      <Footer locale={locale} />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = localeFromPath(useLocation({ select: (location) => location.pathname }))
  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Analytics>
          <IntlayerProvider locale={locale}>{children}</IntlayerProvider>
        </Analytics>
        <Toaster richColors position="top-center" />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
