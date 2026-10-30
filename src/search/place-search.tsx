import { useState } from 'react'
import { RiSearchLine } from '@remixicon/react'
import { useNavigate } from '@tanstack/react-router'
import { useIntlayer } from 'react-intlayer'
import { Button } from '@/design-system/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/design-system/command'
import type { Places } from '@/places/places.schema'

export function PlaceSearch({ places }: { places: Places }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const content = useIntlayer('place-search')

  return (
    <>
      <Button
        variant="outline"
        size="icon-lg"
        aria-label={content.title.value}
        onClick={() => setOpen(true)}
        className="size-[44px] rounded-full"
      >
        <RiSearchLine aria-hidden="true" className="size-[16px]" />
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={content.title.value}
        description={content.description.value}
      >
        <Command>
          <CommandInput placeholder={content.placeholder.value} aria-label={content.title.value} />
          <CommandList>
            <CommandEmpty>{content.empty}</CommandEmpty>
            <CommandGroup heading={content.group.value}>
              {places.map((place) => (
                <CommandItem
                  key={place._id}
                  value={place.name}
                  onSelect={() => {
                    setOpen(false)
                    void navigate({
                      to: '/{-$locale}/places/$slug',
                      params: (previous) => ({ ...previous, slug: place.slug }),
                    })
                  }}
                >
                  {place.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
