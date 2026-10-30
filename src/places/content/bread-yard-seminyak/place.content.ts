import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 9,
  content: {
    place_id: 'bread_yard_seminyak',
    slug: 'bread-yard-seminyak',
    title: 'Bread Yard',
    category: 'cafes',
    about: t({
      en: 'Bread Yard is an artisan bakery and café on Jl. Kayu Aya in Seminyak, serving house-made pastries, coffee, and brunch. Trailing plants cover its concrete frontage, with greenery continuing into the dining space.',
      id: 'Bread Yard adalah toko roti artisan dan kafe di Jl. Kayu Aya, Seminyak, yang menyajikan pastri buatan sendiri, kopi, dan brunch. Tanaman menjuntai menutupi fasad betonnya, dengan tanaman hijau yang berlanjut ke ruang makan.',
      ja: 'Bread Yardは、スミニャックのJl. Kayu Ayaにあるベーカリー兼カフェで、自家製のペストリー、コーヒー、ブランチを提供しています。コンクリートの外観をつる植物が覆い、店内のダイニングスペースにも緑が広がっています。',
      ko: 'Bread Yard는 스미냑의 Jl. Kayu Aya에 있는 아티장 베이커리 겸 카페로, 직접 만든 페이스트리와 커피, 브런치를 제공합니다. 늘어진 식물이 콘크리트 외벽을 덮고 있으며, 식사 공간 안쪽까지 녹음이 이어집니다.',
      'zh-CN':
        'Bread Yard是一家位于水明漾Jl. Kayu Aya的手工烘焙店兼咖啡馆，供应自制酥点、咖啡和早午餐。垂蔓植物覆盖着混凝土外墙，绿植也延伸到了店内的用餐空间。',
    }),
    area: 'Seminyak',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Bread Yard’s concrete storefront covered in trailing vines, with white window lettering, tropical plants, and a tiled pavement',
        id: 'Fasad beton Bread Yard yang tertutup tanaman merambat, dengan tulisan putih di jendela, tanaman tropis, dan trotoar berubin',
        ja: 'つる植物で覆われたBread Yardのコンクリートの店構え。窓には白い文字があり、熱帯植物とタイル張りの歩道が見える',
        ko: '늘어진 덩굴로 덮인 Bread Yard의 콘크리트 매장 외관. 창문의 흰색 글씨와 열대 식물, 타일 보도가 보인다',
        'zh-CN': 'Bread Yard被垂蔓植物覆盖的混凝土店面，带有白色窗字、热带植物和铺砖人行道',
      }),
    },
    mapsUrl:
      'https://www.google.com/maps/place/Bread+Yard+-+Seminyak/data=!4m2!3m1!1s0x2dd247524f5e984b:0xa9a7a4316e698b34',
    coordinates: { lat: -8.6831013, lng: 115.1645853 },
    instagram: 'bread_yard',
    website: 'https://bread-yard.com/',
    phone: '+62 823 1468 4070',
    address: 'Jl. Kayu Aya No. 12, Seminyak, Kuta, Badung',
    postalCode: '80361',
  },
} satisfies Dictionary
