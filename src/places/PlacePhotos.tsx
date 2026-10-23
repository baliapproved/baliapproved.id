import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/design-system/carousel";

export type PlacePhoto = {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
};

const arrow =
  "hidden size-11 bg-background/85 text-foreground shadow-sm shadow-foreground/10 backdrop-blur-sm hover:bg-background focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-disabled:opacity-0 data-disabled:focus-visible:opacity-50 sm:inline-flex [&_svg:not([class*='size-'])]:size-5";

export function PlacePhotos({
  photos,
  label,
}: {
  photos: PlacePhoto[];
  label: string;
}) {
  const content = useRef<HTMLDivElement>(null);

  return (
    <Carousel
      // Bleed past the page padding, but rest every snap on it.
      opts={{
        align: () => parseFloat(getComputedStyle(content.current!).paddingLeft),
      }}
      aria-label={label}
      tabIndex={0}
      // The ring follows the page column, not the full-bleed viewport.
      className="-mx-(--pad) outline-none [--pad:--spacing(5)] after:pointer-events-none after:absolute after:-inset-y-1 after:inset-x-[calc(var(--pad)-0.25rem)] after:rounded-[calc(var(--radius-3xl)+0.25rem)] focus-visible:after:outline-2 focus-visible:after:outline-ring sm:[--pad:--spacing(8)] lg:[--pad:--spacing(12)] xl:[--pad:--spacing(20)]"
    >
      <CarouselContent ref={content} className="ml-0 gap-2 pl-(--pad) sm:gap-4">
        {photos.map((photo, index) => (
          <CarouselItem
            key={photo.src}
            aria-label={`${index + 1} of ${photos.length}`}
            className="basis-[72%] pl-0 last:mr-(--pad) sm:basis-[40%] lg:basis-[calc((100%-var(--pad)-3rem)/4)]"
          >
            <img
              src={photo.src}
              srcSet={photo.srcSet}
              sizes={photo.sizes}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading={index < 4 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
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
        className={`left-[calc(var(--pad)+1rem)] ${arrow}`}
      />
      <CarouselNext
        variant="ghost"
        focusableWhenDisabled
        className={`right-[calc(var(--pad)+1rem)] ${arrow}`}
      />
    </Carousel>
  );
}
