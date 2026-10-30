import { RiCheckLine, RiGlobalLine } from '@remixicon/react'
import { Link } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { useIntlayer } from 'react-intlayer'

import { Button } from '@/design-system/button'
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from '@/design-system/popover'
import { PopoverBackdrop } from '@/design-system/popover-backdrop'
import { locales, localeSegment, type Locale } from './locale'

const languageNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  ko: '한국어',
  'zh-CN': '简体中文',
  ru: 'Русский',
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const { label } = useIntlayer('language-switcher')
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Line the popup up with the end of the header actions, where the mobile menu opens, rather than this button.
  const alignToActionsEnd = () => {
    const trigger = triggerRef.current
    const actions = trigger?.parentElement
    if (!trigger || !actions) return 0
    return trigger.getBoundingClientRect().right - actions.getBoundingClientRect().right
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={triggerRef}
        render={
          <Button
            variant="outline"
            size="icon-lg"
            aria-label={label.value}
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
        <PopoverTitle className="sr-only">{label}</PopoverTitle>
        <ul>
          {locales.map((language) => (
            <li key={language}>
              <Link
                to="."
                params={(previous) => ({ ...previous, locale: localeSegment(language) })}
                lang={language}
                hrefLang={language}
                aria-current={locale === language ? 'page' : undefined}
                // The header stays mounted across languages, so close the popup here.
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between gap-3 rounded-2xl px-4 text-base font-medium text-foreground/65 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring aria-[current=page]:bg-muted aria-[current=page]:text-foreground"
              >
                {languageNames[language]}
                {locale === language && <RiCheckLine className="size-4" aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
