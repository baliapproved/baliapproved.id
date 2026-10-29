import { HeadContent, Scripts, createRootRoute, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { IntlayerProvider, useIntlayer } from 'react-intlayer'

import appCss from '@/design-system/styles.css?url'
import { getLocaleFromPath } from '@/i18n/locale'
import { Analytics } from '@/analytics/analytics'
import { Header } from '@/site/header'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
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
          </IntlayerProvider>
        </Analytics>
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
