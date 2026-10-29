import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 8,
  content: {
    place_id: 'starbucks_dewata',
    slug: 'starbucks-dewata',
    title: 'Starbucks Reserve Dewata',
    category: 'cafes',
    description: t({
      en: "The place is super spacious, and the mix of modern and Balinese styles works really well. We always come here as our safe choice for work because there are proper areas to work, with tables and power outlets. Even though it's almost always crowded, it's still not noisy.",
      id: 'Tempatnya sangat luas, dan perpaduan gaya modern serta Bali terasa pas. Kami selalu datang ke sini sebagai pilihan aman untuk bekerja karena ada area yang memang dibuat untuk bekerja, lengkap dengan meja dan stopkontak. Meskipun hampir selalu ramai, suasananya tetap tidak berisik.',
      ja: 'とても広く、モダンな雰囲気とバリの様式の組み合わせがよく似合っています。テーブルとコンセントのある、仕事向けの席があるので、作業場所の安心な選択肢としていつも来ます。ほぼいつも混んでいますが、うるさくはありません。',
      ko: '공간이 아주 넓고, 현대적인 분위기와 발리 양식의 조화가 잘 맞습니다. 테이블과 콘센트가 있는 제대로 된 작업 공간이 있어, 일할 곳으로는 늘 안전한 선택으로 옵니다. 거의 항상 붐비지만 시끄럽지는 않습니다.',
      'zh-CN':
        '这里非常宽敞，现代风格和巴厘风格搭配得很舒服。我们一直把它当作工作的稳妥选择，因为有真正适合做事的区域，桌子和电源插座都有。虽然几乎总是人多，但并不吵。',
    }),
    about: t({
      en: 'Starbucks Reserve Dewata is a coffeehouse on Sunset Road in Seminyak that opened in January 2019. Known as the Dewata Coffee Sanctuary, it introduces visitors to Indonesian coffee and how it is grown and brewed.',
      id: 'Starbucks Reserve Dewata adalah coffeehouse di Sunset Road, Seminyak, yang dibuka pada Januari 2019. Dikenal sebagai Dewata Coffee Sanctuary, tempat ini memperkenalkan kopi Indonesia serta cara menanam dan menyeduhnya kepada pengunjung.',
      ja: 'Starbucks Reserve Dewataは、スミニャックのSunset Roadにあるコーヒーハウスで、2019年1月に開きました。Dewata Coffee Sanctuaryとして知られ、インドネシアのコーヒーと、その栽培や抽出の仕方を紹介しています。',
      ko: 'Starbucks Reserve Dewata는 스미냑의 Sunset Road에 있는 커피하우스로, 2019년 1월에 문을 열었습니다. Dewata Coffee Sanctuary로 알려져 있으며, 인도네시아 커피와 그 재배·추출 방식을 소개합니다.',
      'zh-CN':
        'Starbucks Reserve Dewata是Seminyak Sunset Road上的一家咖啡馆，2019年1月开业。它被称为Dewata Coffee Sanctuary，向客人介绍印尼咖啡以及咖啡是如何种植和冲煮的。',
    }),
    area: 'Seminyak',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Starbucks Reserve Dewata building at dusk, with its terracotta brick facade, glowing windows, and a garden fountain',
        id: 'Bangunan Starbucks Reserve Dewata saat senja, dengan fasad bata terakota, jendela yang bercahaya, dan air mancur taman',
        ja: '夕暮れのStarbucks Reserve Dewata。テラコッタのレンガのファサード、明かりのともる窓、庭の噴水',
        ko: '해 질 무렵의 Starbucks Reserve Dewata 건물. 테라코타 벽돌 파사드, 불 켜진 창문, 정원의 분수',
        'zh-CN': '黄昏时的Starbucks Reserve Dewata，陶土砖立面、亮着灯的窗户和花园喷泉',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/mZEYKQ7muXbURLi39',
    coordinates: {
      lat: -8.691724,
      lng: 115.173136,
    },
    instagram: 'starbucksreserve_dewata',
    tiktok: 'starbucksindonesia',
    website: 'https://www.starbucks.co.id/dewata',
    phone: '+62 361 9343 482',
    address: 'Jl. Sunset Road No. 77, Seminyak, Kuta, Badung',
    postalCode: '80361',
    spending: {
      min: 30000,
      max: 75000,
    },
    visitedAt: ['2026-07-23'],
    wifi: 'available',
    power: 'enough',
    seating: ['indoor', 'outdoor'],
    cooling: 'ac',
    noise: 'quiet',
    // Music reported by a visitor: https://www.lemon8-app.com/cafephiles/7140932356701012482?region=id
    music: true,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'plenty',
      car: 'plenty',
    },
    caveats: t({
      en: "Since it's popular, the communal tables or the tables designed for work with plenty of outlets are often full.",
      id: 'Karena populer, meja komunal atau meja yang dirancang untuk bekerja dengan banyak stopkontak sering kali penuh.',
      ja: '人気があるので、共用テーブルや、コンセントが多い仕事向けのテーブルはよく埋まっています。',
      ko: '인기 있는 곳이라, 공용 테이블이나 콘센트가 많은 작업용 테이블은 자주 가득 찹니다.',
      'zh-CN': '因为很受欢迎，共用长桌和那些插座很多、专为工作设计的桌子常常坐满。',
    }),
    badge: 'good-find',
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: 'Brick-lined interior at Starbucks Reserve Dewata in Bali',
          id: 'Interior berdinding bata di Starbucks Reserve Dewata, Bali',
          ja: 'バリのStarbucks Reserve Dewataの、レンガに囲まれた店内',
          ko: '발리 Starbucks Reserve Dewata의 벽돌로 둘러싸인 실내',
          'zh-CN': '巴厘岛Starbucks Reserve Dewata砖墙环绕的室内',
        }),
      },
      {
        src: './starbucks_1.webp',
        alt: t({
          en: 'The large white Starbucks bear statue in a green cup-lid hat, seen from below against the sky and garden greenery',
          id: 'Patung beruang putih Starbucks yang besar dengan topi tutup gelas hijau, dilihat dari bawah dengan langit dan tanaman taman di belakangnya',
          ja: '緑のカップのフタの帽子をかぶった大きな白いStarbucksのクマの像。空と庭の緑を背景に下から見る',
          ko: '초록색 컵 뚜껑 모자를 쓴 커다란 흰색 Starbucks 곰 동상. 하늘과 정원 식물을 배경으로 아래에서 올려다본 모습',
          'zh-CN': '从下往上看，戴着绿色杯盖帽子的大型白色星巴克熊雕像，背景是天空和花园绿植',
        }),
      },
      {
        src: './starbucks_2.webp',
        alt: t({
          en: 'The Starbucks siren sign on a post above the roadside terrace tables, with a shade tree and planting alongside',
          id: 'Papan siren Starbucks di tiang di atas meja teras pinggir jalan, dengan pohon peneduh dan tanaman di sampingnya',
          ja: '道沿いのテラス席の上、柱に付いたStarbucksのセイレーン看板。横には木陰と植栽',
          ko: '길가 테라스 테이블 위 기둥의 Starbucks 세이렌 간판. 옆에는 그늘 나무와 식재',
          'zh-CN': '路边露台桌子上方立柱上的星巴克美人鱼标志，旁边有遮阴树和绿化',
        }),
      },
      {
        src: './starbucks_3.webp',
        alt: t({
          en: 'Double-height windows under a slatted timber ceiling, with someone standing at the bar ledge looking out to the terrace',
          id: 'Jendela setinggi dua lantai di bawah langit-langit kayu bersirip, dengan seseorang berdiri di tepi bar memandang ke teras',
          ja: '木のルーバー天井の下にある吹き抜けの窓。バーの縁に立ってテラスを見る人',
          ko: '나무 살대 천장 아래의 두 층 높이 창문. 바 가장자리에 서서 테라스를 바라보는 사람',
          'zh-CN': '木格栅天花板下的双层高窗，有人站在吧台边望向露台',
        }),
      },
      {
        src: './starbucks_4.webp',
        alt: t({
          en: 'A long shared bar table and wooden stools running along the floor-to-ceiling windows on the upper walkway',
          id: 'Meja bar panjang bersama dan bangku kayu di sepanjang jendela lantai-ke-langit-langit di jalur atas',
          ja: '上階の通路で、床から天井までの窓に沿って並ぶ長い共用バーテーブルと木のスツール',
          ko: '위층 통로에서 바닥부터 천장까지 이어진 창을 따라 놓인 긴 공용 바 테이블과 나무 스툴',
          'zh-CN': '上层走道上，沿落地窗排开的长吧桌和木凳',
        }),
      },
      {
        src: './starbucks_5.webp',
        alt: t({
          en: 'Looking down from the upper floor over the long Reserve bar and patterned tile floor, with the woven rattan sphere hanging above',
          id: 'Memandang ke bawah dari lantai atas ke bar Reserve yang panjang dan lantai ubin bermotif, dengan bola rotan anyaman tergantung di atas',
          ja: '上階から長いReserveバーと模様のあるタイル床を見下ろす。上には編んだラタンの球体',
          ko: '위층에서 긴 Reserve 바와 무늬 타일 바닥을 내려다본 모습. 위에는 엮은 라탄 구체가 매달려 있다',
          'zh-CN': '从楼上俯看长长的Reserve吧台和拼花地砖，上方悬挂着藤编圆球',
        }),
      },
      {
        src: './starbucks_6.webp',
        alt: t({
          en: 'Glass pour-over brewers lined up along the counter beside a Beans of the Day card, with a barista working the bar',
          id: 'Brewer pour-over kaca berjajar di sepanjang konter di samping kartu Beans of the Day, dengan barista yang sedang bekerja di bar',
          ja: 'Beans of the Dayのカードの横、カウンターに並ぶガラスのプアオーバー器具。バーではバリスタが作業している',
          ko: 'Beans of the Day 카드 옆 카운터를 따라 늘어선 유리 푸어오버 기구. 바에서는 바리스타가 일하고 있다',
          'zh-CN': '吧台上排着玻璃手冲壶，旁边是Beans of the Day卡片，咖啡师正在吧台工作',
        }),
      },
      {
        src: './starbucks_7.webp',
        alt: t({
          en: 'Merchandise shelves of Dewata coffee bags, tumblers and mugs with a rolling ladder, under a timber-slat ceiling',
          id: 'Rak merchandise berisi kantong kopi Dewata, tumbler, dan mug dengan tangga dorong, di bawah langit-langit bilah kayu',
          ja: '木のルーバー天井の下、Dewataのコーヒーバッグ、タンブラー、マグが並ぶ物販棚と移動式はしご',
          ko: '나무 살대 천장 아래, Dewata 커피 봉지와 텀블러, 머그, 이동식 사다리가 있는 상품 선반',
          'zh-CN': '木格栅天花板下的商品架，摆着Dewata咖啡袋、随行杯和马克杯，旁边有滑动梯子',
        }),
      },
      {
        src: './starbucks_8.webp',
        alt: t({
          en: 'The Journey from Seed to Cup panel about Sumatran coffee on the wall of the seating area',
          id: 'Panel The Journey from Seed to Cup tentang kopi Sumatra di dinding area tempat duduk',
          ja: '座席エリアの壁にある、スマトラのコーヒーについてのThe Journey from Seed to Cupのパネル',
          ko: '좌석 공간 벽의, 수마트라 커피에 관한 The Journey from Seed to Cup 패널',
          'zh-CN': '座位区墙上关于苏门答腊咖啡的The Journey from Seed to Cup展板',
        }),
      },
    ],
  },
} satisfies Dictionary
