import { createFileRoute } from '@tanstack/react-router'
import { FullscreenControl, Map, Marker } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

import { getLocaleFromPath } from '@/i18n/locale'
import { getMapPlaces } from '@/places/places.functions'

export const Route = createFileRoute('/{-$locale}/about')({
  loader: ({ location }) =>
    getMapPlaces({ data: { locale: getLocaleFromPath(location.pathname) } }),
  component: About,
})

function About() {
  const places = Route.useLoaderData()
  const latitudes = places.map((place) => place.coordinates.lat)
  const longitudes = places.map((place) => place.coordinates.lng)

  return (
    <main className="flex-1 bg-border">
      <div className="mx-auto w-full max-w-150 px-5 pb-12 sm:pt-10">
        <div className="-mx-5 aspect-4/5 overflow-hidden bg-muted sm:mx-0 sm:aspect-4/3 sm:rounded-3xl lg:-mx-48 lg:aspect-16/9">
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
          >
            <FullscreenControl />

            {places.map((place) => (
              <Marker
                key={place.slug}
                longitude={place.coordinates.lng}
                latitude={place.coordinates.lat}
              />
            ))}
          </Map>
        </div>
      </div>
    </main>
  )
}
