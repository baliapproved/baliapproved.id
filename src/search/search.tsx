import { RiSearchLine } from '@remixicon/react'
import { useState } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

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
import { getSearchPlaces } from '@/places/places.functions'

type SearchState =
  | { status: 'idle' | 'loading' | 'error' }
  | { status: 'success'; places: Awaited<ReturnType<typeof getSearchPlaces>> }

export function Search() {
  const { navigation } = useIntlayer('site')
  const content = useIntlayer('search')
  const { locale } = useLocale()
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<SearchState>({ status: 'idle' })

  async function openSearch() {
    setOpen(true)
    if (state.status === 'success' || state.status === 'loading') return

    setState({ status: 'loading' })
    try {
      const places = await getSearchPlaces({ data: { locale } })
      setState({ status: 'success', places })
    } catch {
      setState({ status: 'error' })
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon-lg"
        aria-label={navigation.search.value}
        onClick={openSearch}
        className="size-11 rounded-full"
      >
        <RiSearchLine aria-hidden="true" />
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={content.title.value}
        description={content.description.value}
      >
        <Command label={content.title.value}>
          <CommandInput placeholder={content.placeholder.value} />
          <CommandList aria-label={content.title.value} aria-busy={state.status === 'loading'}>
            {state.status === 'success' ? (
              <>
                <CommandEmpty>{content.empty}</CommandEmpty>
                <CommandGroup>
                  {state.places.map((place) => (
                    <CommandItem key={place.slug} value={place.title}>
                      {place.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            ) : (
              <p role="status" className="py-6 text-center text-sm">
                {state.status === 'error' ? content.error : content.loading}
              </p>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
