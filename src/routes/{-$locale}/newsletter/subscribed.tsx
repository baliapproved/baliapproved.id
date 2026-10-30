import { createFileRoute, Link } from '@tanstack/react-router'
import { cn } from 'cn'
import { getIntlayer } from 'intlayer'
import { useIntlayer } from 'react-intlayer'

import { buttonVariants } from '@/design-system/button'
import { NewsletterEnvelope } from '@/newsletter/newsletter-envelope'
import styles from '@/newsletter/subscribed.module.css'
import { buildPageSeo, SITE_NAME } from '@/seo/seo'

export const Route = createFileRoute('/{-$locale}/newsletter/subscribed')({
  head: ({ match }) => {
    const locale = match.context.locale
    const { subscribedHeading, subscribedDescription } = getIntlayer('newsletter', locale)
    return buildPageSeo({
      locale,
      pathname: match.pathname,
      title: `${subscribedHeading} | ${SITE_NAME}`,
      description: subscribedDescription,
      indexable: false,
    })
  },
  component: Subscribed,
})

function Subscribed() {
  const { subscribedHeading, subscribedDescription, seePlaces, unsubscribeHint } =
    useIntlayer('newsletter')

  return (
    <main className="flex flex-1 px-5 pb-24">
      <article className="mx-auto flex w-full max-w-md flex-col items-center justify-center py-12 text-center">
        <NewsletterEnvelope className={cn(styles.envelope, 'h-32 w-44 sm:h-36 sm:w-52')} />
        <h1 className="mt-8 text-3xl/9 font-medium tracking-tight text-balance sm:text-4xl/10">
          {subscribedHeading}
        </h1>
        <p className="mt-3 text-base/6 text-pretty text-foreground/65">{subscribedDescription}</p>
        <Link
          to="/{-$locale}"
          params={(previous) => ({ locale: previous.locale })}
          className={buttonVariants({ size: 'lg', className: 'mt-8 w-full sm:w-auto' })}
        >
          {seePlaces}
        </Link>
        <p className="mt-4 text-sm/5 text-pretty text-muted-foreground">{unsubscribeHint}</p>
      </article>
    </main>
  )
}
