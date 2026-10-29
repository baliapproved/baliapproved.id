import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { locales } from '@/i18n/locale'

import { readPlacePhotos, readPlaces } from './places.server'

const localeInput = z.object({ locale: z.enum(locales) })

export const getPlaces = createServerFn({ method: 'GET' })
  .validator(localeInput)
  .handler(async ({ data }) => readPlaces(data.locale))

export const getPlacePhotos = createServerFn({ method: 'GET' })
  .validator(localeInput.extend({ slug: z.string().trim().min(1) }))
  .handler(async ({ data }) => readPlacePhotos(data.locale, data.slug))
