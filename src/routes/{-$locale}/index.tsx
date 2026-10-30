import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import { Hero } from '@/hero/hero'
import { PlacesList } from '@/places/places-list'
import { buildPageSeo, buildSiteJsonLd } from '@/seo/seo'

export const Route = createFileRoute('/{-$locale}/')({
  head: ({ match }) => {
    const locale = match.context.locale
    const { seo } = getIntlayer('site', locale)
    return buildPageSeo({
      locale,
      pathname: match.pathname,
      title: seo.title,
      description: seo.description,
      jsonLd: buildSiteJsonLd(locale),
    })
  },
  component: Home,
})

const rootRoute = getRouteApi('__root__')

function Home() {
  const places = rootRoute.useLoaderData()
  return (
    <main className="flex-1">
      <Hero />
      <PlacesList places={places} />
    </main>
  )
}
