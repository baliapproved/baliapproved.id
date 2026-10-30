import { useIntlayer } from 'react-intlayer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/design-system/carousel'
import type { Places } from './places.schema'

export function PlacePhotos({ photos }: { photos: Places[number]['gallery'] }) {
  const labels = useIntlayer('place-detail')
  if (!photos?.length) return null

  return (
    <Carousel aria-label={labels.gallery.value} className="mt-6">
      <CarouselContent className="-ml-2 sm:-ml-4">
        {photos.map((photo, index) => (
          <CarouselItem
            key={`${photo.url}-${index}`}
            className="basis-[72%] pl-2 sm:basis-2/5 sm:pl-4 lg:basis-1/4"
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
        className="left-4 hidden bg-background/85 sm:inline-flex"
      />
      <CarouselNext
        aria-label={labels.next.value}
        variant="ghost"
        className="right-4 hidden bg-background/85 sm:inline-flex"
      />
    </Carousel>
  )
}
