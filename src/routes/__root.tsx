import { HeadContent, Scripts, createRootRoute, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { IntlayerProvider, useIntlayer } from 'react-intlayer'
import { getIntlayerAsync } from 'intlayer'

import appCss from '@/design-system/styles.css?url'
import { Toaster } from '@/design-system/sonner'
import { getLocaleFromPath } from '@/i18n/locale'
import { Analytics } from '@/analytics/analytics'
import { Header } from '@/site/header'
import { Footer } from '@/site/footer'

export const Route = createRootRoute({
  head: async ({ matches }) => {
    const pathname = matches.at(-1)?.pathname ?? '/'
    const { seo } = await getIntlayerAsync('site', getLocaleFromPath(pathname))

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
          title: seo.title,
        },
        { name: 'description', content: seo.description },
      ],
      links: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.json' },
        {
          rel: 'stylesheet',
          href: appCss,
        },
      ],
    }
  },
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function NotFound() {
  const { notFound } = useIntlayer('site')

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>{notFound.description}</p>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname })
  const locale = getLocaleFromPath(pathname)

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Analytics>
          <IntlayerProvider locale={locale}>
            <Header />
            {children}
            <Footer />
          </IntlayerProvider>
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
