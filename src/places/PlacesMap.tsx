import { Map, Marker, Popup } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import { useState } from "react";

export type MapPlace = {
  slug: string;
  title: string;
  area: string;
  lat: number;
  lng: number;
};

export function PlacesMap({ places }: { places: MapPlace[] }) {
  const [selected, setSelected] = useState<MapPlace>();
  const lats = places.map(({ lat }) => lat);
  const lngs = places.map(({ lng }) => lng);

  return (
    <Map
      workerUrl={workerUrl}
      mapStyle="https://tiles.openfreemap.org/styles/positron"
      initialViewState={{
        bounds: [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ],
        // The bottom clears the attribution bar.
        fitBoundsOptions: {
          padding: { top: 40, right: 40, bottom: 72, left: 40 },
        },
      }}
      cooperativeGestures
      dragRotate={false}
      touchPitch={false}
      onLoad={({ target: map }) => {
        // Warm Positron's cool greys toward the site and drop the village labels.
        map.setPaintProperty("background", "background-color", "#f7f5f2");
        map.setPaintProperty("water", "fill-color", "#dde2e1");
        map.setLayoutProperty("label_village", "visibility", "none");
        map.setLayoutProperty("label_other", "visibility", "none");
        // Fold the credits into the (i) button after two seconds.
        setTimeout(() => {
          map
            .getContainer()
            .querySelector(".maplibregl-compact-show")
            ?.classList.remove("maplibregl-compact-show");
        }, 2000);
      }}
    >
      {places.map((place) => (
        <Marker
          key={place.slug}
          longitude={place.lng}
          latitude={place.lat}
          onClick={(event) => {
            // Keep the map's own click from closing the popup it opens.
            event.originalEvent.stopPropagation();
            setSelected(place);
          }}
        >
          <button
            type="button"
            aria-label={place.title}
            className="block size-4 cursor-pointer rounded-full border-2 border-background bg-primary shadow-sm shadow-foreground/30 transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
        </Marker>
      ))}

      {selected && (
        <Popup
          longitude={selected.lng}
          latitude={selected.lat}
          offset={14}
          closeButton={false}
          onClose={() => setSelected(undefined)}
          className="[&_.maplibregl-popup-content]:rounded-2xl [&_.maplibregl-popup-content]:px-4 [&_.maplibregl-popup-content]:py-3 [&_.maplibregl-popup-content]:font-sans [&_.maplibregl-popup-content]:shadow-lg"
        >
          <a
            href={`/places/${selected.slug}`}
            className="block rounded-sm text-sm/5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span className="font-medium">{selected.title}</span>
            <span className="block text-muted-foreground">{selected.area}</span>
          </a>
        </Popup>
      )}
    </Map>
  );
}
