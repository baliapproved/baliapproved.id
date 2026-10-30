import type { IntlayerConfig } from 'intlayer'
import { defaultLocale, locales } from './src/i18n/locale'

export default {
  internationalization: { locales: [...locales], defaultLocale, strictMode: 'strict' },
  routing: { mode: 'prefix-no-default', enableProxy: false, storage: false },
  content: { contentDir: ['./src'] },
  editor: { enabled: false },
} satisfies IntlayerConfig
