import { Link } from '@tanstack/react-router'
import { cn } from 'cn'
import { useIntlayer, useLocale } from 'react-intlayer'

import { buttonVariants } from '@/design-system/button'
import { defaultLocale, getLocalePathPrefix } from '@/i18n/locale'

import notFoundMap from './not-found-map.svg'
import styles from './not-found.module.css'

export function NotFound() {
  const content = useIntlayer('not-found')
  const { locale } = useLocale()

  return (
    <main className="flex flex-1 bg-border px-5">
      <article className="mx-auto flex w-full max-w-md flex-col items-center justify-center py-16 text-center sm:py-24">
        <img
          src={notFoundMap}
          alt=""
          width={180}
          height={136}
          className={cn(styles.map, 'h-32 w-44 sm:h-36 sm:w-52')}
        />
        <h1 className="mt-8 text-3xl/9 font-medium tracking-tight text-balance sm:text-4xl/10">
          {content.heading}
        </h1>
        <p className="mt-3 text-base/6 text-pretty text-foreground/65">{content.description}</p>
        <Link
          to="/{-$locale}"
          params={{ locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale) }}
          className={buttonVariants({ size: 'lg', className: 'mt-8 w-full sm:w-auto' })}
        >
          {content.explorePlaces}
        </Link>
      </article>
    </main>
  )
}
