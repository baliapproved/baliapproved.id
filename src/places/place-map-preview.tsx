import { RiArrowRightUpLine, RiCloseLine } from '@remixicon/react'
import { Link } from '@tanstack/react-router'
import { Popup, useMap, type PopupInstance } from '@vis.gl/react-maplibre'
import { useEffect, useId, useRef } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Button, buttonVariants } from '@/design-system/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/design-system/card'

import type { Places } from './places.schema'
import { formatSpending } from './spending'
import styles from './place-map-preview.module.css'

export type MappedPlace = Places[number] & {
  coordinates: { lat: number; lng: number }
}

export function PlaceMapPreview({ place, onClose }: { place: MappedPlace; onClose: () => void }) {
  const mapLabels = useIntlayer('place-map')
  const cardLabels = useIntlayer('place-card')
  const categories = useIntlayer('place-categories')
  const { locale } = useLocale()
  const titleId = useId()
  const { current: map } = useMap()
  const popupRef = useRef<PopupInstance>(null)
  const amount = formatSpending(place.spending, locale)

  useEffect(() => {
    const popup = popupRef.current
    if (!map || !popup) return

    const container = map.getContainer()
    const element = popup.getElement()

    const fitPreview = () => {
      const bounds = container.getBoundingClientRect()
      const preview = element.getBoundingClientRect()
      // Keep a 12px gutter without changing the zoom or detaching the card from its pin.
      const x =
        Math.min(0, preview.left - bounds.left - 12) +
        Math.max(0, preview.right - bounds.right + 12)
      const y =
        Math.min(0, preview.top - bounds.top - 12) +
        Math.max(0, preview.bottom - bounds.bottom + 12)
      if (x || y) map.panBy([x, y], { duration: 0 })
    }

    const observer = new ResizeObserver(fitPreview)
    observer.observe(container)
    observer.observe(element)
    fitPreview()
    return () => observer.disconnect()
  }, [map])

  return (
    <Popup
      ref={popupRef}
      longitude={place.coordinates.lng}
      latitude={place.coordinates.lat}
      anchor="bottom"
      offset={32}
      maxWidth="none"
      closeButton={false}
      onClose={onClose}
      className={styles.preview}
      style={{ zIndex: 2 }}
    >
      <Card
        size="sm"
        role="dialog"
        aria-labelledby={titleId}
        className="w-72 max-w-[calc(100vw-3rem)] gap-3"
      >
        <CardHeader className="gap-1">
          <CardDescription>
            {categories[place.category]} – {place.area}
          </CardDescription>
          <CardTitle>
            <h3 id={titleId}>{place.name}</h3>
          </CardTitle>
          <CardAction>
            <Button
              variant="secondary"
              size="icon-lg"
              className="min-h-11 min-w-11"
              aria-label={mapLabels.closePreview.value}
              onClick={onClose}
            >
              <RiCloseLine aria-hidden="true" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {amount && (
            <p className="text-muted-foreground">
              {place.spending?.min == null && <>{cardLabels.under} </>}
              <span className="whitespace-nowrap text-foreground">{amount}</span>
              <span className="block text-xs">
                {place.category === 'stay' ? cardLabels.perNight : cardLabels.perPerson}
              </span>
            </p>
          )}
          <p
            lang={place.description.language}
            className="line-clamp-3 text-sm/5 text-muted-foreground"
          >
            {place.description.value}
          </p>
        </CardContent>
        <CardFooter>
          <Link
            to="/{-$locale}/places/$slug"
            params={(previous) => ({ ...previous, slug: place.slug })}
            className={buttonVariants({
              variant: 'secondary',
              size: 'lg',
              className: 'min-h-11 w-full',
            })}
          >
            {mapLabels.viewReview}
            <RiArrowRightUpLine aria-hidden="true" data-icon="inline-end" />
          </Link>
        </CardFooter>
      </Card>
    </Popup>
  )
}
