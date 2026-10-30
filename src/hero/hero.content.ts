import { t, type Dictionary } from 'intlayer'

export default {
  key: 'hero',
  content: {
    updateSchedule: t({
      en: 'Updated every Friday',
      id: 'Diperbarui setiap Jumat',
      ja: '毎週金曜日に更新',
      ko: '매주 금요일 업데이트',
      'zh-CN': '每周五更新',
      ru: 'Обновляется каждую пятницу',
    }),
    heading: t({
      en: 'Bali places we’ve tried ourselves, rated honestly',
      id: 'Tempat di Bali yang kami coba sendiri, diulas dengan jujur',
      ja: '実際に訪れたバリのスポットを、正直にレビュー',
      ko: '직접 가본 발리의 장소들을 솔직하게 리뷰합니다',
      'zh-CN': '亲自探访巴厘岛，分享真实评价',
      ru: 'Места на Бали, которые мы проверили сами и честно оценили',
    }),
    description: t({
      en: 'We review the cafés, stays, and experiences we try, with our own photos and notes from each visit. Subscribe to get each new review by email.',
      id: 'Kami mengulas kafe, penginapan, dan pengalaman yang kami coba, dengan foto dan catatan dari setiap kunjungan. Berlangganan untuk menerima ulasan terbaru lewat email.',
      ja: '実際に訪れたカフェや宿泊施設、体験を、自分たちで撮った写真と訪問時のメモで紹介します。メール登録で新しいレビューをお届けします。',
      ko: '직접 방문한 카페와 숙소, 즐겨 본 체험을 직접 찍은 사진과 방문 기록으로 소개합니다. 구독하시면 새로운 리뷰를 이메일로 받아보실 수 있습니다.',
      'zh-CN':
        '我们亲自探访咖啡馆和住宿，体验各类活动，并用实拍照片和到访笔记分享评价。订阅后，即可通过邮件收到最新评测。',
      ru: 'Мы рассказываем о кафе, жилье и впечатлениях, которые проверили сами, делимся собственными фотографиями и заметками после каждого посещения. Подпишитесь, чтобы получать каждый новый обзор на почту.',
    }),
  },
} satisfies Dictionary
