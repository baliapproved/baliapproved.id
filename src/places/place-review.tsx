import { RiCalendarCheckFill, RiCalendarTodoFill } from '@remixicon/react'
import { useIntlayer, useLocale } from 'react-intlayer'
import type { Places } from './places.schema'
import { getLastVisited } from './visits'

export function PlaceReview({ place }: { place: Places[number] }) {
  const labels = useIntlayer('place-detail')
  const { locale } = useLocale()
  const lastVisited = getLastVisited(place)
  const Icon = lastVisited ? RiCalendarCheckFill : RiCalendarTodoFill
  const date = lastVisited
    ? new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(`${lastVisited}T00:00:00Z`))
    : undefined

  return (
    <section aria-labelledby="our-review" className="mt-12 max-w-[34rem]">
      <h2 id="our-review" className="text-2xl font-medium tracking-tight">
        {labels.review}
      </h2>
      {place.review && (
        <p
          lang={place.review.language}
          className="mt-3 text-base/7 text-pretty text-muted-foreground"
        >
          {place.review.value}
        </p>
      )}
      <div className="relative mt-6 overflow-hidden rounded-3xl border border-[#2a8c8c]/15 bg-[#2a8c8c]/8 p-1">
        <Icon
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-6 size-28 -rotate-12 text-[#2a8c8c]/10"
        />
        <div className="relative flex gap-3 rounded-2xl border border-[#2a8c8c]/25 px-4 py-3">
          <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-[#2a8c8c]" />
          <div>
            {lastVisited ? (
              <>
                <p className="italic">
                  {labels.lastVisited}{' '}
                  <time dateTime={lastVisited} className="font-medium">
                    {date}
                  </time>
                </p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">{labels.fromVisit}</p>
              </>
            ) : (
              <>
                <p className="font-medium italic">{labels.notVisited}</p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  {labels.afterVisit}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
