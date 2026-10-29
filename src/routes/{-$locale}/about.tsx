import { createFileRoute } from '@tanstack/react-router'
import { FullscreenControl, Map, Marker, Popup } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { useRef, useState } from 'react'

import { getLocaleFromPath } from '@/i18n/locale'
import { getMapPlaces } from '@/places/places.functions'

export const Route = createFileRoute('/{-$locale}/about')({
  loader: ({ location }) =>
    getMapPlaces({ data: { locale: getLocaleFromPath(location.pathname) } }),
  component: About,
})

function About() {
  const places = Route.useLoaderData()
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
    <main className="flex-1 bg-border">
      <div className="mx-auto w-full max-w-150 px-5 pb-12 sm:pt-10">
        <div
          className="-mx-5 aspect-4/5 overflow-hidden bg-muted sm:mx-0 sm:aspect-4/3 sm:rounded-3xl lg:-mx-48 lg:aspect-16/9"
          onKeyDown={(event) => {
            if (event.key === 'Escape' && selected) {
              event.stopPropagation()
              closePopup()
            }
          }}
        >
          <Map
            workerUrl={workerUrl}
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
                  type="button"
                  aria-label={place.title}
                  aria-expanded={selectedSlug === place.slug}
                  onClick={(event) => {
                    event.stopPropagation()
                    selectedMarker.current = event.currentTarget
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

            {selected && (
              <Popup
                key={selected.slug}
                longitude={selected.coordinates.lng}
                latitude={selected.coordinates.lat}
                offset={28}
                onClose={closePopup}
                style={{ zIndex: 2 }}
              >
                <p className="pr-4 font-sans text-sm font-medium">{selected.title}</p>
              </Popup>
            )}
          </Map>
        </div>
      </div>
    </main>
  )
}
