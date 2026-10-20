import { useEffect, useState } from "react";
import { RiSearchLine } from "@remixicon/react";
import { Button } from "@/design-system/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/design-system/command";

export type SearchPlace = {
  title: string;
  area: string;
  href: string;
  cutout: string;
};

export function Search({ places }: { places: SearchPlace[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="icon-lg"
        aria-label="Search"
        aria-keyshortcuts="Meta+K Control+K"
        className="min-h-11 min-w-11 rounded-full"
        onClick={() => setOpen(true)}
      >
        <RiSearchLine aria-hidden="true" />
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search"
        description="Search approved places"
        className="top-[12dvh] sm:max-w-xl"
      >
        {/* Match the site's input sizes; 16px text also stops iOS zooming on focus. */}
        <Command className="**:data-[slot=input-group]:h-12 sm:**:data-[slot=input-group]:h-10">
          <CommandInput
            placeholder="Search places or areas..."
            className="text-base md:text-sm"
          />
          <CommandList className="max-h-[min(30rem,60dvh)]">
            <CommandEmpty>No places found.</CommandEmpty>
            <CommandGroup heading="Places">
              {places.map(({ title, area, href, cutout }) => (
                <CommandItem
                  key={href}
                  value={title}
                  keywords={[area]}
                  onSelect={() => window.location.assign(href)}
                  className="sm:text-base"
                >
                  <img
                    src={cutout}
                    alt=""
                    loading="lazy"
                    className="size-14 shrink-0 object-contain"
                  />
                  <span>
                    {title}
                    <span className="block font-normal text-muted-foreground">
                      {area}
                    </span>
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
