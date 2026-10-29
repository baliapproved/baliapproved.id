import { FullscreenControl, Map, Marker } from '@vis.gl/react-maplibre'
import { cn } from 'cn'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { useRef, useState } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { PlaceMapPreview } from './place-map-preview'
import styles from './place-map.module.css'
import type { MapPlace } from './places.schema'

export function PlaceMap({ places, className }: { places: MapPlace[]; className?: string }) {
  const { map } = useIntlayer('places')
  const { locale } = useLocale()
  const [selectedSlug, setSelectedSlug] = useState<string>()
  const selectedMarker = useRef<HTMLButtonElement | null>(null)
  const selected = places.find((place) => place.slug === selectedSlug)
  const latitudes = places.map((place) => place.coordinates.lat)
  const longitudes = places.map((place) => place.coordinates.lng)

  function closePopup() {
    setSelectedSlug(undefined)
    selectedMarker.current?.focus({ preventScroll: true })
  }

  return (
    <div
      className={cn(styles.map, className)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && selected) {
          event.stopPropagation()
          closePopup()
        }
      }}
    >
      <Map
        key={locale}
        workerUrl={workerUrl}
        locale={{
          'FullscreenControl.Enter': map.controls.enterFullscreen.value,
          'FullscreenControl.Exit': map.controls.exitFullscreen.value,
          'CooperativeGesturesHandler.WindowsHelpText': map.controls.zoomWithCtrl.value,
          'CooperativeGesturesHandler.MacHelpText': map.controls.zoomWithCommand.value,
          'CooperativeGesturesHandler.MobileHelpText': map.controls.moveWithTwoFingers.value,
        }}
        mapStyle="https://tiles.openfreemap.org/styles/positron"
        initialViewState={
          places.length > 0
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
        onLoad={({ target: map }) => {
          map.setPaintProperty('background', 'background-color', '#f7f5f2')
          map.setPaintProperty('water', 'fill-color', '#d6e1de')
          map.setLayoutProperty('label_village', 'visibility', 'none')
          map.setLayoutProperty('label_other', 'visibility', 'none')
        }}
      >
        <FullscreenControl />

        {places.map((place) => (
          <Marker
            key={place.slug}
            longitude={place.coordinates.lng}
            latitude={place.coordinates.lat}
            style={{ zIndex: selectedSlug === place.slug ? 1 : undefined }}
          >
            <button
              ref={selectedSlug === place.slug ? selectedMarker : undefined}
              type="button"
              aria-label={place.title}
              aria-haspopup="dialog"
              aria-expanded={selectedSlug === place.slug}
              onClick={(event) => {
                event.stopPropagation()
                setSelectedSlug(selectedSlug === place.slug ? undefined : place.slug)
              }}
              className="block size-10 cursor-pointer rounded-full bg-background p-1 shadow-md ring-1 ring-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-expanded:ring-2 aria-expanded:ring-primary motion-safe:transition-transform motion-safe:hover:scale-110"
            >
              <img
                src={place.cutout.src}
                alt=""
                draggable={false}
                className="size-full object-contain"
              />
            </button>
          </Marker>
        ))}

        {selected && <PlaceMapPreview key={selected.slug} place={selected} onClose={closePopup} />}
      </Map>
    </div>
  )
}
