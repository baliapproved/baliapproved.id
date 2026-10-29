import { RiArrowRightUpLine, RiMapPin2Line } from '@remixicon/react'
import { Link } from '@tanstack/react-router'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Card, CardContent } from '@/design-system/card'
import { defaultLocale, getLocalePathPrefix } from '@/i18n/locale'

import { PlaceBadge } from './place-badge'
import type { Place } from './places.schema'
import { formatSpending } from './spending'

const previewFrames = [
  'right-5 -rotate-6 sm:right-9',
  'right-2.5 rotate-2 sm:right-4.5',
  'right-0 rotate-6',
] as const

function PhotoPreviews({ photos }: { photos: Place['previews'] }) {
  const frames = photos.slice(0, previewFrames.length)

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none relative ml-auto h-8 w-14 shrink-0 sm:h-10 sm:w-20"
    >
      {frames.map((photo, index) => (
        <img
          key={photo.src}
          src={photo.src}
          alt=""
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className={`absolute bottom-0 size-6 rounded-md object-cover shadow-sm ring-2 ring-card sm:size-8 ${previewFrames[previewFrames.length - frames.length + index]}`}
          style={{ zIndex: index + 1 }}
        />
      ))}
    </span>
  )
}

export function PlaceCard({ place }: { place: Place }) {
  const { categories, listing } = useIntlayer('places')
  const { locale } = useLocale()

  return (
    <Card
      size="sm"
      className="relative h-full gap-2 rounded-3xl pt-8 pb-3 shadow-none ring-0 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring sm:pt-6 sm:pb-4"
    >
      <CardContent className="px-3 sm:px-4">
        <img
          src={place.cutout.src}
          alt={place.cutout.alt}
          width={840}
          height={720}
          loading="lazy"
          decoding="async"
          className="mx-auto aspect-7/6 w-5/6 object-contain p-1 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover/card:scale-[1.02] sm:p-5"
        />
      </CardContent>
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start text-xs sm:inset-x-4 sm:top-4 sm:text-sm">
        {place.badge && <PlaceBadge badge={place.badge} />}
        <span
          aria-hidden="true"
          className="ml-auto hidden size-9 place-items-center rounded-full bg-muted text-foreground/65 transition-colors group-hover/card:text-foreground sm:grid"
        >
          <RiArrowRightUpLine className="size-5" />
        </span>
      </div>
      <CardContent className="flex flex-1 flex-col gap-1 px-3 sm:px-4">
        <p className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-xs text-muted-foreground sm:text-sm">
          <span>{categories[place.category]}</span>
          <span className="inline-flex items-center gap-1">
            <RiMapPin2Line className="size-3.5 shrink-0" aria-hidden="true" />
            {place.area}
          </span>
        </p>
        <h3 className="font-medium wrap-break-word">
          <Link
            to="/{-$locale}/places/$slug"
            params={{
              locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale),
              slug: place.slug,
            }}
            className="outline-none after:absolute after:inset-0"
          >
            {place.title}
          </Link>
        </h3>
        <div className="mt-auto flex items-end gap-2">
          {place.spending && (
            <p className="min-w-0 text-xs text-muted-foreground sm:text-sm">
              {place.spending.min === undefined && <>{listing.under} </>}
              <span className="whitespace-nowrap text-foreground">
                {formatSpending(place.spending, locale)}
              </span>
              <span className="block text-xs">
                {place.category === 'stays' ? listing.perNight : listing.perPerson}
              </span>
            </p>
          )}
          {place.previews.length > 0 && <PhotoPreviews photos={place.previews} />}
        </div>
      </CardContent>
    </Card>
  )
}
