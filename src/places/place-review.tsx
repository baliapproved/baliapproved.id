import { RiCalendarCheckFill, RiCalendarTodoFill } from '@remixicon/react'
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
  const NoteIcon = place.lastVisitedAt ? RiCalendarCheckFill : RiCalendarTodoFill
  const visited = place.lastVisitedAt
    ? new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(`${place.lastVisitedAt}T00:00:00Z`))
    : undefined

  return (
    <section aria-labelledby="our-review" className="mt-12 max-w-[34rem]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h2 id="our-review" className="text-2xl font-medium tracking-tight">
          {review.heading}
        </h2>
        {place.badge && <PlaceBadge badge={place.badge} />}
      </div>
      {place.description && (
        <p className="mt-3 text-base/7 text-pretty text-muted-foreground">{place.description}</p>
      )}
      <div className="relative mt-6 overflow-hidden rounded-3xl border border-[#2a8c8c]/15 bg-[#2a8c8c]/8 p-1">
        <NoteIcon
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-6 size-28 -rotate-12 text-[#2a8c8c]/10"
        />
        <div className="relative flex gap-3 rounded-2xl border border-[#2a8c8c]/25 px-4 py-3">
          <NoteIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-[#2a8c8c]" />
          <div>
            {place.lastVisitedAt ? (
              <>
                <p className="italic">
                  {review.lastVisited}{' '}
                  <time dateTime={place.lastVisitedAt} className="font-medium">
                    {visited}
                  </time>
                </p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  {place.category === 'cafes' ? review.fromVisitCafe : review.fromVisit}
                </p>
              </>
            ) : (
              <>
                <p className="font-medium italic">{review.notVisited}</p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  {review.afterVisit}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
