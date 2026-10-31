import { RiCloseLargeLine, RiMenu2Line } from '@remixicon/react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useIntlayer } from 'react-intlayer'

import { Button } from '@/design-system/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/design-system/popover'
import { PopoverBackdrop } from '@/design-system/popover-backdrop'
import { LanguageSwitcher } from '@/i18n/language-switcher'
import { localeSegment, type Locale } from '@/i18n/locale'
import type { Places } from '@/places/places.schema'
import { PlaceSearch } from '@/search/place-search'

const links = [
  { label: 'discover', to: '/{-$locale}' },
  { label: 'blog', to: '/{-$locale}/blog' },
  { label: 'about', to: '/{-$locale}/about' },
] as const

export function Header({ locale, places }: { locale: Locale; places: Places }) {
  const { navigation } = useIntlayer('site')
  const params = { locale: localeSegment(locale) }
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    // Sits above the homepage hero, which slides up behind it by the header's height.
    <header className="relative z-10">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-[auto_minmax(0,1fr)] items-center gap-2 px-5 py-5 sm:grid-cols-[1fr_auto_1fr] sm:px-8 sm:py-6 lg:px-12 xl:px-20">
        <Link
          to="/{-$locale}"
          params={params}
          aria-label={navigation.home.value}
          className="grid size-[44px] place-items-center justify-self-start rounded-full transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="size-[40px] overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <path
                id="brand-mark-petal"
                d="M32 30C18 29 11 25 12 17C13 9 22 5 29 11C34 15 35 22 32 30Z"
              />
              <filter id="brand-mark-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#2cd88a" />
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3"
                  floodColor="#2cd88a"
                  floodOpacity="0.7"
                />
              </filter>
            </defs>
            <g fill="#000" stroke="#42e89a" strokeWidth="0.8" filter="url(#brand-mark-glow)">
              <use href="#brand-mark-petal" />
              <use href="#brand-mark-petal" transform="rotate(90 32 32)" />
              <use href="#brand-mark-petal" transform="rotate(180 32 32)" />
              <use href="#brand-mark-petal" transform="rotate(270 32 32)" />
            </g>
          </svg>
        </Link>

        <nav aria-label={navigation.primary.value} className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  params={params}
                  activeOptions={{ exact: true, includeSearch: false }}
                  className="inline-flex min-h-11 items-center rounded-full px-4 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                  activeProps={{ className: 'bg-background text-foreground' }}
                  inactiveProps={{ className: 'text-foreground/65 hover:bg-foreground/5' }}
                >
                  {navigation[label]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icon controls are sized in px so large text settings can't push them off screen. */}
        <div className="flex flex-wrap items-center justify-end gap-2.5 justify-self-end">
          <LanguageSwitcher locale={locale} />
          <PlaceSearch places={places} />
          <Popover open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  aria-label={navigation.menu.value}
                  className="size-[44px] rounded-full sm:hidden"
                />
              }
            >
              {mobileNavOpen ? (
                <RiCloseLargeLine aria-hidden="true" className="size-[16px]" />
              ) : (
                <RiMenu2Line aria-hidden="true" className="size-[16px]" />
              )}
            </PopoverTrigger>
            <PopoverBackdrop className="sm:hidden" />
            <PopoverContent
              align="end"
              sideOffset={20}
              className="w-[calc(100vw-2.5rem)] gap-0 p-2 duration-150 ease-out data-[side=bottom]:slide-in-from-top-1! motion-reduce:animate-none! sm:hidden data-open:zoom-in-100! data-closed:zoom-out-100!"
            >
              <nav aria-label={navigation.primary.value}>
                <ul className="flex flex-col">
                  {links.map(({ label, to }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        params={params}
                        activeOptions={{ exact: true, includeSearch: false }}
                        // Pages don't reload on navigation, so close the menu here.
                        onClick={() => setMobileNavOpen(false)}
                        className="flex min-h-11 items-center rounded-2xl px-4 text-base font-medium transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                        activeProps={{ className: 'bg-muted text-foreground' }}
                        inactiveProps={{ className: 'text-foreground/65' }}
                      >
                        {navigation[label]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}
