import type { IntlayerConfig } from 'intlayer'

import { defaultLocale, locales } from './src/i18n/locale'

export default {
  internationalization: {
    locales: [...locales],
    defaultLocale,
    strictMode: 'strict',
  },
  routing: {
    mode: 'prefix-no-default',
    // Public URLs determine the language, including for returning visitors.
    enableProxy: false,
    storage: false,
  },
  content: { contentDir: ['./src'] },
  dictionary: { importMode: 'dynamic', fill: false },
  build: { optimize: true },
  editor: { enabled: false },
} satisfies IntlayerConfig
