import { t, type Dictionary } from 'intlayer'

export default {
  key: 'newsletter',
  content: {
    emailLabel: t({
      en: 'Email address',
      id: 'Alamat email',
      ja: 'メールアドレス',
      ko: '이메일 주소',
      'zh-CN': '电子邮箱',
    }),
    submit: t({
      en: 'Subscribe',
      id: 'Berlangganan',
      ja: '登録する',
      ko: '구독하기',
      'zh-CN': '订阅',
    }),
    submitting: t({
      en: 'Subscribing…',
      id: 'Memproses…',
      ja: '登録中…',
      ko: '구독 중…',
      'zh-CN': '订阅中…',
    }),
    success: t({
      en: 'Almost there. Check your inbox to confirm your subscription.',
      id: 'Hampir selesai. Cek kotak masukmu untuk mengonfirmasi langganan.',
      ja: 'あと少しです。受信トレイを確認して、登録を完了してください。',
      ko: '거의 다 됐어요. 받은 편지함에서 구독을 확인해 주세요.',
      'zh-CN': '就差一步。请查看收件箱，确认订阅。',
    }),
    invalidEmail: t({
      en: 'Enter a valid email address.',
      id: 'Masukkan alamat email yang valid.',
      ja: '有効なメールアドレスを入力してください。',
      ko: '올바른 이메일 주소를 입력해 주세요.',
      'zh-CN': '请输入有效的电子邮箱。',
    }),
    error: t({
      en: 'Something went wrong. Please try again.',
      id: 'Terjadi kesalahan. Silakan coba lagi.',
      ja: '問題が発生しました。もう一度お試しください。',
      ko: '문제가 발생했습니다. 다시 시도해 주세요.',
      'zh-CN': '出了点问题，请重试。',
    }),
  },
} satisfies Dictionary
