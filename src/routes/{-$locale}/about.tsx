import { createFileRoute } from '@tanstack/react-router'
import { Map } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'

export const Route = createFileRoute('/{-$locale}/about')({
  component: About,
})

function About() {
  return (
    <main className="flex-1 bg-border">
      <div className="mx-auto w-full max-w-150 px-5 pb-12 sm:pt-10">
        <div className="-mx-5 aspect-4/5 overflow-hidden bg-muted sm:mx-0 sm:aspect-4/3 sm:rounded-3xl lg:-mx-48 lg:aspect-16/9">
          <Map
            workerUrl={workerUrl}
            mapStyle="https://tiles.openfreemap.org/styles/positron"
            initialViewState={{ longitude: 115.19, latitude: -8.41, zoom: 8.5 }}
            cooperativeGestures
            dragRotate={false}
            touchPitch={false}
          />
        </div>
      </div>
    </main>
  )
}
