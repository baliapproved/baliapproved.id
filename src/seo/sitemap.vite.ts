import type { tanstackStart } from '@tanstack/react-start/plugin/vite'

import { localizedPaths } from '../i18n/locale.ts'
import { buildAlternateUrls, SITE_URL } from './urls.ts'

type TanStackStartOptions = NonNullable<Parameters<typeof tanstackStart>[0]>

export const startPrerenderConfig = {
  sitemap: {
    enabled: true,
    host: SITE_URL,
    outputPath: 'sitemap.xml',
  },
  prerender: {
    enabled: true,
    onSuccess: ({ page }) => {
      if (page.sitemap?.exclude) return
      return {
        sitemap: {
          ...page.sitemap,
          alternateRefs: buildAlternateUrls(page.path),
        },
      }
    },
  },
  pages: [
    ...localizedPaths(['/']).map((path) => ({ path })),
    ...localizedPaths(['/newsletter/subscribed']).map((path) => ({
      path,
      sitemap: { exclude: true },
    })),
    ...localizedPaths(['/404']).map((path) => ({
      path,
      prerender: { autoSubfolderIndex: false, crawlLinks: false },
      sitemap: { exclude: true },
    })),
  ],
} satisfies TanStackStartOptions
