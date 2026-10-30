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
      en: 'Search places by name.',
      id: 'Cari tempat berdasarkan nama.',
      ja: '名前で場所を検索できます。',
      ko: '이름으로 장소를 검색하세요.',
      'zh-CN': '按名称搜索地点。',
    }),
    placeholder: t({
      en: 'Search places…',
      id: 'Cari tempat…',
      ja: '場所を検索…',
      ko: '장소 검색…',
      'zh-CN': '搜索地点…',
    }),
    empty: t({
      en: 'No places found.',
      id: 'Tidak ada tempat yang ditemukan.',
      ja: '場所が見つかりません。',
      ko: '검색된 장소가 없습니다.',
      'zh-CN': '未找到地点。',
    }),
    loading: t({
      en: 'Loading places…',
      id: 'Memuat tempat…',
      ja: '場所を読み込み中…',
      ko: '장소 불러오는 중…',
      'zh-CN': '正在加载地点…',
    }),
    error: t({
      en: 'Could not load places. Close and reopen search to try again.',
      id: 'Tidak dapat memuat tempat. Tutup dan buka kembali pencarian untuk mencoba lagi.',
      ja: '場所を読み込めませんでした。検索を閉じて開き直し、もう一度お試しください。',
      ko: '장소를 불러오지 못했습니다. 검색을 닫았다가 다시 열어 시도해 주세요.',
      'zh-CN': '无法加载地点。请关闭搜索后重新打开以重试。',
    }),
  },
} satisfies Dictionary
