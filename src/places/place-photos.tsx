import { useRef } from 'react'
import { useIntlayer } from 'react-intlayer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/design-system/carousel'
import type { Places } from './places.schema'

const arrow =
  "hidden size-11 bg-background/85 text-foreground shadow-sm shadow-foreground/10 backdrop-blur-sm hover:bg-background disabled:pointer-events-none disabled:opacity-0 sm:inline-flex [&_svg:not([class*='size-'])]:size-5"

export function PlacePhotos({ photos }: { photos: Places[number]['gallery'] }) {
  const content = useRef<HTMLDivElement>(null)
  const labels = useIntlayer('place-detail')
  if (!photos?.length) return null

  return (
    <Carousel
      aria-label={labels.gallery.value}
      tabIndex={0}
      className="-mx-(--pad) mt-6 outline-none [--pad:--spacing(5)] after:pointer-events-none after:absolute after:inset-x-[calc(var(--pad)-0.25rem)] after:-inset-y-1 after:rounded-[calc(var(--radius-3xl)+0.25rem)] focus-visible:after:outline-2 focus-visible:after:outline-ring sm:[--pad:--spacing(8)] lg:[--pad:--spacing(12)] xl:[--pad:--spacing(20)]"
      opts={{
        align: () =>
          content.current ? parseFloat(getComputedStyle(content.current).paddingLeft) : 0,
      }}
    >
      <CarouselContent ref={content} className="ml-0 gap-2 pl-(--pad) sm:gap-4">
        {photos.map((photo, index) => (
          <CarouselItem
            key={`${photo.url}-${index}`}
            className="basis-[72%] pl-0 last:mr-(--pad) sm:basis-[40%] lg:basis-[calc((100%-var(--pad)-3rem)/4)]"
          >
            <img
              src={photo.url}
              alt={photo.alt?.value ?? ''}
              lang={photo.alt?.language}
              width={photo.width}
              height={photo.height}
              loading={index < 4 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              className="aspect-3/4 w-full rounded-3xl bg-muted object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        aria-label={labels.previous.value}
        variant="ghost"
        className={`left-[calc(var(--pad)+1rem)] ${arrow}`}
      />
      <CarouselNext
        aria-label={labels.next.value}
        variant="ghost"
        className={`right-[calc(var(--pad)+1rem)] ${arrow}`}
      />
    </Carousel>
  )
}
