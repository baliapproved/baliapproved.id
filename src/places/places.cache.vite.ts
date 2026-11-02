import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'
import { locales } from '../i18n/locale.ts'
import { fetchPlaces } from './places.server.ts'

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

// Inlined Seroval JSON AST serializer to avoid external seroval dependency
function serializeToSeroval(source: unknown) {
  let id = 0

  function parse(val: unknown): unknown {
    if (val === null) return { t: 2, s: 0 }
    if (val === undefined) return { t: 2, s: 1 }
    if (val === true) return { t: 2, s: 2 }
    if (val === false) return { t: 2, s: 3 }
    if (typeof val === 'number') return { t: 0, s: val }
    if (typeof val === 'string') return { t: 1, s: val }
    if (Array.isArray(val)) {
      const currentId = id++
      const a = val.map(parse)
      return { t: 9, i: currentId, a, o: 0 }
    }
    if (typeof val === 'object') {
      const currentId = id++
      const keys = Object.keys(val as Record<string, unknown>)
      const values = keys.map((k) => parse((val as Record<string, unknown>)[k]))
      return { t: 10, i: currentId, p: { k: keys, v: values }, o: 0 }
    }
    throw new Error(`Unsupported type: ${typeof val}`)
  }

  return {
    t: parse(source),
    f: 127,
    m: [],
  }
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
          const serialized = JSON.stringify(serializeToSeroval({ result: places, context: {} }))
          const filePath = path.join(cacheDir, `${filename}.json`)
          await fs.writeFile(filePath, serialized, 'utf-8')
        }),
      )
    },
  }
}
