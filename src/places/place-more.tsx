import { Link } from '@tanstack/react-router'
import { useIntlayer, useLocale } from 'react-intlayer'

import { defaultLocale, getLocalePathPrefix } from '@/i18n/locale'

import { PlaceCard } from './place-card'
import type { Place } from './places.schema'

export function PlaceMore({ places }: { places: Place[] }) {
  const { more } = useIntlayer('places')
  const { locale } = useLocale()

  if (places.length === 0) return null

  return (
    <section aria-labelledby="more-places" className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="more-places" className="text-2xl font-medium tracking-tight">
          {more.heading}
        </h2>
        <Link
          to="/{-$locale}"
          params={{ locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale) }}
          className="text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          {more.seeAll}
        </Link>
      </div>
      <ul className="mt-4 grid gap-3 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {places.map((place) => (
          <li key={place.place_id} className="min-w-0">
            <PlaceCard place={place} />
          </li>
        ))}
      </ul>
    </section>
  )
}
