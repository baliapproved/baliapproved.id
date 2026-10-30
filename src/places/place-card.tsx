import { RiArrowRightUpLine, RiMapPin2Line } from '@remixicon/react'
import { Link } from '@tanstack/react-router'
import { useIntlayer, useLocale } from 'react-intlayer'
import { Card, CardContent } from '@/design-system/card'
import { PlaceBadge } from './place-badge'
import { formatSpending } from './spending'
import type { Places } from './places.schema'

const previewFrames = [
  'right-5 -rotate-6 sm:right-9',
  'right-2.5 rotate-2 sm:right-4.5',
  'right-0 rotate-6',
] as const

export function PlaceCard({ place }: { place: Places[number] }) {
  const categories = useIntlayer('place-categories')
  const labels = useIntlayer('place-card')
  const { locale } = useLocale()
  const previews = place.gallery?.length
    ? place.gallery.slice(0, previewFrames.length)
    : [place.cutout]
  const spending = place.spending
  const amount = formatSpending(spending, locale)

  return (
    <Card
      size="sm"
      className="relative h-full gap-2 rounded-3xl pt-8 pb-3 shadow-none ring-0 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring sm:pt-6 sm:pb-4"
    >
      <CardContent className="px-3 sm:px-4">
        <img
          src={place.cutout.url}
          alt={place.cutout.alt?.value ?? ''}
          lang={place.cutout.alt?.language}
          width={place.cutout.width}
          height={place.cutout.height}
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
            params={(previous) => ({ ...previous, slug: place.slug })}
            className="outline-none after:absolute after:inset-0"
          >
            {place.name}
          </Link>
        </h3>
        <div className="mt-auto flex items-end gap-2">
          {amount && (
            <p className="min-w-0 text-xs text-muted-foreground sm:text-sm">
              {spending?.min == null && <>{labels.under} </>}
              <span className="whitespace-nowrap text-foreground">{amount}</span>
              <span className="block text-xs">
                {place.category === 'stay' ? labels.perNight : labels.perPerson}
              </span>
            </p>
          )}
          <span
            aria-hidden="true"
            className="pointer-events-none relative ml-auto h-8 w-14 shrink-0 sm:h-10 sm:w-20"
          >
            {previews.map((photo, index) => (
              <img
                key={photo.url}
                src={photo.url}
                alt=""
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className={`absolute bottom-0 size-6 rounded-md object-cover shadow-sm ring-2 ring-card sm:size-8 ${previewFrames[previewFrames.length - previews.length + index]}`}
                style={{ zIndex: index + 1 }}
              />
            ))}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
