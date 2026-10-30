import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 12,
  content: {
    place_id: 'pahdi_kintamani',
    slug: 'pahdi-kintamani',
    title: 'Pahdi Specialty Coffee',
    category: 'cafes',
    about: t({
      en: 'Pahdi Specialty Coffee is a cafe on Jl. Raya Penelokan in Kintamani overlooking Mount Batur and Lake Batur. The cafe has glass walls and outdoor terraces. It serves Indonesian specialty coffee, pastries and meals, with an Indonesian chargrill menu in the evening.',
      id: 'Pahdi Specialty Coffee adalah kafe di Jl. Raya Penelokan, Kintamani, yang menghadap Gunung Batur dan Danau Batur. Kafe ini punya dinding kaca dan teras luar. Menyajikan kopi spesialti Indonesia, pastri, dan makanan, dengan menu panggangan Indonesia di malam hari.',
      ja: 'Pahdi Specialty CoffeeはキンタマーニのJl. Raya Penelokanにあるカフェで、バトゥール山とバトゥール湖を見渡せます。ガラスの壁と屋外テラスがあります。インドネシアのスペシャルティコーヒー、ペストリー、食事を提供し、夜にはインドネシアの炭火グリルメニューもあります。',
      ko: 'Pahdi Specialty Coffee는 킨타마니의 Jl. Raya Penelokan에 있는 카페로, 바투르산과 바투르호수가 내려다보입니다. 유리벽과 야외 테라스가 있습니다. 인도네시아 스페셜티 커피와 페이스트리, 식사를 제공하고, 저녁에는 인도네시아 숯불구이 메뉴가 있습니다.',
      'zh-CN':
        'Pahdi Specialty Coffee是一家位于金塔马尼Jl. Raya Penelokan的咖啡馆，可俯瞰巴图尔山和巴图尔湖。咖啡馆有玻璃墙和户外露台。供应印度尼西亚精品咖啡、酥点和餐食，晚间还有印度尼西亚炭烤菜单。',
    }),
    area: 'Kintamani',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Pahdi Specialty Coffee’s building with glass walls and a broad wooden roof, tables and chairs inside, and stone steps around the entrance',
        id: 'Bangunan Pahdi Specialty Coffee dengan dinding kaca dan atap kayu lebar, meja dan kursi di dalam, serta tangga batu di sekitar pintu masuk',
        ja: 'ガラスの壁と広い木の屋根、店内のテーブルと椅子、入口周りの石段があるPahdi Specialty Coffeeの建物',
        ko: '유리벽과 넓은 나무 지붕, 실내의 테이블과 의자, 입구 주변의 돌계단이 있는 Pahdi Specialty Coffee 건물',
        'zh-CN': 'Pahdi Specialty Coffee的建筑，有玻璃墙和宽木屋顶、室内桌椅，以及入口周围的石阶',
      }),
    },
    mapsUrl:
      'https://www.google.com/maps/place/Pahdi+Specialty+Coffee/data=!4m2!3m1!1s0x2dd1f54144a1f1fd:0x38832355638ac00c',
    coordinates: { lat: -8.2750595, lng: 115.348932 },
    instagram: 'pahdispecialtycoffee',
    tiktok: 'pahdispecialtycoffee',
    whatsapp: '+62 811 3971 277',
    address: 'Jl. Raya Penelokan, Batur Tengah, Kintamani, Bangli',
    postalCode: '80652',
  },
} satisfies Dictionary
