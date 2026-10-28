import { t, type Dictionary } from 'intlayer'

export default {
  key: 'site',
  content: {
    navigation: {
      discover: t({ en: 'Discover', id: 'Jelajahi', ja: '見つける', 'zh-TW': '探索' }),
      blog: t({ en: 'Blog', id: 'Blog', ja: 'ブログ', 'zh-TW': '部落格' }),
      about: t({ en: 'About', id: 'Tentang kami', ja: '私たちについて', 'zh-TW': '關於我們' }),
      primary: t({
        en: 'Primary',
        id: 'Navigasi utama',
        ja: 'メインナビゲーション',
        'zh-TW': '主要導覽',
      }),
      home: t({
        en: 'Bali Approved home',
        id: 'Beranda Bali Approved',
        ja: 'Bali Approved ホーム',
        'zh-TW': 'Bali Approved 首頁',
      }),
      menu: t({ en: 'Menu', id: 'Menu', ja: 'メニュー', 'zh-TW': '選單' }),
      search: t({ en: 'Search', id: 'Cari', ja: '検索', 'zh-TW': '搜尋' }),
      language: t({ en: 'Language', id: 'Bahasa', ja: '言語', 'zh-TW': '語言' }),
    },
    notFound: {
      description: t({
        en: 'The requested page could not be found.',
        id: 'Halaman yang Anda cari tidak ditemukan.',
        ja: 'お探しのページが見つかりませんでした。',
        'zh-TW': '找不到您要瀏覽的頁面。',
      }),
    },
  },
} satisfies Dictionary
