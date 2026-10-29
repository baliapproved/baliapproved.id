import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 7,
  content: {
    place_id: 'chagee_discovery_mall',
    slug: 'chagee-discovery-mall',
    title: 'CHAGEE Discovery Mall',
    category: 'cafes',
    description: t({
      en: 'We came here after work, but the place itself has very good Wi-Fi that worked well for a work session. They also have proper tables for work, though some tables are small and meant for chats only. We really like this place because it faces Kuta Beach, where we can see a beautiful sunset.',
      id: 'Kami datang ke sini setelah bekerja, tetapi tempatnya sendiri punya Wi-Fi yang sangat bagus dan cukup untuk sesi kerja. Ada juga meja yang memang untuk bekerja, meskipun sebagian meja kecil dan hanya untuk mengobrol. Kami sangat suka tempat ini karena menghadap Pantai Kuta, tempat kami bisa melihat matahari terbenam yang indah.',
      ja: '仕事の後に来ましたが、Wi-Fiはとてもよく、作業にも十分使えました。仕事向けのテーブルもありますが、小さくて会話用のものもあります。Kuta Beachに面していて、きれいな夕日が見えるのが本当に気に入っています。',
      ko: '일을 마치고 들렀지만, Wi-Fi가 아주 좋아서 작업하기에도 충분했습니다. 일할 수 있는 제대로 된 테이블도 있지만, 일부는 작고 대화용입니다. 쿠타 해변을 마주하고 있어 아름다운 노을을 볼 수 있다는 점이 정말 좋습니다.',
      'zh-CN':
        '我们是下班后来的，但这里的Wi-Fi很好，用来工作也没问题。也有适合做事的桌子，不过有些桌子很小，只适合聊天。我们很喜欢这里，因为它面向库塔海滩，能看到很美的日落。',
    }),
    about: t({
      en: 'CHAGEE is a tea chain founded in Yunnan, China, in 2017. It brews milk tea from whole tea leaves. This branch is inside Discovery Shopping Mall, facing Kuta Beach.',
      id: 'CHAGEE adalah jaringan teh yang berdiri di Yunnan, Tiongkok, pada 2017. Mereka menyeduh milk tea dari daun teh utuh. Cabang ini berada di dalam Discovery Shopping Mall dan menghadap Pantai Kuta.',
      ja: 'CHAGEEは2017年に中国・雲南で生まれたティーチェーンです。茶葉を丸ごと使ってミルクティーを淹れます。この店舗はDiscovery Shopping Mallの中にあり、Kuta Beachに面しています。',
      ko: 'CHAGEE는 2017년 중국 윈난에서 시작한 티 체인입니다. 찻잎 그대로를 우려 밀크티를 만듭니다. 이 매장은 Discovery Shopping Mall 안에 있으며 쿠타 해변을 마주합니다.',
      'zh-CN':
        'CHAGEE是2017年创立于中国云南的茶饮连锁。他们用整片茶叶冲泡奶茶。这家店在Discovery Shopping Mall里，面向库塔海滩。',
    }),
    area: 'Kuta',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Cream CHAGEE storefront with a wavy lattice canopy, red logo medallion, glass doors, and a giant cup sculpture out front',
        id: 'Bagian depan CHAGEE berwarna krem dengan kanopi kisi bergelombang, medali logo merah, pintu kaca, dan patung cangkir raksasa di depan',
        ja: '波形の格子キャノピー、赤いロゴのメダリオン、ガラス扉、店先の巨大なカップの彫刻がある、クリーム色のCHAGEEの店先',
        ko: '물결 모양 격자 캐노피, 빨간 로고 메달, 유리문, 앞쪽의 거대한 컵 조형물이 있는 크림색 CHAGEE 매장 전면',
        'zh-CN':
          '奶油色的CHAGEE店面，有波浪形格栅雨篷、红色标志圆徽、玻璃门，以及门前的巨型杯子雕塑',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/YDXLJGPpgXLbxemy5',
    coordinates: {
      lat: -8.728433,
      lng: 115.167814,
    },
    instagram: 'chagee.id',
    tiktok: 'chagee.id',
    address: 'Discovery Shopping Mall, Jl. Kartika Plaza, Kuta, Badung',
    postalCode: '80361',
    spending: {
      min: 30000,
      max: 60000,
    },
    visitedAt: ['2026-07-29'],
    wifi: 'available',
    power: 'enough',
    seating: ['indoor'],
    cooling: 'ac',
    noise: 'quiet',
    // Not confirmed on the visit.
    music: null,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'plenty',
      car: 'plenty',
    },
    caveats: t({
      en: 'It only provides tea, which is fine if you already know the place only sells tea. The bathroom is quite far because you need to go to the mall toilet.',
      id: 'Mereka hanya menyajikan teh, dan itu tidak masalah jika sudah tahu tempat ini hanya menjual teh. Kamar mandinya cukup jauh karena harus ke toilet mal.',
      ja: '提供しているのはお茶だけです。お茶だけの店だと知っていれば問題ありません。トイレはモールのものを使うので、かなり離れています。',
      ko: '차만 제공합니다. 차만 파는 곳이라는 것을 알고 있다면 괜찮습니다. 화장실은 쇼핑몰 화장실을 이용해야 해서 꽤 멉니다.',
      'zh-CN':
        '这里只提供茶。如果事先知道它只卖茶，那就没问题。卫生间比较远，因为要去商场的卫生间。',
    }),
    badge: 'good-find',
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: 'CHAGEE wall sign inside its Discovery Shopping Mall location',
          id: 'Papan nama CHAGEE di dinding lokasi Discovery Shopping Mall',
          ja: 'Discovery Shopping Mall店の壁にあるCHAGEEのサイン',
          ko: 'Discovery Shopping Mall 매장 벽의 CHAGEE 간판',
          'zh-CN': 'Discovery Shopping Mall店内墙上的CHAGEE招牌',
        }),
      },
      {
        src: './chagee_1.webp',
        alt: t({
          en: 'The CHAGEE storefront in golden light, with two people sitting on the bench outside and a Bes-Tea Brew Crew board alongside',
          id: 'Bagian depan CHAGEE dalam cahaya keemasan, dengan dua orang duduk di bangku luar dan papan Bes-Tea Brew Crew di sampingnya',
          ja: '金色の光の中のCHAGEEの店先。外のベンチに座る二人と、横のBes-Tea Brew Crewのボード',
          ko: '금빛 조명 속의 CHAGEE 매장 전면. 밖 벤치에 앉은 두 사람과 옆의 Bes-Tea Brew Crew 보드',
          'zh-CN': '金色光线中的CHAGEE店面，外面长凳上坐着两个人，旁边是Bes-Tea Brew Crew展板',
        }),
      },
      {
        src: './chagee_2.webp',
        alt: t({
          en: 'The CHAGEE wordmark and neon C logo on the glass door, with a palm reflected in it and tea products displayed inside',
          id: 'Wordmark CHAGEE dan logo C neon di pintu kaca, dengan pantulan palem dan produk teh yang dipajang di dalam',
          ja: 'ガラス扉のCHAGEEのワードマークとネオンのCロゴ。ヤシの木が映り、中には茶の商品',
          ko: '유리문의 CHAGEE 워드마크와 네온 C 로고. 야자수가 비치고, 안에는 차 제품이 진열되어 있다',
          'zh-CN': '玻璃门上的CHAGEE字标和霓虹C标志，门上映着棕榈，里面陈列着茶产品',
        }),
      },
      {
        src: './chagee_3.webp',
        alt: t({
          en: 'The illuminated C logo on the ribbed wall above the curved tiered bench seating and round tables',
          id: 'Logo C yang menyala di dinding berusuk di atas tempat duduk bangku bertingkat yang melengkung dan meja bundar',
          ja: '曲線の段になったベンチ席と丸テーブルの上、リブ壁で光るCのロゴ',
          ko: '곡선으로 층진 벤치 좌석과 원형 테이블 위, 골이 진 벽에서 빛나는 C 로고',
          'zh-CN': '弧形阶梯长凳和圆桌上方，棱纹墙上亮着的C标志',
        }),
      },
      {
        src: './chagee_4.webp',
        alt: t({
          en: 'Afternoon light across the curved seating area, with someone at a table beside the planted oval window',
          id: 'Cahaya sore di area tempat duduk yang melengkung, dengan seseorang di meja di samping jendela oval yang ditanami',
          ja: '曲線の座席エリアに差す午後の光。植え込みのある楕円窓の横のテーブルに人が座っている',
          ko: '곡선 좌석 공간에 드는 오후 빛. 식물이 있는 타원 창 옆 테이블에 사람이 앉아 있다',
          'zh-CN': '午后的光照在弧形座位区上，有人坐在带植物的椭圆窗旁的桌子边',
        }),
      },
      {
        src: './chagee_5.webp',
        alt: t({
          en: 'Loose tea leaves in a glass flask on a brass stand next to an Osmanthus Oolong Tea display card',
          id: 'Daun teh lepas di dalam labu kaca di atas dudukan kuningan di samping kartu pajang Osmanthus Oolong Tea',
          ja: '真鍮の台に置かれたガラスフラスコの茶葉。横にはOsmanthus Oolong Teaのディスプレイカード',
          ko: '황동 받침대 위 유리 플라스크 속의 찻잎. 옆에는 Osmanthus Oolong Tea 디스플레이 카드',
          'zh-CN': '黄铜支架上的玻璃瓶里装着散茶叶，旁边是Osmanthus Oolong Tea展示卡',
        }),
      },
      {
        src: './chagee_6.webp',
        alt: t({
          en: 'CHAGEE Tea Bar lettering embossed on the ribbed plaster wall, with a wooden horse figure and tea boxes on the ledge',
          id: 'Tulisan CHAGEE Tea Bar yang timbul di dinding plester berusuk, dengan figur kuda kayu dan kotak teh di ambang',
          ja: 'リブのある漆喰壁に浮き出たCHAGEE Tea Barの文字。棚には木の馬のオブジェと茶箱',
          ko: '골이 진 석고 벽에 양각된 CHAGEE Tea Bar 글자. 선반에는 나무 말 조각과 차 상자',
          'zh-CN': '棱纹石膏墙上凸起的CHAGEE Tea Bar字样，台面上有木马摆件和茶盒',
        }),
      },
      {
        src: './chagee_7.webp',
        alt: t({
          en: 'The lit TEABAR order window with the neon C logo and app QR code on the wall, and staff at the counter',
          id: 'Jendela pesanan TEABAR yang menyala dengan logo C neon dan kode QR aplikasi di dinding, serta staf di konter',
          ja: '明かりのついたTEABARの注文窓口。壁にはネオンのCロゴとアプリのQRコード、カウンターにはスタッフ',
          ko: '불이 켜진 TEABAR 주문 창구. 벽에는 네온 C 로고와 앱 QR 코드, 카운터에는 직원',
          'zh-CN': '亮着灯的TEABAR点单窗口，墙上有霓虹C标志和应用二维码，吧台后是店员',
        }),
      },
      {
        src: './chagee_8.webp',
        alt: t({
          en: 'Standing outside the CHAGEE storefront at golden hour holding a drink',
          id: 'Berdiri di luar bagian depan CHAGEE saat golden hour sambil memegang minuman',
          ja: 'ゴールデンアワーのCHAGEEの店先で、ドリンクを持って立つ',
          ko: '골든아워의 CHAGEE 매장 앞에서 음료를 들고 서 있는 모습',
          'zh-CN': '黄金时段站在CHAGEE店门外，手里拿着一杯饮品',
        }),
      },
      {
        src: './chagee_9.webp',
        alt: t({
          en: 'The view through the oval window in the plaster wall out to Balinese gate towers and the sea beyond',
          id: 'Pemandangan melalui jendela oval di dinding plester ke menara gapura Bali dan laut di baliknya',
          ja: '漆喰壁の楕円窓から見える、バリの門塔とその向こうの海',
          ko: '석고 벽의 타원 창으로 보이는 발리 문 탑과 그 너머의 바다',
          'zh-CN': '透过石膏墙上的椭圆窗，看到巴厘岛门楼和远处的海',
        }),
      },
      {
        src: './chagee_10.webp',
        alt: t({
          en: 'Umbrellas and loungers on Kuta Beach at sunset, with surfers out in the water',
          id: 'Payung dan kursi santai di Pantai Kuta saat matahari terbenam, dengan peselancar di air',
          ja: '日没のKuta Beachのパラソルとラウンジャー。海にはサーファー',
          ko: '해 질 무렵 쿠타 해변의 파라솔과 라운저. 물에는 서퍼들',
          'zh-CN': '日落时库塔海滩上的遮阳伞和躺椅，海里有冲浪的人',
        }),
      },
    ],
  },
} satisfies Dictionary
