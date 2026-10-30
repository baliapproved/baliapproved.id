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
    footer: {
      navigation: t({
        en: 'Footer',
        id: 'Navigasi footer',
        ja: 'フッター',
        ko: '하단 메뉴',
        'zh-CN': '页脚导航',
      }),
      explore: t({
        en: 'Explore',
        id: 'Jelajahi',
        ja: '探索する',
        ko: '탐색',
        'zh-CN': '探索',
      }),
      follow: t({
        en: 'Follow',
        id: 'Ikuti kami',
        ja: 'フォロー',
        ko: '팔로우',
        'zh-CN': '关注我们',
      }),
      reviewsBy: t({
        en: 'Reviews by',
        id: 'Ulasan oleh',
        ja: 'レビュアー',
        ko: '리뷰 작성자',
        'zh-CN': '评价作者',
      }),
      description: t({
        en: 'Honest reviews of cafés, stays, and experiences around Bali, from our own visits. Subscribe to get each new review by email.',
        id: 'Ulasan jujur tentang kafe, penginapan, dan pengalaman di Bali dari kunjungan kami sendiri. Berlangganan untuk menerima setiap ulasan baru lewat email.',
        ja: '実際に訪れたバリのカフェ、宿泊施設、体験を正直にレビュー。登録すると、新しいレビューをメールでお届けします。',
        ko: '직접 방문한 발리의 카페, 숙소, 체험을 솔직하게 리뷰합니다. 구독하고 새로운 리뷰를 이메일로 받아보세요.',
        'zh-CN':
          '亲自探访巴厘岛的咖啡馆、住宿和体验，分享真实评价。订阅后，每篇新评价都会通过邮件发送给您。',
      }),
      opensInNewTab: t({
        en: '(opens in a new tab)',
        id: '(dibuka di tab baru)',
        ja: '（新しいタブで開きます）',
        ko: '(새 탭에서 열림)',
        'zh-CN': '（在新标签页中打开）',
      }),
    },
    blog: {
      heading: t({
        en: 'The blog is coming soon',
        id: 'Blog segera hadir',
        ja: 'ブログは近日公開です',
        ko: '블로그는 곧 공개됩니다',
        'zh-CN': '博客即将上线',
      }),
      description: t({
        en: "Until then, read our reviews of the places we've visited in Bali.",
        id: 'Sambil menunggu, baca ulasan tempat-tempat yang sudah kami kunjungi di Bali.',
        ja: '公開までは、バリで私たちが訪れた場所のレビューをどうぞ。',
        ko: '그때까지는 발리에서 직접 방문한 장소의 리뷰를 읽어 보세요.',
        'zh-CN': '在此之前，可以先读我们在巴厘岛亲自到访过的地点评价。',
      }),
      seePlaces: t({
        en: 'See the places',
        id: 'Lihat tempatnya',
        ja: '場所を見る',
        ko: '장소 보기',
        'zh-CN': '查看地点',
      }),
    },
  },
} satisfies Dictionary
