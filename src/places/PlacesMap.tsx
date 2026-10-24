import { Map, Marker, Popup } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import { useState } from "react";

export type MapPlace = {
  slug: string;
  title: string;
  area: string;
  cutout: string;
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
        fitBoundsOptions: { padding: 40 },
      }}
      // The About page credits the map below its content instead.
      attributionControl={false}
      cooperativeGestures
      dragRotate={false}
      touchPitch={false}
      onLoad={({ target: map }) => {
        // Warm Positron's cool greys toward the site and drop the village labels.
        map.setPaintProperty("background", "background-color", "#f7f5f2");
        map.setPaintProperty("water", "fill-color", "#dde2e1");
        map.setLayoutProperty("label_village", "visibility", "none");
        map.setLayoutProperty("label_other", "visibility", "none");
      }}
    >
      {places.map((place) => (
        <Marker
          key={place.slug}
          longitude={place.lng}
          latitude={place.lat}
          // Lift the open place above the pins it overlaps.
          style={{ zIndex: selected === place ? 1 : undefined }}
          onClick={(event) => {
            // Keep the map's own click from closing the popup it opens.
            event.originalEvent.stopPropagation();
            setSelected(place);
          }}
        >
          <button
            type="button"
            aria-label={place.title}
            aria-expanded={selected === place}
            className="block size-10 cursor-pointer rounded-full bg-background p-1 shadow-md ring-1 ring-foreground/5 motion-safe:transition-transform motion-safe:hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-expanded:ring-2 aria-expanded:ring-primary"
          >
            <img
              src={place.cutout}
              alt=""
              draggable={false}
              className="size-full object-contain"
            />
          </button>
        </Marker>
      ))}

      {selected && (
        <Popup
          longitude={selected.lng}
          latitude={selected.lat}
          offset={24}
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
