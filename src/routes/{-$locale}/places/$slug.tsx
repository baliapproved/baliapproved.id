import { createFileRoute, notFound } from '@tanstack/react-router'

import { getLocaleFromPath } from '@/i18n/locale'
import { PlacePhotos } from '@/places/place-photos'
import { getPlacePhotos } from '@/places/places.functions'
import { site } from '@/site/site'

export const Route = createFileRoute('/{-$locale}/places/$slug')({
  loader: async ({ location, params }) => {
    const place = await getPlacePhotos({
      data: { locale: getLocaleFromPath(location.pathname), slug: params.slug },
    })
    if (!place) throw notFound()
    return place
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.title} | ${site.name}` }] : [],
  }),
  component: PlacePage,
})

function PlacePage() {
  const place = Route.useLoaderData()

  return (
    <main className="flex-1 bg-border">
      <div className="mx-auto w-full max-w-[1920px] px-5 pt-6 pb-16 sm:px-8 sm:pt-10 lg:px-12 xl:px-20">
        <PlacePhotos title={place.title} photos={place.photos} />
      </div>
    </main>
  )
}
