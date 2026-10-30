import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 11,
  content: {
    place_id: 'maha_matcha_canggu',
    slug: 'maha-matcha-canggu',
    title: 'Maha Matcha',
    category: 'cafes',
    about: t({
      en: 'Maha Matcha Canggu is a matcha spot in Canggu serving quality matcha, fresh bakes, and simple food. It is a place to enjoy good drinks, good food, and spend time with friends in a comfortable setting.',
      id: 'Maha Matcha Canggu adalah kedai matcha di Canggu yang menyajikan matcha berkualitas, kue panggang segar, dan makanan sederhana. Tempat ini untuk menikmati minuman dan makanan yang enak, serta menghabiskan waktu bersama teman di suasana yang nyaman.',
      ja: 'Maha Matcha Cangguはチャングーにある抹茶の店で、質の良い抹茶、焼きたての焼き菓子、シンプルな食事を提供しています。おいしい飲み物と食事を楽しみ、快適な空間で友人と過ごす場所です。',
      ko: 'Maha Matcha Canggu는 창구에 있는 말차 가게로, 좋은 말차와 갓 구운 베이커리, 간단한 음식을 제공합니다. 맛있는 음료와 음식을 즐기고 편안한 분위기에서 친구와 시간을 보내는 곳입니다.',
      'zh-CN':
        'Maha Matcha Canggu是仓古的一家抹茶店，供应优质抹茶、新鲜烘焙和简单餐食。这里适合享用好喝的饮品和美食，并在舒适的环境中与朋友相聚。',
    }),
    area: 'Canggu',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Maha Matcha’s two-storey storefront with a sloping roof, palms on the upper terrace, a thatched awning, illustrated windows and green signage beside the entrance steps',
        id: 'Fasad dua lantai Maha Matcha dengan atap miring, pohon palem di teras atas, tenda ilalang, jendela bergambar, dan papan nama hijau di samping tangga masuk',
        ja: '傾斜屋根、上のテラスのヤシ、茅葺きの庇、イラストの入った窓、入口の階段わきの緑の看板があるMaha Matchaの2階建ての店構え',
        ko: '경사진 지붕, 위층 테라스의 야자수, 초가지붕 차양, 그림이 있는 창문, 입구 계단 옆의 초록 간판이 있는 Maha Matcha의 2층 매장 외관',
        'zh-CN':
          'Maha Matcha的两层店面，有斜屋顶、上层露台的棕榈树、茅草遮阳篷、带插画的窗户，以及入口台阶旁的绿色招牌',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/TVSwi8qy5gRYqaRc8',
    coordinates: { lat: -8.6429153, lng: 115.142326 },
    instagram: 'mahamatchacanggu',
    address: 'Jl. Pantai Batu Bolong No. 13, Canggu, Kuta Utara, Badung',
    postalCode: '80361',
  },
} satisfies Dictionary
