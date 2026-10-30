import { t, type Dictionary } from 'intlayer'

export default {
  key: 'not-found',
  content: {
    title: t({
      en: 'Page not found',
      id: 'Halaman tidak ditemukan',
      ja: 'ページが見つかりません',
      ko: '페이지를 찾을 수 없습니다',
      'zh-CN': '页面未找到',
      ru: 'Страница не найдена',
    }),
    heading: t({
      en: 'We couldn’t find this page',
      id: 'Halaman ini tidak ditemukan',
      ja: 'このページは見つかりませんでした',
      ko: '이 페이지를 찾을 수 없습니다',
      'zh-CN': '找不到此页面',
      ru: 'Мы не нашли эту страницу',
    }),
    description: t({
      en: 'Head back to explore cafés, stays, and experiences we’ve tried in Bali.',
      id: 'Kembali jelajahi kafe, penginapan, dan pengalaman yang sudah kami coba di Bali.',
      ja: 'バリで実際に訪れたカフェ、宿泊施設、体験のレビューを探してみてください。',
      ko: '돌아가서 발리에서 직접 방문한 카페, 숙소, 체험을 둘러보세요.',
      'zh-CN': '返回探索我们在巴厘岛亲自探访过的咖啡馆、住宿和体验。',
      ru: 'Вернитесь на главную, чтобы посмотреть кафе, жильё и впечатления на Бали, которые мы проверили сами.',
    }),
    explorePlaces: t({
      en: 'Explore the places',
      id: 'Jelajahi tempat',
      ja: '場所を探す',
      ko: '장소 둘러보기',
      'zh-CN': '探索地点',
      ru: 'Смотреть места',
    }),
  },
} satisfies Dictionary
