import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place-card',
  content: {
    approved: t({
      en: 'Approved',
      id: 'Approved',
      ja: 'お墨付き',
      ko: '추천하는 곳',
      'zh-CN': '认可推荐',
      ru: 'Одобрено',
    }),
    goodFind: t({
      en: 'Good find',
      id: 'Temuan menarik',
      ja: 'うれしい発見',
      ko: '반가운 발견',
      'zh-CN': '值得一探',
      ru: 'Удачная находка',
    }),
    under: t({ en: 'Under', id: 'Di bawah', ja: '未満', ko: '미만', 'zh-CN': '低于', ru: 'До' }),
    perPerson: t({
      en: 'per person',
      id: 'per orang',
      ja: '1人あたり',
      ko: '1인당',
      'zh-CN': '每人',
      ru: 'на человека',
    }),
    perNight: t({
      en: 'per night',
      id: 'per malam',
      ja: '1泊あたり',
      ko: '1박당',
      'zh-CN': '每晚',
      ru: 'за ночь',
    }),
  },
} satisfies Dictionary
