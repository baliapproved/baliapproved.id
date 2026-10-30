import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useIntlayer } from 'react-intlayer'

import { useWebsiteAction } from '@/analytics/use-web-action'
import { localeSegment, type Locale } from '@/i18n/locale'
import { SubscribeForm } from '@/newsletter/subscribe-form'

import baliApprovedLogo from './assets/bali-approved.png'

const exploreLinks = [
  { label: 'discover', to: '/{-$locale}' },
  { label: 'blog', to: '/{-$locale}/blog' },
  { label: 'about', to: '/{-$locale}/about' },
] as const

const externalColumns = [
  {
    title: 'follow',
    links: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/bali.approved/',
        action: 'instagram_click',
      },
      { label: 'WhatsApp', href: 'https://wa.me/6285117325144', action: 'whatsapp_click' },
    ],
  },
  {
    title: 'reviewsBy',
    links: [
      { label: '@lifeisshorj', href: 'https://www.instagram.com/lifeisshorj/', action: undefined },
      { label: 'shorj.com', href: 'https://shorj.com/', action: undefined },
    ],
  },
] as const

const linkClassName =
  'transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring'

export function Footer({ locale }: { locale: Locale }) {
  const [currentYear] = useState(() => new Date().getUTCFullYear())
  const { footer, navigation } = useIntlayer('site')
  const params = { locale: localeSegment(locale) }
  const trackWebsiteAction = useWebsiteAction()

  return (
    <footer>
      <div className="mx-auto w-full max-w-[1920px] px-5 pt-12 pb-6 text-sm/6 sm:px-8 sm:pt-16 sm:pb-8 lg:px-12 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          <div className="max-w-96 min-w-0">
            <Link
              to="/{-$locale}"
              params={params}
              aria-label={navigation.home.value}
              className="inline-flex items-center gap-3 rounded-full transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <img
                src={baliApprovedLogo}
                alt=""
                width={112}
                height={112}
                loading="lazy"
                className="size-14 shrink-0 rounded-full bg-[#005f43] p-1.5"
              />
              <span className="text-lg font-medium">Bali Approved</span>
            </Link>

            <SubscribeForm placement="footer" />

            <p className="mt-4 text-pretty text-foreground/65">{footer.description}</p>
          </div>

          <nav
            aria-label={footer.navigation.value}
            className="grid grid-cols-2 content-start gap-x-6 gap-y-8 sm:grid-cols-3 lg:gap-x-8"
          >
            <div>
              <h2 className="font-medium">{footer.explore}</h2>
              <ul className="mt-2 flex flex-col text-foreground/65">
                {exploreLinks.map(({ label, to }) => (
                  <li key={to} className="py-1.5">
                    <Link to={to} params={params} className={linkClassName}>
                      {navigation[label]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {externalColumns.map(({ title, links }) => (
              <div key={title}>
                <h2 className="font-medium">{footer[title]}</h2>
                <ul className="mt-2 flex flex-col text-foreground/65">
                  {links.map(({ label, href, action }) => (
                    <li key={href} className="py-1.5">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={action ? () => trackWebsiteAction(action, 'footer') : undefined}
                        className={linkClassName}
                      >
                        {label}
                        <span className="sr-only"> {footer.opensInNewTab}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-10 text-xs/5 text-foreground/65 sm:mt-12">
          &copy; {currentYear} Bali Approved
        </p>
      </div>
    </footer>
  )
}
