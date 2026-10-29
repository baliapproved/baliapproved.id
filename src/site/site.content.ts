import { t, type Dictionary } from 'intlayer'

export default {
  key: 'site',
  content: {
    navigation: {
      discover: t({
        en: 'Discover',
        id: 'Jelajahi',
        ja: '見つける',
        ko: '둘러보기',
        'zh-CN': '探索',
      }),
      blog: t({ en: 'Blog', id: 'Blog', ja: 'ブログ', ko: '블로그', 'zh-CN': '博客' }),
      about: t({
        en: 'About',
        id: 'Tentang kami',
        ja: '私たちについて',
        ko: '소개',
        'zh-CN': '关于我们',
      }),
      primary: t({
        en: 'Primary',
        id: 'Navigasi utama',
        ja: 'メインナビゲーション',
        ko: '주 메뉴',
        'zh-CN': '主导航',
      }),
      home: t({
        en: 'Bali Approved home',
        id: 'Beranda Bali Approved',
        ja: 'Bali Approved ホーム',
        ko: 'Bali Approved 홈',
        'zh-CN': 'Bali Approved 首页',
      }),
      menu: t({ en: 'Menu', id: 'Menu', ja: 'メニュー', ko: '메뉴', 'zh-CN': '菜单' }),
      search: t({ en: 'Search', id: 'Cari', ja: '検索', ko: '검색', 'zh-CN': '搜索' }),
      language: t({ en: 'Language', id: 'Bahasa', ja: '言語', ko: '언어', 'zh-CN': '语言' }),
    },
    notFound: {
      description: t({
        en: 'The requested page could not be found.',
        id: 'Halaman yang Anda cari tidak ditemukan.',
        ja: 'お探しのページが見つかりませんでした。',
        ko: '요청하신 페이지를 찾을 수 없습니다.',
        'zh-CN': '找不到您请求的页面。',
      }),
    },
  },
} satisfies Dictionary
