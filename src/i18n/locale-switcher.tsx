import { RiCheckLine, RiGlobalLine } from '@remixicon/react'
import { useLocation } from '@tanstack/react-router'
import { useRef } from 'react'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Button } from '@/design-system/button'
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from '@/design-system/popover'
import { PopoverBackdrop } from '@/design-system/popover-backdrop'

import { getLocalizedPathname, languageNames, locales } from './locale'

export function LocaleSwitcher() {
  const location = useLocation()
  const { locale } = useLocale()
  const { navigation } = useIntlayer('site')
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Line the popup up with the end of the header actions, where the mobile menu opens, rather than this button.
  const alignToActionsEnd = () => {
    const trigger = triggerRef.current
    const actions = trigger?.parentElement
    if (!trigger || !actions) return 0
    return trigger.getBoundingClientRect().right - actions.getBoundingClientRect().right
  }

  return (
    <Popover>
      <PopoverTrigger
        ref={triggerRef}
        render={
          <Button
            variant="outline"
            size="icon-lg"
            aria-label={navigation.language.value}
            className="size-[44px] rounded-full"
          />
        }
      >
        <RiGlobalLine aria-hidden="true" className="size-[16px]" />
      </PopoverTrigger>
      <PopoverBackdrop className="sm:hidden" />
      <PopoverContent
        align="end"
        alignOffset={alignToActionsEnd}
        sideOffset={20}
        className="w-[calc(100vw-2.5rem)] gap-0 p-2 duration-150 ease-out data-[side=bottom]:slide-in-from-top-1! motion-reduce:animate-none! sm:w-60 data-open:zoom-in-100! data-closed:zoom-out-100!"
      >
        <PopoverTitle className="sr-only">{navigation.language}</PopoverTitle>
        <ul>
          {locales.map((targetLocale) => (
            <li key={targetLocale}>
              <a
                href={`${getLocalizedPathname(location.pathname, targetLocale)}${location.searchStr}${location.hash ? `#${location.hash}` : ''}`}
                hrefLang={targetLocale}
                lang={targetLocale}
                aria-current={locale === targetLocale ? 'page' : undefined}
                className="flex min-h-11 items-center justify-between gap-3 rounded-2xl px-4 text-base font-medium text-foreground/65 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
              >
                {languageNames[targetLocale]}
                {locale === targetLocale && <RiCheckLine className="size-4" aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
