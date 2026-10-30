import { RiCloseLargeLine, RiMenu2Line } from '@remixicon/react'
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Button } from '@/design-system/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/design-system/popover'
import { PopoverBackdrop } from '@/design-system/popover-backdrop'
import { Search } from '@/search/search'
import { LocaleSwitcher } from '@/i18n/locale-switcher'
import { defaultLocale, getLocalePathPrefix } from '@/i18n/locale'

const links = [
  { label: 'discover', href: '/{-$locale}' },
  { label: 'blog', href: '/{-$locale}/blog' },
  { label: 'about', href: '/{-$locale}/about' },
] as const

export function Header() {
  const { navigation } = useIntlayer('site')
  const { locale } = useLocale()
  const params = { locale: locale === defaultLocale ? undefined : getLocalePathPrefix(locale) }
  const pathname = useLocation({ select: (location) => location.pathname })
  const homePath = params.locale ? `/${params.locale}` : '/'
  const isHome = pathname === homePath || (homePath !== '/' && pathname === `${homePath}/`)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className={isHome ? 'relative z-10' : 'bg-border'}>
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
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  params={params}
                  activeOptions={{ exact: true }}
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
          <LocaleSwitcher />
          <Search key={locale} />
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
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        to={href}
                        params={params}
                        activeOptions={{ exact: true }}
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
