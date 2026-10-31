import { FullscreenControl, Map, Marker } from '@vis.gl/react-maplibre'
import { cn } from 'cn'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { useRef, useState } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Spinner } from '@/design-system/spinner'

import { PlaceMapPreview, type MappedPlace } from './place-map-preview'
import styles from './place-map.module.css'
import type { Places } from './places.schema'

function toMappedPlaces(places: Places): MappedPlace[] {
  return (
    places
      .flatMap((place) => {
        const coordinates = place.contactLocation?.coordinates
        if (!place.visitedAt?.length || !coordinates) return []
        return [{ ...place, coordinates }]
      })
      // North to south, so pins further down the map stack on top.
      .sort((a, b) => b.coordinates.lat - a.coordinates.lat)
  )
}

export function PlaceMap({ places, className }: { places: Places; className?: string }) {
  const map = useIntlayer('place-map')
  const { locale } = useLocale()
  const [ready, setReady] = useState(false)
  const mappedPlaces = toMappedPlaces(places)
  const [selectedSlug, setSelectedSlug] = useState<string>()
  const selectedMarker = useRef<HTMLButtonElement | null>(null)
  const selected = mappedPlaces.find((place) => place.slug === selectedSlug)
  const latitudes = mappedPlaces.map((place) => place.coordinates.lat)
  const longitudes = mappedPlaces.map((place) => place.coordinates.lng)

  function closePopup() {
    setSelectedSlug(undefined)
    selectedMarker.current?.focus({ preventScroll: true })
  }

  return (
    <div
      className={cn(styles.map, 'relative', className)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && selected) {
          event.stopPropagation()
          closePopup()
        }
      }}
    >
      <Map
        key={locale}
        style={{ visibility: ready ? 'visible' : 'hidden' }}
        workerUrl={workerUrl}
        locale={{
          'Map.Title': map.label.value,
          'FullscreenControl.Enter': map.controls.enterFullscreen.value,
          'FullscreenControl.Exit': map.controls.exitFullscreen.value,
          'CooperativeGesturesHandler.WindowsHelpText': map.controls.zoomWithCtrl.value,
          'CooperativeGesturesHandler.MacHelpText': map.controls.zoomWithCommand.value,
          'CooperativeGesturesHandler.MobileHelpText': map.controls.moveWithTwoFingers.value,
        }}
        mapStyle="https://tiles.openfreemap.org/styles/positron"
        initialViewState={
          mappedPlaces.length > 0
            ? {
                bounds: [
                  [Math.min(...longitudes), Math.min(...latitudes)],
                  [Math.max(...longitudes), Math.max(...latitudes)],
                ],
                fitBoundsOptions: {
                  padding: { top: 80, right: 40, bottom: 40, left: 40 },
                  maxZoom: 15,
                },
              }
            : { longitude: 115.19, latitude: -8.41, zoom: 8.5 }
        }
        cooperativeGestures
        dragRotate={false}
        touchPitch={false}
        onLoad={({ target }) => {
          target.setPaintProperty('background', 'background-color', '#f7f5f2')
          target.setPaintProperty('water', 'fill-color', '#d6e1de')
          target.setLayoutProperty('label_village', 'visibility', 'none')
          target.setLayoutProperty('label_other', 'visibility', 'none')
          setReady(true)
        }}
        onRemove={() => setReady(false)}
      >
        <FullscreenControl />

        {mappedPlaces.map((place) => (
          <Marker
            key={place.slug}
            longitude={place.coordinates.lng}
            latitude={place.coordinates.lat}
            style={{ zIndex: selectedSlug === place.slug ? 1 : undefined }}
          >
            <button
              ref={selectedSlug === place.slug ? selectedMarker : undefined}
              type="button"
              aria-label={place.name}
              aria-haspopup="dialog"
              aria-expanded={selectedSlug === place.slug}
              onClick={(event) => {
                event.stopPropagation()
                setSelectedSlug(selectedSlug === place.slug ? undefined : place.slug)
              }}
              className="block size-10 cursor-pointer rounded-full bg-background p-1 shadow-md ring-1 ring-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-expanded:ring-2 aria-expanded:ring-primary motion-safe:transition-transform motion-safe:hover:scale-110"
            >
              <img
                src={place.cutout.url}
                alt=""
                draggable={false}
                className="size-full object-contain"
              />
            </button>
          </Marker>
        ))}

        {selected && <PlaceMapPreview key={selected.slug} place={selected} onClose={closePopup} />}
      </Map>
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted px-6 text-center">
          <Spinner
            aria-hidden="true"
            className="size-5 text-muted-foreground motion-reduce:animate-none"
          />
          <p role="status" className="text-sm text-muted-foreground">
            {map.loading}
          </p>
        </div>
      )}
    </div>
  )
}
