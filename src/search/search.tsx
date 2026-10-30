import { RiSearchLine } from '@remixicon/react'
import { useNavigate } from '@tanstack/react-router'
import { useEffect, useEffectEvent, useState } from 'react'
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
import { defaultLocale, getLocalePathPrefix } from '@/i18n/locale'
import { getSearchPlaces } from '@/places/places.functions'

type SearchState =
  | { status: 'idle' | 'loading' | 'error' }
  | { status: 'success'; places: Awaited<ReturnType<typeof getSearchPlaces>> }

export function Search() {
  const navigate = useNavigate()
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

  const onSearchShortcut = useEffectEvent((event: KeyboardEvent) => {
    if (
      event.defaultPrevented ||
      event.isComposing ||
      event.altKey ||
      event.shiftKey ||
      event.key.toLowerCase() !== 'k' ||
      !(event.metaKey || event.ctrlKey)
    ) {
      return
    }

    event.preventDefault()
    if (event.repeat) return

    if (open) setOpen(false)
    else void openSearch()
  })

  useEffect(() => {
    // Capture before cmdk handles Ctrl+K as its previous-item shortcut.
    document.addEventListener('keydown', onSearchShortcut, true)
    return () => document.removeEventListener('keydown', onSearchShortcut, true)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="icon-lg"
        aria-label={navigation.search.value}
        aria-keyshortcuts="Meta+K Control+K"
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
          <CommandInput placeholder={content.placeholder.value} className="text-base md:text-sm" />
          <CommandList aria-label={content.title.value} aria-busy={state.status === 'loading'}>
            {state.status === 'success' ? (
              <>
                <CommandEmpty>{content.empty}</CommandEmpty>
                <CommandGroup>
                  {state.places.map((place) => (
                    <CommandItem
                      key={place.slug}
                      value={place.title}
                      keywords={[place.area]}
                      onSelect={() => {
                        setOpen(false)
                        void navigate({
                          to: '/{-$locale}/places/$slug',
                          params: {
                            locale:
                              locale === defaultLocale ? undefined : getLocalePathPrefix(locale),
                            slug: place.slug,
                          },
                        })
                      }}
                    >
                      <img
                        src={place.cutout}
                        alt=""
                        width={36}
                        height={36}
                        loading="lazy"
                        className="size-9 shrink-0 object-contain"
                      />
                      <span>
                        {place.title}
                        <span className="font-normal text-muted-foreground"> · {place.area}</span>
                      </span>
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
