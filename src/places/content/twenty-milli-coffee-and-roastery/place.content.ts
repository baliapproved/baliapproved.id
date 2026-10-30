import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 14,
  content: {
    place_id: 'twenty_milli_coffee_and_roastery',
    slug: 'twenty-milli-coffee-and-roastery',
    title: 'Twenty Milli Coffee and Roastery',
    category: 'cafes',
    about: t({
      en: 'Twenty Milli Coffee and Roastery is a specialty coffee spot in Bali focused on Indonesian coffee. It serves carefully selected beans from different coffee regions across Indonesia, with attention given to roasting and brewing each cup. The space combines a coffee shop and roastery, giving visitors a place to enjoy good coffee and learn more about how it is roasted and brewed.',
      id: 'Twenty Milli Coffee and Roastery adalah tempat kopi spesialti di Bali yang fokus pada kopi Indonesia. Menyajikan biji kopi pilihan dari berbagai daerah kopi di Indonesia, dengan perhatian pada proses roasting dan penyeduhan setiap cangkir. Ruangnya menggabungkan kedai kopi dan roasteri, tempat pengunjung menikmati kopi yang enak dan belajar cara kopi di-roasting dan diseduh.',
      ja: 'Twenty Milli Coffee and Roasteryはバリにあるスペシャルティコーヒースポットで、インドネシアのコーヒーに焦点を当てています。インドネシア各地のコーヒー産地から厳選した豆を提供し、一杯ごとの焙煎と抽出にこだわっています。コーヒーショップと焙煎所を兼ねた空間で、おいしいコーヒーを楽しみながら、焙煎と抽出の過程を知ることができます。',
      ko: 'Twenty Milli Coffee and Roastery는 발리의 스페셜티 커피 공간으로, 인도네시아 커피에 집중합니다. 인도네시아 각 커피 산지에서 엄선한 원두를 제공하고, 한 잔마다 로스팅과 추출에 신경을 씁니다. 커피숍과 로스터리를 겸한 공간에서 좋은 커피를 즐기고 로스팅과 추출 과정을 더 알아볼 수 있습니다.',
      'zh-CN':
        'Twenty Milli Coffee and Roastery是巴厘岛一家专注于印度尼西亚咖啡的精品咖啡馆。它供应来自印度尼西亚各地咖啡产区的精选豆子，并注重每一杯的烘焙与冲煮。空间兼具咖啡店和烘焙工坊，客人可以在这里享用好咖啡，并进一步了解咖啡的烘焙和冲煮方式。',
    }),
    area: 'Denpasar',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Twenty Milli Coffee and Roastery’s red and white building with tall white columns, dark-framed windows, a large red Twenty Milli sign, a metal entrance awning and tiled steps leading to the front door',
        id: 'Bangunan merah putih Twenty Milli Coffee and Roastery dengan pilar putih tinggi, jendela berbingkai gelap, papan nama Twenty Milli merah besar, tenda logam di pintu masuk, dan tangga berubin menuju pintu depan',
        ja: '高い白い柱、暗い枠の窓、大きな赤いTwenty Milliの看板、入口の金属の庇、正面ドアへ続くタイルの階段があるTwenty Milli Coffee and Roasteryの赤と白の建物',
        ko: '높은 흰 기둥, 어두운 창틀, 커다란 빨간 Twenty Milli 간판, 입구의 금속 차양, 정문으로 이어지는 타일 계단이 있는 Twenty Milli Coffee and Roastery의 빨강과 흰색 건물',
        'zh-CN':
          'Twenty Milli Coffee and Roastery的红白建筑，有高高的白色柱子、深色窗框、大型红色Twenty Milli招牌、入口金属雨篷，以及通向正门的铺砖台阶',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/bemB82yMrCRgCZ2E6',
    coordinates: { lat: -8.7212554, lng: 115.1915969 },
    instagram: '20ml.coffee',
    website: 'https://20mlcoffee.com/',
    address:
      'Ikat Plaza Building, Jl. Bypass Ngurah Rai No. 505, Pemogan, Denpasar Selatan, Denpasar',
    postalCode: '80221',
  },
} satisfies Dictionary
