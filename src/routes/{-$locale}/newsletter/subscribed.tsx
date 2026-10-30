import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from 'cn'
import { getIntlayerAsync } from 'intlayer'
import { useIntlayer, useLocale } from 'react-intlayer'

import { buttonVariants } from '@/design-system/button'
import { defaultLocale, getLocaleFromPath, getLocalePathPrefix } from '@/i18n/locale'
import { NewsletterEnvelope } from '@/newsletter/newsletter-envelope'
import styles from '@/newsletter/subscribed.module.css'
import { site } from '@/site/site'

export const Route = createFileRoute('/{-$locale}/newsletter/subscribed')({
  head: async ({ match }) => {
    const { subscribedHeading, subscribedDescription } = await getIntlayerAsync(
      'newsletter',
      getLocaleFromPath(match.pathname),
    )
    return {
      meta: [
        { title: `${subscribedHeading} | ${site.name}` },
        { name: 'description', content: subscribedDescription },
        { name: 'robots', content: 'noindex' },
      ],
    }
  },
  component: Subscribed,
})

function Subscribed() {
  const { subscribedHeading, subscribedDescription, seePlaces, unsubscribeHint } =
    useIntlayer('newsletter')
  const { locale } = useLocale()

  return (
    <main className="flex flex-1 bg-border px-5">
      <article className="mx-auto flex w-full max-w-md flex-col items-center justify-center py-16 text-center sm:py-24">
        <NewsletterEnvelope className={cn(styles.envelope, 'h-32 w-44 sm:h-36 sm:w-52')} />
        <h1 className="mt-8 text-3xl/9 font-medium tracking-tight text-balance sm:text-4xl/10">
          {subscribedHeading}
        </h1>
        <p className="mt-3 text-base/6 text-pretty text-foreground/65">{subscribedDescription}</p>
        <Link
          to="/{-$locale}"
          params={{ locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale) }}
          className={buttonVariants({ size: 'lg', className: 'mt-8 w-full sm:w-auto' })}
        >
          {seePlaces}
        </Link>
        <p className="mt-4 text-sm/5 text-pretty text-muted-foreground">{unsubscribeHint}</p>
      </article>
    </main>
  )
}
