import { t, type Dictionary } from 'intlayer'

export default {
  key: 'about',
  content: {
    heading: t({
      en: 'We moved to Bali and started writing down everything we tried',
      id: 'Kami pindah ke Bali dan mulai mencatat semua yang kami coba',
      ja: 'バリに移り住み、訪れた場所や体験したことを記録し始めました',
      ko: '발리로 이사한 뒤 직접 가보고 경험한 것들을 기록하기 시작했습니다',
      'zh-CN': '搬到巴厘岛后，我们开始记录亲自去过的地方和体验',
    }),
    description: t({
      en: 'The more we explored, the more we found worth remembering, so we kept a record. Bali Approved is that record. Every café, stay, and experience here is one we tried ourselves, with our own photos and an honest take on how it went. It’s mostly for us to look back on, and we hope it helps you find your next spot too.',
      id: 'Semakin sering kami menjelajahi Bali, semakin banyak hal yang ingin kami ingat. Jadi, kami mulai mencatatnya. Bali Approved adalah kumpulan catatan itu. Semua kafe, penginapan, dan pengalaman di sini sudah kami coba sendiri. Kami membagikan foto yang kami ambil dan cerita jujur dari setiap kunjungan. Catatan ini terutama untuk kami baca lagi nanti. Semoga juga membantu kamu menemukan tempat berikutnya untuk dicoba.',
      ja: 'バリを巡るほど、覚えておきたいことが増えていきました。そこで残し始めた記録が、Bali Approvedです。ここで紹介するカフェも宿泊先も体験も、すべて自分たちで訪れたり試したりしたものです。自分たちで撮った写真と、そのときに感じたことを正直に載せています。私たち自身が後から振り返るための記録ですが、皆さんが次に行きたい場所を見つけるきっかけにもなればうれしいです。',
      ko: '발리를 둘러볼수록 기억해 두고 싶은 것이 많아져 기록을 남기기 시작했습니다. Bali Approved는 그렇게 모인 기록입니다. 여기 소개하는 카페와 숙소, 체험은 모두 저희가 직접 가보고 경험한 것들입니다. 직접 찍은 사진과 함께 어땠는지 솔직하게 담았습니다. 주로 저희가 나중에 돌아보기 위해 남기는 기록이지만, 여러분이 다음에 가볼 곳을 찾는 데도 도움이 되면 좋겠습니다.',
      'zh-CN':
        '在巴厘岛四处探索时，我们发现值得记下来的事情越来越多，于是开始做记录。Bali Approved记录的就是这些。这里介绍的咖啡馆、住宿和体验，都是我们亲自探访或尝试过的。我们用自己拍的照片和文字，分享当时的真实感受。这些记录主要留给我们日后回看，也希望能帮你找到下一个想去的地方。',
    }),
    teamPhotoAlt: t({
      en: 'The Bali Approved team together at a café',
      id: 'Tim Bali Approved berfoto bersama di sebuah kafe',
      ja: 'カフェでのBali Approvedチームの集合写真',
      ko: '카페에서 함께 사진을 찍은 Bali Approved 팀',
      'zh-CN': 'Bali Approved团队在咖啡馆的合影',
    }),
    teamPhotoCaption: t({
      en: 'Yep, that’s us.',
      id: 'Yap, ini kami.',
      ja: 'こんな私たちです。',
      ko: '바로 저희예요.',
      'zh-CN': '这就是我们。',
    }),
    workWithUs: {
      heading: t({
        en: 'Work with us',
        id: 'Kerja sama dengan kami',
        ja: 'コラボレーションのご相談',
        ko: '함께해요',
        'zh-CN': '与我们合作',
      }),
      description: t({
        en: 'Run a café, stay, or experience in Bali and want us to come by? Tell us what makes it worth a visit.',
        id: 'Punya kafe, penginapan, atau aktivitas di Bali dan ingin kami mampir? Ceritakan apa yang membuat tempatmu layak dikunjungi.',
        ja: 'バリでカフェや宿泊施設、体験プログラムを運営していて、私たちに訪れてほしいとお考えですか？ぜひ、その魅力を教えてください。',
        ko: '발리에서 카페, 숙소, 체험 프로그램을 운영하며 저희를 초대하고 싶으신가요? 방문할 만한 매력을 알려주세요.',
        'zh-CN':
          '你在巴厘岛经营咖啡馆、住宿或体验项目，想邀请我们探访吗？聊聊你的地方有什么值得一去的特色。',
      }),
      contact: t({
        en: 'Message us on WhatsApp',
        id: 'Hubungi kami di WhatsApp',
        ja: 'WhatsAppで連絡する',
        ko: 'WhatsApp으로 연락하기',
        'zh-CN': '通过WhatsApp联系我们',
      }),
      message: t({
        en: 'Hi Bali Approved, I’d like to discuss a collaboration.',
        id: 'Halo Bali Approved, saya ingin membicarakan kerja sama.',
        ja: 'Bali Approvedの皆さま、コラボレーションについてご相談したいです。',
        ko: '안녕하세요, Bali Approved. 협업에 대해 이야기하고 싶습니다.',
        'zh-CN': '你好，Bali Approved，我想咨询合作事宜。',
      }),
    },
  },
} satisfies Dictionary
