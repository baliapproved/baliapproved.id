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
      en: "Confirm your subscription with the link we sent. If you're already subscribed, there's nothing more to do.",
      id: 'Konfirmasikan langgananmu melalui tautan yang kami kirim. Jika sudah berlangganan, tidak perlu melakukan apa pun lagi.',
      ja: 'お送りしたメールのリンクから登録を確認してください。すでに登録済みの場合は、何もする必要はありません。',
      ko: '보내드린 이메일의 링크로 구독을 확인해 주세요. 이미 구독 중이라면 따로 하실 일은 없습니다.',
      'zh-CN': '请点击我们发送的邮件中的链接确认订阅。如果您已订阅，则无需再操作。',
    }),
    checkInbox: t({
      en: 'Check your inbox',
      id: 'Periksa kotak masuk',
      ja: '受信トレイを確認',
      ko: '받은 편지함을 확인해 주세요',
      'zh-CN': '查看收件箱',
    }),
    backToExploring: t({
      en: 'Back to exploring',
      id: 'Kembali menjelajah',
      ja: '探索に戻る',
      ko: '둘러보기로 돌아가기',
      'zh-CN': '继续浏览',
    }),
    inboxHint: t({
      en: 'No email yet? Take a peek in Spam or Promotions.',
      id: 'Belum menerima email? Coba periksa folder Spam atau Promosi.',
      ja: 'メールが届いていませんか？迷惑メールやプロモーションのフォルダもご確認ください。',
      ko: '이메일이 오지 않았나요? 스팸함이나 프로모션함도 확인해 주세요.',
      'zh-CN': '还没收到邮件？请查看垃圾邮件或推广邮件文件夹。',
    }),
    closeDialog: t({
      en: 'Close',
      id: 'Tutup',
      ja: '閉じる',
      ko: '닫기',
      'zh-CN': '关闭',
    }),
    invalidEmail: t({
      en: 'Enter a valid email address.',
      id: 'Masukkan alamat email yang valid.',
      ja: '有効なメールアドレスを入力してください。',
      ko: '올바른 이메일 주소를 입력해 주세요.',
      'zh-CN': '请输入有效的电子邮箱。',
    }),
    rateLimited: t({
      en: 'Too many signup attempts. Please try again in a minute.',
      id: 'Terlalu banyak percobaan. Silakan coba lagi dalam satu menit.',
      ja: '登録の試行回数が多すぎます。1分後にもう一度お試しください。',
      ko: '가입 시도가 너무 많습니다. 1분 후에 다시 시도해 주세요.',
      'zh-CN': '注册尝试次数过多，请在一分钟后重试。',
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
