import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 5,
  content: {
    place_id: 'volken_coffee',
    slug: 'volken-coffee',
    title: 'Volken Coffee',
    category: 'cafes',
    description: t({
      en: 'Volken felt cozy, and the coffee was great. We liked having a view from the seats while settling in with our drinks. The Wi-Fi was super fast and perfect for getting some work done over coffee.',
      id: 'Volken terasa nyaman, dan kopinya enak. Kami suka bisa melihat pemandangan dari tempat duduk sambil menikmati minuman. Wi-Fi-nya sangat cepat dan pas untuk menyelesaikan pekerjaan sambil minum kopi.',
      ja: 'Volkenは居心地がよく、コーヒーもおいしかったです。席から景色を見ながら、ゆっくりドリンクを楽しめました。Wi-Fiはとても速く、コーヒーを飲みながら仕事をするのにぴったりでした。',
      ko: 'Volken은 아늑했고 커피도 훌륭했습니다. 자리에 앉아 음료를 마시며 창밖 풍경을 볼 수 있어 좋았습니다. Wi-Fi가 매우 빨라 커피를 마시며 일하기에 딱이었습니다.',
      'zh-CN':
        'Volken让人觉得很舒服，咖啡也很好喝。我们喜欢坐下来喝东西时还能看到外面的景色。Wi-Fi非常快，很适合边喝咖啡边做事。',
    }),
    about: t({
      en: 'Volken Coffee is a cafe on Jl. Dewi Sri in Kuta serving espresso drinks, manual brew coffee and pastries. Its white minimalist space has a coffee bar inside and seating on the terrace.',
      id: 'Volken Coffee adalah kafe di Jl. Dewi Sri, Kuta, yang menyajikan minuman espresso, kopi seduh manual, dan pastri. Ruang minimalis berwarna putih ini memiliki bar kopi di dalam dan tempat duduk di teras.',
      ja: 'Volken CoffeeはクタのJl. Dewi Sriにあるカフェで、エスプレッソドリンク、ハンドドリップのコーヒー、ペストリーを提供しています。白いミニマルな空間に店内のコーヒーバーとテラス席があります。',
      ko: 'Volken Coffee는 쿠타의 Jl. Dewi Sri에 있는 카페로, 에스프레소 음료와 핸드드립 커피, 페이스트리를 제공합니다. 흰색의 미니멀한 공간에 실내 커피 바와 테라스 좌석이 있습니다.',
      'zh-CN':
        'Volken Coffee是一家位于库塔Jl. Dewi Sri的咖啡馆，供应意式咖啡、手冲咖啡和酥点。白色极简空间里有室内咖啡吧，露台也设有座位。',
    }),
    area: 'Kuta',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: "Volken Coffee's white storefront with black lettering, a wide window overlooking the coffee bar, a glass entrance door and concrete planters",
        id: 'Bagian depan putih Volken Coffee dengan tulisan hitam, jendela lebar yang menghadap bar kopi, pintu masuk kaca, dan planter beton',
        ja: '黒い文字、コーヒーバーを見渡せる大きな窓、ガラスの入口、コンクリートのプランターがあるVolken Coffeeの白い店先',
        ko: '검은 글자, 커피 바가 보이는 넓은 창문, 유리 출입문, 콘크리트 화분이 있는 Volken Coffee의 흰색 매장 전면',
        'zh-CN': 'Volken Coffee的白色店面，有黑色字样、能看到咖啡吧的宽窗、玻璃门和混凝土花箱',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/peLT1f8ZDH56Pj7W6',
    coordinates: {
      lat: -8.708545,
      lng: 115.17868,
    },
    instagram: 'volkencoffee',
    phone: '+62 818 0318 5152',
    address: 'Jl. Dewi Sri No.11, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361',
    postalCode: '80361',
    // Spending estimated from the menu in our photos; supplementary amenities checked at
    // https://cafeandcowork.com/bali/volken-coffee/
    spending: {
      min: 30000,
      max: 100000,
    },
    visitedAt: ['2026-08-20'],
    wifi: 200,
    power: 'enough',
    seating: ['indoor', 'outdoor'],
    cooling: 'ac',
    noise: 'moderate',
    music: true,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'limited',
      car: 'limited',
    },
    caveats: t({
      en: 'The bathroom is small, but does the job. Parking is available for both motorbikes and cars, though spaces are limited. During busy hours, you might need to park on the street.',
      id: 'Kamar mandinya kecil, tetapi cukup dipakai. Parkir tersedia untuk motor dan mobil, meskipun tempatnya terbatas. Pada jam ramai, mungkin perlu parkir di pinggir jalan.',
      ja: 'トイレは狭いですが、用は足せます。バイクも車も停められますが、台数は限られています。混む時間帯は路上に停めることになるかもしれません。',
      ko: '화장실은 좁지만 쓰기에 충분합니다. 오토바이와 자동차 모두 주차할 수 있지만 공간은 제한적입니다. 붐비는 시간에는 길가에 주차해야 할 수도 있습니다.',
      'zh-CN': '卫生间不大，但够用。摩托车和汽车都能停，只是车位有限。忙的时候可能需要停在路边。',
    }),
    badge: 'good-find',
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: "A barista pouring milk into a cup of coffee behind Volken Coffee's counter",
          id: 'Barista menuang susu ke dalam cangkir kopi di belakang konter Volken Coffee',
          ja: 'Volken Coffeeのカウンター内で、コーヒーカップにミルクを注ぐバリスタ',
          ko: 'Volken Coffee 카운터 안에서 커피 컵에 우유를 따르는 바리스타',
          'zh-CN': 'Volken Coffee吧台后，咖啡师正把牛奶倒进咖啡杯',
        }),
      },
      {
        src: './volken_2.webp',
        alt: t({
          en: 'Working on a laptop beside an iced coffee at a concrete table inside Volken Coffee',
          id: 'Bekerja dengan laptop di samping es kopi, di meja beton di dalam Volken Coffee',
          ja: 'Volken Coffee店内のコンクリートテーブルで、アイスコーヒーの横でノートパソコンに向かう',
          ko: 'Volken Coffee 안 콘크리트 테이블에서 아이스 커피 옆에 노트북을 두고 일하는 모습',
          'zh-CN': '在Volken Coffee室内的混凝土桌旁，一边放着冰咖啡，一边用笔记本电脑工作',
        }),
      },
      {
        src: './volken_3.webp',
        alt: t({
          en: "Volken's concrete coffee bar with white stools, brewing equipment and baristas preparing drinks",
          id: 'Bar kopi beton Volken dengan bangku putih, peralatan seduh, dan barista yang sedang menyiapkan minuman',
          ja: '白いスツール、抽出器具、ドリンクを準備するバリスタがある、Volkenのコンクリートのコーヒーバー',
          ko: '흰색 스툴, 추출 장비, 음료를 준비하는 바리스타가 있는 Volken의 콘크리트 커피 바',
          'zh-CN': 'Volken的混凝土咖啡吧，有白色凳子、冲煮设备和正在准备饮品的咖啡师',
        }),
      },
      {
        src: './volken_4.webp',
        alt: t({
          en: 'A black cup of coffee with leaf latte art on a concrete tabletop',
          id: 'Cangkir kopi hitam dengan latte art berbentuk daun di atas meja beton',
          ja: 'コンクリートの天板に置かれた、葉のラテアートが入った黒いコーヒーカップ',
          ko: '콘크리트 테이블 위, 잎 모양 라테 아트가 있는 검은 커피 컵',
          'zh-CN': '混凝土桌面上的一只黑杯咖啡，上面是叶子拉花',
        }),
      },
      {
        src: './volken_5.webp',
        alt: t({
          en: 'Croissants and pastries in the glass display case below a Coffee Unites People sign',
          id: 'Croissant dan pastri di dalam etalase kaca di bawah papan Coffee Unites People',
          ja: 'Coffee Unites Peopleのサインの下、ガラスケースに並ぶクロワッサンとペストリー',
          ko: 'Coffee Unites People 간판 아래 유리 진열장의 크루아상과 페이스트리',
          'zh-CN': 'Coffee Unites People招牌下方的玻璃柜里摆着可颂和酥点',
        }),
      },
      {
        src: './volken_6.webp',
        alt: t({
          en: 'A hand holding a small Volken-branded glass tube in front of the pastry counter',
          id: 'Tangan memegang tabung kaca kecil bermerek Volken di depan etalase pastri',
          ja: 'ペストリーカウンターの前で、Volkenのロゴが入った小さなガラス管を持つ手',
          ko: '페이스트리 진열대 앞에서 Volken 로고가 있는 작은 유리관을 든 손',
          'zh-CN': '一只手提着印有Volken标志的小玻璃管，背景是酥点柜台',
        }),
      },
      {
        src: './volken_7.webp',
        alt: t({
          en: "Volken's entrance and sidewalk planters with a coffee sign and parked cars along Jl. Dewi Sri",
          id: 'Pintu masuk Volken dan planter trotoar dengan papan kopi serta mobil terparkir di sepanjang Jl. Dewi Sri',
          ja: 'Jl. Dewi Sri沿いに停まった車、コーヒーの看板、歩道のプランターがあるVolkenの入口',
          ko: 'Jl. Dewi Sri를 따라 주차된 차와 커피 간판, 인도 화분이 있는 Volken 입구',
          'zh-CN': 'Volken入口和人行道上的花箱，有咖啡招牌，Jl. Dewi Sri沿线停着车',
        }),
      },
      {
        src: './volken_8.webp',
        alt: t({
          en: 'Volken merchandise display with a black T-shirt, white bottles and coffee bags on wooden shelves',
          id: 'Pajangan merchandise Volken dengan kaos hitam, botol putih, dan kantong kopi di rak kayu',
          ja: '木の棚に並ぶ黒いTシャツ、白いボトル、コーヒーバッグのVolkenの物販ディスプレイ',
          ko: '나무 선반 위의 검은 티셔츠, 흰색 병, 커피 봉지가 있는 Volken 상품 진열',
          'zh-CN': 'Volken商品陈列，木架上有黑色T恤、白色瓶子和咖啡袋',
        }),
      },
      {
        src: './volken_9.webp',
        alt: t({
          en: "Volken Coffee's white storefront on Jl. Dewi Sri, with a long window, concrete planters and black lettering",
          id: 'Bagian depan putih Volken Coffee di Jl. Dewi Sri, dengan jendela panjang, planter beton, dan tulisan hitam',
          ja: 'Jl. Dewi Sriに面したVolken Coffeeの白い店先。横長の窓、コンクリートのプランター、黒い文字',
          ko: 'Jl. Dewi Sri에 면한 Volken Coffee의 흰색 매장 전면. 긴 창문, 콘크리트 화분, 검은 글자',
          'zh-CN': 'Jl. Dewi Sri上Volken Coffee的白色店面，有长窗、混凝土花箱和黑色字样',
        }),
      },
      {
        src: './volken_10.webp',
        alt: t({
          en: "Small round tables and stools on Volken's covered terrace beside the glass windows",
          id: 'Meja bundar kecil dan bangku di teras beratap Volken di samping jendela kaca',
          ja: 'ガラス窓の横、Volkenの屋根付きテラスに並ぶ小さな丸テーブルとスツール',
          ko: '유리창 옆 Volken의 지붕 있는 테라스에 놓인 작은 원형 테이블과 스툴',
          'zh-CN': 'Volken带顶露台上的小圆桌和凳子，紧挨着玻璃窗',
        }),
      },
      {
        src: './volken_11.webp',
        alt: t({
          en: 'Window counter seats looking onto Jl. Dewi Sri, with wooden tables and white chairs inside',
          id: 'Kursi konter di jendela yang menghadap Jl. Dewi Sri, dengan meja kayu dan kursi putih di dalam',
          ja: 'Jl. Dewi Sriを見渡す窓際カウンター席。店内には木のテーブルと白い椅子',
          ko: 'Jl. Dewi Sri가 보이는 창가 카운터 좌석. 안에는 나무 테이블과 흰색 의자가 있다',
          'zh-CN': '面向Jl. Dewi Sri的窗边吧台座位，室内有木桌和白色椅子',
        }),
      },
      {
        src: './volken_12.webp',
        alt: t({
          en: 'A guest using a laptop at the cushioned wooden bench along the softly lit back wall',
          id: 'Pengunjung memakai laptop di bangku kayu berbantalan di sepanjang dinding belakang yang temaram',
          ja: 'やわらかく照らされた奥の壁沿いの、クッション付き木製ベンチでノートパソコンを使う客',
          ko: '은은하게 비친 안쪽 벽을 따라 놓인 쿠션 있는 나무 벤치에서 노트북을 쓰는 손님',
          'zh-CN': '一位客人在靠着柔和灯光后墙的带垫木长凳上用笔记本电脑',
        }),
      },
      {
        src: './volken_13.webp',
        alt: t({
          en: 'Long wooden communal table with white stools beside the terrace windows',
          id: 'Meja komunal kayu panjang dengan bangku putih di samping jendela teras',
          ja: 'テラスの窓の横にある、白いスツール付きの長い木の共用テーブル',
          ko: '테라스 창문 옆, 흰색 스툴이 놓인 긴 나무 공용 테이블',
          'zh-CN': '露台窗边的长木桌和白色凳子',
        }),
      },
      {
        src: './volken_14.webp',
        alt: t({
          en: 'A guest reading beneath wooden shelves of coffee bags in a corner of the cafe',
          id: 'Pengunjung membaca di bawah rak kayu berisi kantong kopi di sudut kafe',
          ja: 'カフェの一角、コーヒーバッグの並ぶ木の棚の下で読書する客',
          ko: '카페 한쪽, 커피 봉지가 놓인 나무 선반 아래에서 책을 읽는 손님',
          'zh-CN': '咖啡馆一角，一位客人在摆满咖啡袋的木架下看书',
        }),
      },
      {
        src: './volken_15.webp',
        alt: t({
          en: "Volken's hot coffee menu with espresso drinks, cup sizes and prices beside the card terminal",
          id: 'Menu kopi panas Volken dengan minuman espresso, ukuran cangkir, dan harga di samping mesin kartu',
          ja: 'カード端末の横にある、エスプレッソドリンクとカップサイズ、価格が書かれたVolkenのホットコーヒーメニュー',
          ko: '카드 단말기 옆, 에스프레소 음료와 컵 크기, 가격이 적힌 Volken의 핫 커피 메뉴',
          'zh-CN': '刷卡机旁的Volken热咖啡菜单，列着意式饮品、杯型和价格',
        }),
      },
      {
        src: './volken_16.webp',
        alt: t({
          en: 'Hanging white Volken Coffee sign outside the cafe',
          id: 'Papan nama putih Volken Coffee yang tergantung di luar kafe',
          ja: 'カフェの外に掛かる白いVolken Coffeeの看板',
          ko: '카페 밖에 걸린 흰색 Volken Coffee 간판',
          'zh-CN': '咖啡馆外悬挂的白色Volken Coffee招牌',
        }),
      },
    ],
  },
} satisfies Dictionary
