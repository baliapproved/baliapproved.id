import { RiArrowRightLine, RiCameraLine, RiMapPin2Line, RiQuillPenLine } from '@remixicon/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'
import { useIntlayer } from 'react-intlayer'

import { buttonVariants } from '@/design-system/button'
import { buildPageSeo, SITE_NAME } from '@/seo/seo'

export const Route = createFileRoute('/{-$locale}/blog')({
  head: ({ match }) => {
    const locale = match.context.locale
    const { navigation, blog } = getIntlayer('site', locale)
    return buildPageSeo({
      locale,
      pathname: match.pathname,
      title: `${navigation.blog} | ${SITE_NAME}`,
      description: blog.description,
    })
  },
  component: Blog,
})

function Blog() {
  const { blog } = useIntlayer('site')

  return (
    <main className="flex flex-1 px-5 pb-24 sm:px-8 lg:px-12 xl:px-20">
      <div className="flex w-full flex-1 flex-col items-center justify-center py-12 text-center">
        <div className="mb-6 flex items-center" aria-hidden="true">
          <div className="flex size-14 translate-x-3 translate-y-2 -rotate-12 items-center justify-center rounded-3xl bg-[#2a8c8c]/12 text-[#2a8c8c] shadow-sm">
            <RiCameraLine className="size-6" />
          </div>
          <div className="relative z-10 flex size-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-md">
            <RiQuillPenLine className="size-7" />
          </div>
          <div className="flex size-14 -translate-x-3 translate-y-2 rotate-12 items-center justify-center rounded-3xl bg-[#2a8c8c]/12 text-[#2a8c8c] shadow-sm">
            <RiMapPin2Line className="size-6" />
          </div>
        </div>
        <h1 className="max-w-[34rem] text-[1.625rem]/8 font-medium tracking-tight text-balance sm:text-[2.5rem]/11">
          {blog.heading}
        </h1>
        <p className="mt-3 max-w-[34rem] text-sm/6 text-pretty text-foreground/65 sm:text-base/6">
          {blog.description}
        </p>
        <Link
          to="/{-$locale}"
          params={(previous) => ({ locale: previous.locale })}
          className={buttonVariants({ size: 'lg', className: 'mt-8' })}
        >
          {blog.seePlaces}
          <RiArrowRightLine aria-hidden="true" data-icon="inline-end" />
        </Link>
      </div>
    </main>
  )
}
