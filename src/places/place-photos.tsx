import { useRef } from 'react'
import { useIntlayer } from 'react-intlayer'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/design-system/carousel'

export type PlacePhoto = {
  src: string
  alt: string
}

const arrow =
  "hidden size-11 bg-background/85 text-foreground shadow-sm shadow-foreground/10 backdrop-blur-sm hover:bg-background focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-disabled:opacity-0 data-disabled:focus-visible:opacity-50 sm:inline-flex [&_svg:not([class*='size-'])]:size-5"

export function PlacePhotos({ title, photos }: { title: string; photos: PlacePhoto[] }) {
  const content = useIntlayer('places')
  const track = useRef<HTMLDivElement>(null)

  return (
    <Carousel
      // Bleed past the page padding, but rest every snap on it.
      // --pad matches the page gutters: px-5 sm:px-8 lg:px-12 xl:px-20.
      opts={{
        align: () =>
          track.current ? Number.parseFloat(getComputedStyle(track.current).paddingLeft) : 0,
      }}
      aria-label={content.photos.label({ title }).value}
      tabIndex={0}
      // The ring follows the page column, not the full-bleed viewport.
      className="-mx-(--pad) outline-none [--pad:--spacing(5)] after:pointer-events-none after:absolute after:inset-x-[calc(var(--pad)-0.25rem)] after:-inset-y-1 after:rounded-[calc(var(--radius-3xl)+0.25rem)] focus-visible:after:outline-2 focus-visible:after:outline-ring sm:[--pad:--spacing(8)] lg:[--pad:--spacing(12)] xl:[--pad:--spacing(20)]"
    >
      <CarouselContent ref={track} className="ml-0 gap-2 pl-(--pad) sm:gap-4">
        {photos.map((photo, index) => (
          <CarouselItem
            key={photo.src}
            aria-label={
              content.photos.position({
                current: String(index + 1),
                total: String(photos.length),
              }).value
            }
            className="basis-[72%] pl-0 last:mr-(--pad) sm:basis-[40%] lg:basis-[calc((100%-var(--pad)-3rem)/4)]"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index < 4 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : undefined}
              decoding="async"
              draggable={false}
              className="aspect-3/4 w-full rounded-3xl bg-muted object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Stay focusable at the ends so focus isn't dropped mid-row. */}
      <CarouselPrevious
        variant="ghost"
        focusableWhenDisabled
        label={content.photos.previous.value}
        className={`left-[calc(var(--pad)+1rem)] ${arrow}`}
      />
      <CarouselNext
        variant="ghost"
        focusableWhenDisabled
        label={content.photos.next.value}
        className={`right-[calc(var(--pad)+1rem)] ${arrow}`}
      />
    </Carousel>
  )
}
