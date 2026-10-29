import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

import { locales } from '@/i18n/locale'

import { readPlace, readPlaces } from './places.server'

const localeInput = z.object({ locale: z.enum(locales) })

export const getPlaces = createServerFn({ method: 'GET' })
  .validator(localeInput)
  .handler(async ({ data }) => readPlaces(data.locale))

export const getPlace = createServerFn({ method: 'GET' })
  .validator(localeInput.extend({ slug: z.string().trim().min(1) }))
  .handler(async ({ data }) => readPlace(data.locale, data.slug))
