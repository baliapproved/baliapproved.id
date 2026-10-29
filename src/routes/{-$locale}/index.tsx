import {
  RiApps2Line,
  RiBookOpenLine,
  RiCompass3Line,
  RiHandHeartLine,
  RiMapPin2Line,
} from '@remixicon/react'
import { createFileRoute } from '@tanstack/react-router'
import { useIntlayer } from 'react-intlayer'

import { Hero } from '@/hero/hero'
import { getLocaleFromPath } from '@/i18n/locale'
import { getPlaces } from '@/places/places.functions'
import { PlaceCard } from '@/places/place-card'

const filters = [
  { key: 'all', icon: RiApps2Line, disabled: false },
  { key: 'places', icon: RiMapPin2Line, disabled: false },
  { key: 'experiences', icon: RiCompass3Line, disabled: true },
  { key: 'services', icon: RiHandHeartLine, disabled: true },
  { key: 'guides', icon: RiBookOpenLine, disabled: true },
] as const

export const Route = createFileRoute('/{-$locale}/')({
  loader: ({ location }) => getPlaces({ data: { locale: getLocaleFromPath(location.pathname) } }),
  component: Home,
})

function Home() {
  const places = Route.useLoaderData()
  const { listing } = useIntlayer('places')

  return (
    <main className="flex-1 bg-border">
      <Hero />
      <section className="mx-auto w-full max-w-[1920px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 xl:px-20">
        <fieldset className="-mx-1.5 flex flex-wrap gap-2 p-1.5">
          <legend className="sr-only">{listing.filters.show}</legend>
          {filters.map(({ key, icon: Icon, disabled }) => (
            <label
              key={key}
              className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full pr-3 pl-2.5 text-sm text-foreground/65 inset-ring inset-ring-foreground/10 transition-colors hover:bg-foreground/5 has-checked:bg-background has-checked:text-foreground has-checked:inset-ring-0 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring has-disabled:pointer-events-none has-disabled:opacity-50"
            >
              <input
                type="radio"
                name="catalog-filter"
                value={key}
                defaultChecked={key === 'all'}
                disabled={disabled}
                className="sr-only"
              />
              <Icon aria-hidden="true" className="size-4" />
              {listing.filters[key]}
            </label>
          ))}
        </fieldset>
        <ul className="mt-4 grid gap-3 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {places.map((place) => (
            <li key={place.place_id}>
              <PlaceCard place={place} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
