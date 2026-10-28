import { t, type Dictionary } from 'intlayer'

export default {
  key: 'hero',
  content: {
    updateSchedule: t({
      en: 'Updated every Friday',
      id: 'Diperbarui setiap Jumat',
      ja: '毎週金曜日に更新',
      'zh-TW': '每週五更新',
    }),
    heading: t({
      en: 'Bali places we’ve tried ourselves, rated honestly',
      id: 'Tempat di Bali yang kami coba sendiri, diulas dengan jujur',
      ja: '実際に訪れたバリのスポットを、正直にレビュー',
      'zh-TW': '親自走訪峇里島，分享真實心得',
    }),
    description: t({
      en: 'We review the cafés, stays, and experiences we try, with our own photos and notes from each visit. Subscribe to get each new review by email.',
      id: 'Kami mengulas kafe, penginapan, dan pengalaman yang kami coba, dengan foto dan catatan dari setiap kunjungan. Berlangganan untuk menerima ulasan terbaru lewat email.',
      ja: '実際に訪れたカフェや宿泊施設、体験を、自分たちで撮った写真と訪問時のメモで紹介します。メール登録で新しいレビューをお届けします。',
      'zh-TW':
        '我們親自探訪咖啡廳、住宿與各種體驗，用自己拍的照片和走訪筆記分享心得。訂閱電子報，就能收到最新評價。',
    }),
  },
} satisfies Dictionary
