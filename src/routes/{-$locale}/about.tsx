import { RiWhatsappLine } from '@remixicon/react'
import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { cn } from 'cn'
import { getIntlayer } from 'intlayer'
import { useIntlayer } from 'react-intlayer'

import { TeamPhoto } from '@/about/team-photo'
import workWithUsStyles from '@/about/work-with-us.module.css'
import { useWebsiteAction } from '@/analytics/use-web-action'
import { buttonVariants } from '@/design-system/button'
import { PlaceMap } from '@/places/place-map'
import { buildPageSeo, SITE_NAME } from '@/seo/seo'

export const Route = createFileRoute('/{-$locale}/about')({
  head: ({ match }) => {
    const locale = match.context.locale
    const { navigation } = getIntlayer('site', locale)
    const { description } = getIntlayer('about', locale)
    return buildPageSeo({
      locale,
      pathname: match.pathname,
      title: `${navigation.about} | ${SITE_NAME}`,
      description,
    })
  },
  component: About,
})

const rootRoute = getRouteApi('__root__')

function About() {
  const places = rootRoute.useLoaderData()
  const map = useIntlayer('place-map')
  const about = useIntlayer('about')
  const { footer } = useIntlayer('site')
  const trackWebsiteAction = useWebsiteAction()

  return (
    <main className="flex-1">
      <article
        aria-labelledby="about-heading"
        className="mx-auto w-full max-w-150 px-5 pb-12 sm:pt-10"
      >
        <figure>
          <PlaceMap
            places={places}
            className="-mx-5 aspect-4/5 overflow-hidden bg-muted ring-1 ring-foreground/5 has-[canvas:focus-visible]:ring-2 has-[canvas:focus-visible]:ring-ring sm:mx-0 sm:aspect-4/3 sm:rounded-3xl sm:shadow-md sm:ring-offset-3 sm:ring-offset-background lg:-mx-48 lg:aspect-16/9 [&_canvas]:outline-none"
          />
          <figcaption className="mt-4 text-center text-sm/5 text-pretty text-muted-foreground">
            {map.caption}
          </figcaption>
        </figure>
        <h1
          id="about-heading"
          className="mt-8 text-2xl/8 font-medium tracking-tight text-balance sm:text-3xl/9"
        >
          {about.heading}
        </h1>
        <p className="mt-3 text-sm/6 text-pretty text-foreground/65 sm:text-base/6">
          {about.description}
        </p>
        <TeamPhoto className="mt-6 sm:mt-8" />
        <section aria-labelledby="work-with-us" className="mt-12">
          <h2 id="work-with-us" className="text-xl/7 font-medium tracking-tight text-balance">
            <span className={workWithUsStyles.heading}>{about.workWithUs.heading}</span>
          </h2>
          <p className="mt-3 text-sm/6 text-pretty text-foreground/65 sm:text-base/6">
            {about.workWithUs.description}
          </p>
          <a
            href={`https://wa.me/6285117325144?text=${encodeURIComponent(about.workWithUs.message.value)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebsiteAction('collaboration_click', 'about')}
            className={cn(buttonVariants({ size: 'lg' }), 'mt-5 w-full sm:w-auto')}
          >
            <RiWhatsappLine aria-hidden="true" data-icon="inline-start" />
            {about.workWithUs.contact}
            <span className="sr-only"> {footer.opensInNewTab}</span>
          </a>
        </section>
      </article>
    </main>
  )
}
