import { createFileRoute, Link } from '@tanstack/react-router'
import { getIntlayerAsync } from 'intlayer'
import { useIntlayer, useLocale } from 'react-intlayer'

import { buttonVariants } from '@/design-system/button'
import { defaultLocale, getLocaleFromPath, getLocalePathPrefix } from '@/i18n/locale'
import { site } from '@/site/site'

export const Route = createFileRoute('/{-$locale}/newsletter/subscribed')({
  head: async ({ match }) => {
    const { subscribedHeading } = await getIntlayerAsync(
      'newsletter',
      getLocaleFromPath(match.pathname),
    )
    return {
      meta: [
        { title: `${subscribedHeading} | ${site.name}` },
        { name: 'robots', content: 'noindex' },
      ],
    }
  },
  component: Subscribed,
})

function Subscribed() {
  const { subscribedHeading, backToExploring } = useIntlayer('newsletter')
  const { locale } = useLocale()

  return (
    <main className="flex flex-1 bg-border px-5">
      <article className="mx-auto flex w-full max-w-md flex-col items-center justify-center py-16 text-center sm:py-24">
        <h1 className="text-[1.625rem]/8 font-medium tracking-tight text-balance sm:text-[2.5rem]/11">
          {subscribedHeading}
        </h1>
        <Link
          to="/{-$locale}"
          params={{ locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale) }}
          className={buttonVariants({ size: 'lg', className: 'mt-8 min-h-11' })}
        >
          {backToExploring}
        </Link>
      </article>
    </main>
  )
}
