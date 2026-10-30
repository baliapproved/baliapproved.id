import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place-search',
  content: {
    title: t({
      en: 'Search places',
      id: 'Cari tempat',
      ja: 'スポットを検索',
      ko: '장소 검색',
      'zh-CN': '搜索地点',
      ru: 'Поиск мест',
    }),
    description: t({
      en: 'Search for a place by name.',
      id: 'Cari tempat berdasarkan nama.',
      ja: '名前でスポットを検索します。',
      ko: '이름으로 장소를 검색합니다.',
      'zh-CN': '按名称搜索地点。',
      ru: 'Ищите места по названию.',
    }),
    placeholder: t({
      en: 'Search places...',
      id: 'Cari tempat...',
      ja: 'スポットを検索...',
      ko: '장소 검색...',
      'zh-CN': '搜索地点...',
      ru: 'Поиск мест...',
    }),
    empty: t({
      en: 'No places found.',
      id: 'Tidak ada tempat ditemukan.',
      ja: 'スポットが見つかりません。',
      ko: '장소를 찾을 수 없습니다.',
      'zh-CN': '未找到地点。',
      ru: 'Места не найдены.',
    }),
    group: t({
      en: 'Places',
      id: 'Tempat',
      ja: 'スポット',
      ko: '장소',
      'zh-CN': '地点',
      ru: 'Места',
    }),
  },
} satisfies Dictionary
