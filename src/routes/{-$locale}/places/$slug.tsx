import { RiArrowRightUpLine } from '@remixicon/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { useIntlayer, useLocale } from 'react-intlayer'

import { buttonVariants } from '@/design-system/button'
import { getLocaleFromPath } from '@/i18n/locale'
import { PlaceAbout } from '@/places/place-about'
import { PlaceBadge } from '@/places/place-badge'
import { PlaceFindings } from '@/places/place-findings'
import { PlaceMore } from '@/places/place-more'
import { PlacePhotos } from '@/places/place-photos'
import { PlaceReview } from '@/places/place-review'
import { getPlace, getPlaces } from '@/places/places.functions'
import { formatSpending } from '@/places/spending'
import { site } from '@/site/site'

export const Route = createFileRoute('/{-$locale}/places/$slug')({
  loader: async ({ location, params }) => {
    const locale = getLocaleFromPath(location.pathname)
    const [place, places] = await Promise.all([
      getPlace({ data: { locale, slug: params.slug } }),
      getPlaces({ data: { locale } }),
    ])
    if (!place) throw notFound()
    return {
      place,
      morePlaces: places.filter((item) => item.slug !== params.slug).slice(0, 3),
    }
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.place.title} | ${site.name}` }] : [],
  }),
  component: PlacePage,
})

function PlacePage() {
  const { place, morePlaces } = Route.useLoaderData()
  const { listing, header } = useIntlayer('places')
  const { footer } = useIntlayer('site')
  const { locale } = useLocale()

  return (
    <main className="flex-1 bg-border">
      <article className="mx-auto w-full max-w-[1920px] px-5 pt-6 pb-16 sm:px-8 sm:pt-10 lg:px-12 xl:px-20">
        <header className="flex flex-wrap items-end gap-x-8 gap-y-5">
          <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <img
              src={place.cutout.src}
              alt={place.cutout.alt}
              loading="eager"
              decoding="async"
              className="w-24 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground sm:text-base">{place.area}</p>
              <h1 className="mt-1 text-[1.625rem]/8 font-medium tracking-tight text-balance sm:text-[2.5rem]/11">
                {place.title}
              </h1>
              {place.badge && (
                <div className="mt-1">
                  <PlaceBadge badge={place.badge} />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:ml-auto sm:flex-row sm:items-end sm:gap-8">
            {place.spending && (
              <p>
                <span className="block text-sm text-muted-foreground">{header.spending}</span>
                <span className="block font-medium">
                  {formatSpending(place.spending, locale)}{' '}
                  {place.category === 'stays' ? listing.perNight : listing.perPerson}
                </span>
              </p>
            )}
            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: 'lg' })}
            >
              {header.openInMaps}
              <RiArrowRightUpLine aria-hidden="true" data-icon="inline-end" />
              <span className="sr-only"> {footer.opensInNewTab}</span>
            </a>
          </div>
        </header>

        <PlacePhotos title={place.title} photos={place.photos} />

        <PlaceAbout place={place} />
        <PlaceReview place={place} />
        <PlaceFindings place={place} />
        <PlaceMore places={morePlaces} />
      </article>
    </main>
  )
}
