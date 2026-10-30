import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 10,
  content: {
    place_id: 'iris_cafe_bali',
    slug: 'iris-cafe-bali',
    title: 'Iris Cafe Bali',
    category: 'cafes',
    about: t({
      en: 'Iris Cafe Bali serves coffee, comfort food and all day breakfast in Kuta. The cafe is on the second floor above Flomart flower shop on Jl. Pararaton Raya, with access via the stairs.',
      id: 'Iris Cafe Bali menyajikan kopi, makanan rumahan, dan sarapan sepanjang hari di Kuta. Kafe ini berada di lantai dua di atas toko bunga Flomart di Jl. Pararaton Raya, dengan akses melalui tangga.',
      ja: 'Iris Cafe Baliはクタでコーヒー、コンフォートフード、一日中楽しめる朝食を提供しています。カフェはJl. Pararaton Rayaにある花屋Flomartの2階にあり、階段から入れます。',
      ko: 'Iris Cafe Bali는 쿠타에서 커피와 컴포트 푸드, 하루 종일 아침 식사를 제공합니다. 카페는 Jl. Pararaton Raya의 꽃집 Flomart 2층에 있으며, 계단으로 들어갈 수 있습니다.',
      'zh-CN':
        'Iris Cafe Bali位于库塔，供应咖啡、家常菜和全天早餐。咖啡馆在Jl. Pararaton Raya的Flomart花店二楼，经由楼梯进入。',
    }),
    area: 'Kuta',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Iris Cafe Bali’s brick entrance with black double doors, an upstairs cafe sign, a flowering shrub, a menu board and a parked motorbike',
        id: 'Pintu masuk bata Iris Cafe Bali dengan pintu ganda hitam, papan nama kafe di lantai atas, semak berbunga, papan menu, dan motor yang diparkir',
        ja: '黒い両開きの扉、2階のカフェの看板、花の咲く低木、メニューボード、停めたバイクがあるIris Cafe Baliのレンガ造りの入口',
        ko: '검은 양문, 위층 카페 간판, 꽃이 핀 관목, 메뉴판, 주차된 오토바이가 있는 Iris Cafe Bali의 벽돌 입구',
        'zh-CN':
          'Iris Cafe Bali的砖砌入口，有黑色双开门、楼上的咖啡馆招牌、开花灌木、菜单板和一辆停放的摩托车',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/U48jNyUfHLodJixq9',
    coordinates: { lat: -8.707333, lng: 115.180615 },
    instagram: 'iris.cafebali',
    website: 'https://iriscafebali.com/',
    whatsapp: '+62 821 3156 064',
    address: 'Jl. Pararaton Raya No. 101, 2nd Floor, Kuta, Badung',
    postalCode: '80361',
  },
} satisfies Dictionary
