import { t, type Dictionary } from 'intlayer'

export default {
  key: 'search',
  content: {
    title: t({
      en: 'Search places',
      id: 'Cari tempat',
      ja: '場所を検索',
      ko: '장소 검색',
      'zh-CN': '搜索地点',
    }),
    description: t({
      en: 'Search places by name or area.',
      id: 'Cari tempat berdasarkan nama atau area.',
      ja: '名前やエリアで場所を検索できます。',
      ko: '이름이나 지역으로 장소를 검색하세요.',
      'zh-CN': '按名称或区域搜索地点。',
    }),
    placeholder: t({
      en: 'Search places or areas…',
      id: 'Cari tempat atau area…',
      ja: '場所やエリアを検索…',
      ko: '장소 또는 지역 검색…',
      'zh-CN': '搜索地点或区域…',
    }),
    empty: t({
      en: 'No places found.',
      id: 'Tidak ada tempat yang ditemukan.',
      ja: '場所が見つかりません。',
      ko: '검색된 장소가 없습니다.',
      'zh-CN': '未找到地点。',
    }),
  },
} satisfies Dictionary
