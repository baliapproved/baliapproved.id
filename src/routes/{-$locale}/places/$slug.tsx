import { RiArrowRightUpLine } from '@remixicon/react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useIntlayer, useLocale } from 'react-intlayer'

import { useWebsiteAction } from '@/analytics/use-web-action'
import { buttonVariants } from '@/design-system/button'
import { getPlaces } from '@/places/places.functions'
import { PlaceBadge } from '@/places/place-badge'
import { PlaceCard } from '@/places/place-card'
import { PlaceContact } from '@/places/place-contact'
import { PlaceFindings } from '@/places/place-findings'
import { buildPlaceJsonLd } from '@/places/place-json-ld'
import { PlacePhotos } from '@/places/place-photos'
import { PlaceReview } from '@/places/place-review'
import { formatSpending } from '@/places/spending'
import { buildPageSeo, SITE_NAME, toSocialImageUrl } from '@/seo/seo'

export const Route = createFileRoute('/{-$locale}/places/$slug')({
  loader: async ({ params, context }) => {
    const places = await getPlaces({ data: context.locale })
    const place = places.find((item) => item.slug === params.slug)
    if (!place) throw notFound()
    return { place, morePlaces: places.filter((item) => item.slug !== params.slug).slice(0, 3) }
  },
  head: ({ match, loaderData }) => {
    if (!loaderData) return {}
    const { place } = loaderData
    const locale = match.context.locale
    const leadPhoto = place.gallery?.[0]

    return buildPageSeo({
      locale,
      pathname: match.pathname,
      title: `${place.name} | ${SITE_NAME}`,
      description: place.description.value,
      image: leadPhoto ? toSocialImageUrl(leadPhoto.url) : undefined,
      imageAlt: leadPhoto ? (leadPhoto.alt?.value ?? place.name) : undefined,
      jsonLd: buildPlaceJsonLd(place, locale),
    })
  },
  component: PlacePage,
})

function PlacePage() {
  const { place, morePlaces } = Route.useLoaderData()
  const labels = useIntlayer('place-detail')
  const cardLabels = useIntlayer('place-card')
  const contactLabels = useIntlayer('place-contact')
  const { locale } = useLocale()
  const trackWebsiteAction = useWebsiteAction()
  const spending = formatSpending(place.spending, locale)

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-[1920px] px-5 pt-6 pb-16 sm:px-8 sm:pt-10 lg:px-12 xl:px-20">
        <header className="flex flex-wrap items-end gap-x-8 gap-y-5">
          <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <img
              src={place.cutout.url}
              alt={place.cutout.alt?.value ?? ''}
              lang={place.cutout.alt?.language}
              width={place.cutout.width}
              height={place.cutout.height}
              loading="eager"
              decoding="async"
              className="w-24 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground sm:text-base">{place.area}</p>
              <h1 className="mt-1 text-[1.625rem]/8 font-medium tracking-tight text-balance sm:text-[2.5rem]/11">
                {place.name}
              </h1>
              {place.badge && (
                <div className="mt-1">
                  <PlaceBadge badge={place.badge} />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:ml-auto sm:flex-row sm:items-end sm:gap-8">
            {spending && (
              <p>
                <span className="block text-sm text-muted-foreground">{labels.spending}</span>
                <span className="block font-medium">
                  {place.spending?.min == null && <>{cardLabels.under} </>}
                  {spending}{' '}
                  {place.category === 'stay' ? cardLabels.perNight : cardLabels.perPerson}
                </span>
              </p>
            )}
            {place.contactLocation?.mapsUrl && (
              <a
                href={place.contactLocation.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWebsiteAction('maps_click', 'place_review', { place })}
                className={buttonVariants({ size: 'lg' })}
              >
                {labels.maps}
                <RiArrowRightUpLine aria-hidden data-icon="inline-end" />
                <span className="sr-only"> {contactLabels.opensInNewTab}</span>
              </a>
            )}
          </div>
        </header>
        <PlacePhotos photos={place.gallery} />
        <section aria-labelledby="place-about" className="mt-12">
          <h2 id="place-about" className="text-2xl font-medium tracking-tight">
            {labels.about}
          </h2>
          <p
            lang={place.description.language}
            className="mt-3 max-w-[34rem] text-base/7 text-pretty text-muted-foreground"
          >
            {place.description.value}
          </p>
          <PlaceContact place={place} />
        </section>
        <PlaceReview place={place} />
        <PlaceFindings place={place} />
        {morePlaces.length > 0 && (
          <section aria-labelledby="more-places" className="mt-16">
            <div className="flex items-baseline justify-between gap-4">
              <h2 id="more-places" className="text-2xl font-medium tracking-tight">
                {labels.more}
              </h2>
              <Link
                to="/{-$locale}"
                params={(previous) => ({ ...previous })}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {labels.seeAll}
              </Link>
            </div>
            <ul className="mt-4 grid gap-3 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {morePlaces.map((item) => (
                <li key={item._id} className="min-w-0">
                  <PlaceCard place={item} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  )
}
