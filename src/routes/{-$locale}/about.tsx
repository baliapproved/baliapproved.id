import { createFileRoute } from '@tanstack/react-router'
import { FullscreenControl, Map, Marker } from '@vis.gl/react-maplibre'
import { cn } from 'cn'
import { getIntlayerAsync } from 'intlayer'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { useRef, useState } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { getLocaleFromPath } from '@/i18n/locale'
import { PlaceMapPreview } from '@/places/place-map-preview'
import { getMapPlaces } from '@/places/places.functions'
import styles from '@/places/place-map.module.css'
import { site } from '@/site/site'

export const Route = createFileRoute('/{-$locale}/about')({
  loader: ({ location }) =>
    getMapPlaces({ data: { locale: getLocaleFromPath(location.pathname) } }),
  head: async ({ match }) => {
    const { navigation } = await getIntlayerAsync('site', getLocaleFromPath(match.pathname))
    return { meta: [{ title: `${navigation.about} | ${site.name}` }] }
  },
  component: About,
})

function About() {
  const places = Route.useLoaderData()
  const { map } = useIntlayer('places')
  const about = useIntlayer('about')
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
    <main className="flex-1 bg-border">
      <article
        aria-labelledby="about-heading"
        className="mx-auto w-full max-w-150 px-5 pb-12 sm:pt-10"
      >
        <figure>
          <div
            className={cn(
              styles.map,
              '-mx-5 aspect-4/5 overflow-hidden bg-muted ring-1 ring-foreground/5 has-[canvas:focus-visible]:ring-2 has-[canvas:focus-visible]:ring-ring sm:mx-0 sm:aspect-4/3 sm:rounded-3xl sm:shadow-md sm:ring-offset-3 sm:ring-offset-background lg:-mx-48 lg:aspect-16/9 [&_canvas]:outline-none',
            )}
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

              {selected && (
                <PlaceMapPreview key={selected.slug} place={selected} onClose={closePopup} />
              )}
            </Map>
          </div>
          <figcaption className="mt-4 text-center text-sm/5 text-pretty text-muted-foreground">
            {map.caption}
          </figcaption>
        </figure>
        <h1
          id="about-heading"
          className="mt-8 text-2xl/8 font-medium tracking-tight text-balance sm:text-3xl/9"
        >
          {about.heading}
        </h1>
        <p className="mt-3 text-sm/6 text-pretty text-foreground/65 sm:text-base/6">
          {about.description}
        </p>
      </article>
    </main>
  )
}
