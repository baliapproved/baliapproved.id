import { RiCalendarCheckFill } from '@remixicon/react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { PlaceBadge } from './place-badge'

export function PlaceReview({
  place,
}: {
  place: {
    description: string
    badge?: 'approved' | 'good-find'
    lastVisitedAt: string
    category: 'cafes' | 'restaurants' | 'stays' | 'clubs'
  }
}) {
  const { review } = useIntlayer('places')
  const { locale } = useLocale()
  const visited = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${place.lastVisitedAt}T00:00:00Z`))

  return (
    <section aria-labelledby="our-review" className="mt-12 max-w-[34rem]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h2 id="our-review" className="text-2xl font-medium tracking-tight">
          {review.heading}
        </h2>
        {place.badge && <PlaceBadge badge={place.badge} />}
      </div>
      <p className="mt-3 text-base/7 text-pretty text-muted-foreground">{place.description}</p>
      <div className="relative mt-6 overflow-hidden rounded-3xl border border-[#128a52]/15 bg-[#42e89a]/12 p-1">
        <RiCalendarCheckFill
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-6 size-28 -rotate-12 text-[#42e89a]/45"
        />
        <div className="relative flex gap-3 rounded-2xl border border-[#128a52]/20 px-4 py-3">
          <RiCalendarCheckFill aria-hidden className="mt-0.5 size-5 shrink-0 text-[#128a52]" />
          <div>
            <p className="italic">
              {review.lastVisited}{' '}
              <time dateTime={place.lastVisitedAt} className="font-medium">
                {visited}
              </time>
            </p>
            <p className="mt-1 text-sm text-pretty text-muted-foreground">
              {place.category === 'cafes' ? review.fromVisitCafe : review.fromVisit}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
