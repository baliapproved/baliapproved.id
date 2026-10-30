import { t, type Dictionary } from 'intlayer'

export default {
  key: 'places-list',
  content: {
    heading: t({
      en: 'Reviews',
      id: 'Ulasan',
      ja: 'レビュー',
      ko: '리뷰',
      'zh-CN': '评价',
      ru: 'Обзоры',
    }),
    filters: {
      show: t({
        en: 'Show',
        id: 'Tampilkan',
        ja: '表示',
        ko: '보기',
        'zh-CN': '显示',
        ru: 'Показать',
      }),
      all: t({
        en: 'All',
        id: 'Semua',
        ja: 'すべて',
        ko: '전체',
        'zh-CN': '全部',
        ru: 'Все',
      }),
      places: t({
        en: 'Places',
        id: 'Tempat',
        ja: '場所',
        ko: '장소',
        'zh-CN': '地点',
        ru: 'Места',
      }),
      experiences: t({
        en: 'Experiences',
        id: 'Pengalaman',
        ja: '体験',
        ko: '체험',
        'zh-CN': '体验',
        ru: 'Впечатления',
      }),
      services: t({
        en: 'Services',
        id: 'Layanan',
        ja: 'サービス',
        ko: '서비스',
        'zh-CN': '服务',
        ru: 'Услуги',
      }),
      guides: t({
        en: 'Guides',
        id: 'Panduan',
        ja: 'ガイド',
        ko: '가이드',
        'zh-CN': '指南',
        ru: 'Гайды',
      }),
    },
  },
} satisfies Dictionary
