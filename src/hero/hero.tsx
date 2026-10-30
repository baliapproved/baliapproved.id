import { cn } from 'cn'
import { useIntlayer } from 'react-intlayer'

import { SubscribeForm } from '@/newsletter/subscribe-form'

import paintTexture from './assets/paint-texture-green.webp'
import styles from './hero.module.css'

export function Hero() {
  const content = useIntlayer('hero')

  return (
    <section
      className={cn(
        styles.surface,
        'relative isolate -mt-21 overflow-hidden pt-21 sm:-mt-23 sm:pt-23',
      )}
    >
      <img
        src={paintTexture}
        alt=""
        width={2020}
        height={778}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 size-full mask-b-from-70% object-cover opacity-25"
      />

      <div className="mx-auto flex w-full max-w-145 flex-col items-center px-5 pt-14 pb-16 text-center sm:pt-18 sm:pb-20">
        <p
          className={cn(
            styles.weeklyBadge,
            'relative inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1 text-xs text-foreground/65 sm:text-sm',
          )}
        >
          <svg
            viewBox="0 0 64 64"
            className={cn(styles.weeklyTick, 'size-3.5 drop-shadow-[0_0_2px_#2cd88a]')}
            aria-hidden="true"
          >
            <path
              id="weekly-petal"
              d="M32 30C18 29 11 25 12 17C13 9 22 5 29 11C34 15 35 22 32 30Z"
            />
            <use href="#weekly-petal" transform="rotate(90 32 32)" />
            <use href="#weekly-petal" transform="rotate(180 32 32)" />
            <use href="#weekly-petal" transform="rotate(270 32 32)" />
          </svg>
          {content.updateSchedule}
        </p>

        <h1 className="mt-5 text-[1.625rem]/8 font-medium tracking-tight text-balance sm:mt-6 sm:text-[2.5rem]/11">
          {content.heading}
        </h1>

        <p className="mt-3 text-sm/6 text-pretty text-foreground/65 sm:text-base/6">
          {content.description}
        </p>

        <SubscribeForm />
      </div>
    </section>
  )
}
