import { t, type Dictionary } from 'intlayer'

export default {
  key: 'language-switcher',
  content: {
    label: t({
      en: 'Language',
      id: 'Bahasa',
      ja: '言語',
      ko: '언어',
      'zh-CN': '语言',
      ru: 'Язык',
    }),
  },
} satisfies Dictionary
