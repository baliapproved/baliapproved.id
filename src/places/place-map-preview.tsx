import { RiArrowRightUpLine, RiCloseLine } from '@remixicon/react'
import { Link } from '@tanstack/react-router'
import { Popup, useMap, type PopupInstance } from '@vis.gl/react-maplibre'
import { useEffect, useId, useRef } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Button } from '@/design-system/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/design-system/card'
import { defaultLocale, getLocalePathPrefix } from '@/i18n/locale'

import type { MapPlace } from './places.schema'
import { formatSpending } from './spending'
import styles from './place-map-preview.module.css'

export function PlaceMapPreview({ place, onClose }: { place: MapPlace; onClose: () => void }) {
  const { map: mapLabels, listing, categories } = useIntlayer('places')
  const { locale } = useLocale()
  const titleId = useId()
  const { current: map } = useMap()
  const popupRef = useRef<PopupInstance>(null)

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
            <h3 id={titleId}>{place.title}</h3>
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
          {place.spending && (
            <p className="text-muted-foreground">
              {place.spending.min === undefined && <>{listing.under} </>}
              <span className="whitespace-nowrap text-foreground">
                {formatSpending(place.spending, locale)}
              </span>
              <span className="block text-xs">
                {place.category === 'stays' ? listing.perNight : listing.perPerson}
              </span>
            </p>
          )}
          <p className="line-clamp-3 text-sm/5 text-muted-foreground">{place.description}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="secondary"
            size="lg"
            className="min-h-11 w-full"
            nativeButton={false}
            render={
              <Link
                to="/{-$locale}/places/$slug"
                params={{
                  locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale),
                  slug: place.slug,
                }}
              />
            }
          >
            {mapLabels.viewReview}
            <RiArrowRightUpLine aria-hidden="true" data-icon="inline-end" />
          </Button>
        </CardFooter>
      </Card>
    </Popup>
  )
}
