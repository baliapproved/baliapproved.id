import { t, type Dictionary } from 'intlayer'

export default {
  key: 'site',
  content: {
    seo: {
      title: t({
        en: 'Bali Approved | Honest Reviews of Places in Bali',
        id: 'Bali Approved | Review Jujur Tempat di Bali',
        ja: 'Bali Approved | バリのスポットを正直にレビュー',
        ko: 'Bali Approved | 발리의 장소에 대한 솔직한 리뷰',
        'zh-CN': 'Bali Approved | 巴厘岛探店与真实评价',
      }),
      description: t({
        en: 'Firsthand reviews of places around Bali, covering ambience, practical details, and whether each one is worth your time.',
        id: 'Ulasan langsung tentang tempat-tempat di Bali, mencakup suasana, informasi praktis, dan apakah tempat itu layak dikunjungi.',
        ja: '実際に訪れたバリのスポットをレビュー。雰囲気や実用的な情報、訪れる価値があるかをお伝えします。',
        ko: '직접 방문한 발리의 장소들을 리뷰합니다. 분위기와 실용적인 정보, 방문할 가치가 있는지 솔직하게 전합니다.',
        'zh-CN': '亲自探访巴厘岛各处，分享真实评价，涵盖环境氛围、实用信息，以及是否值得一去。',
      }),
    },
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
