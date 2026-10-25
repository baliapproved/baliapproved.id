import {
  Map,
  Marker,
  Popup,
  type MapRef,
  type PopupInstance,
} from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import { RiArrowRightUpLine, RiCloseLine } from "@remixicon/react";
import { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/design-system/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/design-system/card";
import "./places-map.css";

export type MapPlace = {
  slug: string;
  title: string;
  area: string;
  description: string;
  spending: string;
  cutout: string;
  lat: number;
  lng: number;
};

export function PlacesMap({ places }: { places: MapPlace[] }) {
  const [selected, setSelected] = useState<MapPlace>();
  const mapRef = useRef<MapRef>(null);
  const popupRef = useRef<PopupInstance>(null);
  const selectedMarker = useRef<HTMLButtonElement | null>(null);
  const lats = places.map(({ lat }) => lat);
  const lngs = places.map(({ lng }) => lng);

  useEffect(() => {
    const map = mapRef.current;
    const popup = popupRef.current;
    if (!selected || !map || !popup) return;

    const container = map.getContainer();
    const element = popup.getElement();

    const fitPreview = () => {
      const bounds = container.getBoundingClientRect();
      const preview = element.getBoundingClientRect();
      // Keep a 12px gutter without changing the zoom or detaching the card from its pin.
      const x =
        Math.min(0, preview.left - bounds.left - 12) +
        Math.max(0, preview.right - bounds.right + 12);
      const y =
        Math.min(0, preview.top - bounds.top - 12) +
        Math.max(0, preview.bottom - bounds.bottom + 12);
      if (x || y) map.panBy([x, y], { duration: 0 });
    };

    const observer = new ResizeObserver(fitPreview);
    observer.observe(container);
    observer.observe(element);
    fitPreview();
    return () => observer.disconnect();
  }, [selected]);

  function closePreview() {
    setSelected(undefined);
    selectedMarker.current?.focus({ preventScroll: true });
  }

  return (
    <Map
      ref={mapRef}
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
        >
          <button
            type="button"
            aria-label={place.title}
            aria-expanded={selected === place}
            onClick={(event) => {
              // Keep the map's own click from closing the popup it opens.
              event.stopPropagation();
              selectedMarker.current = event.currentTarget;
              setSelected(selected === place ? undefined : place);
            }}
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
          ref={popupRef}
          key={selected.slug}
          longitude={selected.lng}
          latitude={selected.lat}
          anchor="bottom"
          offset={32}
          maxWidth="none"
          closeButton={false}
          onClose={() => setSelected(undefined)}
          className="places-map-popup"
        >
          <Card
            size="sm"
            role="dialog"
            aria-labelledby="map-place-title"
            className="w-72 max-w-[calc(100vw-3rem)] gap-3 rounded-3xl font-sans"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.stopPropagation();
                closePreview();
              }
            }}
          >
            <CardHeader>
              <CardTitle>
                <h3 id="map-place-title">{selected.title}</h3>
              </CardTitle>
              <CardDescription>
                {selected.area} · {selected.spending}
              </CardDescription>
              <CardAction>
                <Button
                  variant="secondary"
                  size="icon-lg"
                  className="min-h-11 min-w-11"
                  aria-label="Close place preview"
                  onClick={closePreview}
                >
                  <RiCloseLine aria-hidden="true" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-sm/5 text-muted-foreground">
                {selected.description}
              </p>
            </CardContent>
            <CardFooter>
              <a
                href={`/places/${selected.slug}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "min-h-11 w-full",
                })}
              >
                View review
                <RiArrowRightUpLine aria-hidden="true" data-icon="inline-end" />
              </a>
            </CardFooter>
          </Card>
        </Popup>
      )}
    </Map>
  );
}
