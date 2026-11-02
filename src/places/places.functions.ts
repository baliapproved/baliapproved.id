import { createServerFn } from '@tanstack/react-start'
import { staticFunctionMiddleware } from '@tanstack/start-static-server-functions'
import { z } from 'zod'
import { locales } from '@/i18n/locale'
import { fetchPlaces } from './places.service'

export const getPlaces = createServerFn({ method: 'GET' })
  .validator(z.enum(locales))
  .middleware([staticFunctionMiddleware])
  .handler(async ({ data: locale }) => fetchPlaces(locale))
