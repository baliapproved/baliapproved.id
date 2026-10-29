import { RiCheckLine, RiGlobalLine } from '@remixicon/react'
import { useLocation } from '@tanstack/react-router'
import { useIntlayer, useLocale } from 'react-intlayer'

import { Button } from '@/design-system/button'
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from '@/design-system/popover'

import { getLocalizedPathname, languageNames, locales } from './locale'

export function LocaleSwitcher() {
  const location = useLocation()
  const { locale } = useLocale()
  const { navigation } = useIntlayer('site')

  return (
    <Popover>
      <PopoverTrigger
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
      <PopoverContent align="end" className="w-60 gap-2 p-2">
        <PopoverTitle className="px-3 py-2">{navigation.language}</PopoverTitle>
        <ul>
          {locales.map((targetLocale) => (
            <li key={targetLocale}>
              <a
                href={`${getLocalizedPathname(location.pathname, targetLocale)}${location.searchStr}${location.hash ? `#${location.hash}` : ''}`}
                hrefLang={targetLocale}
                lang={targetLocale}
                aria-current={locale === targetLocale ? 'page' : undefined}
                className="flex min-h-11 items-center justify-between gap-3 rounded-2xl px-3 py-2 text-base hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
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
