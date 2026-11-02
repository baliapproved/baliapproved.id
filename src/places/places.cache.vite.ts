import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'
import { toJSONAsync } from 'seroval'
import { locales } from '../i18n/locale.ts'
import { fetchPlaces } from './places.service.ts'

function sha1Hex(message: string): string {
  return crypto.createHash('sha1').update(message).digest('hex')
}

function jsonToFilenameSafeString(json: unknown): string {
  const sortedKeysReplacer = (_key: string, value: unknown) =>
    value && typeof value === 'object' && !Array.isArray(value)
      ? Object.keys(value as Record<string, unknown>)
          .sort()
          .reduce<Record<string, unknown>>((acc, curr) => {
            acc[curr] = (value as Record<string, unknown>)[curr]
            return acc
          }, {})
      : value
  return JSON.stringify(json ?? '', sortedKeysReplacer)
    .replace(/[/\\?%*:|"<>]/g, '-')
    .replace(/\s+/g, '_')
}

// TanStack Start compiler generates server fn id via sha256("${filename}--${functionName}_createServerFn_handler")
const functionId = crypto
  .createHash('sha256')
  .update('src/places/places.functions.ts--getPlaces_createServerFn_handler')
  .digest('hex')

export function placesStaticCache(): Plugin {
  let hasRun = false

  return {
    name: 'places-static-cache',
    apply: 'build',
    async closeBundle() {
      if (hasRun) return
      hasRun = true

      const cacheDir = path.resolve(process.cwd(), 'dist/client/__tsr/staticServerFnCache')
      await fs.mkdir(cacheDir, { recursive: true })

      await Promise.all(
        locales.map(async (locale) => {
          const places = await fetchPlaces(locale)
          const hash = jsonToFilenameSafeString(locale)
          const filename = sha1Hex(`${functionId}__${hash}`)
          const serialized = JSON.stringify(await toJSONAsync({ result: places, context: {} }))
          const filePath = path.join(cacheDir, `${filename}.json`)
          await fs.writeFile(filePath, serialized, 'utf-8')
        }),
      )
    },
  }
}
