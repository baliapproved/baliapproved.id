import { t, type Dictionary } from 'intlayer'
import type { Category } from './places.schema'

export default {
  key: 'place-categories',
  content: {
    cafe: t({ en: 'Café', id: 'Kafe', ja: 'カフェ', ko: '카페', 'zh-CN': '咖啡馆', ru: 'Кафе' }),
    restaurant: t({
      en: 'Restaurant',
      id: 'Restoran',
      ja: 'レストラン',
      ko: '레스토랑',
      'zh-CN': '餐厅',
      ru: 'Ресторан',
    }),
    stay: t({
      en: 'Stay',
      id: 'Penginapan',
      ja: '宿泊施設',
      ko: '숙소',
      'zh-CN': '住宿',
      ru: 'Жильё',
    }),
  } satisfies Record<Category, ReturnType<typeof t>>,
} satisfies Dictionary
