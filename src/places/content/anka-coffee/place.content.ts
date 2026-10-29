import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 2,
  content: {
    place_id: 'anka_coffee',
    slug: 'anka-coffee',
    title: 'Anka Coffee',
    category: 'cafes',
    description: t({
      en: 'Anka was clean and beautifully put together, with plenty of space and a big communal table. Everything we ordered, from food to drinks, was good. The Melted Brûlée Toast was our favorite of what we ordered that day, and they take their coffee seriously too. We had plenty of questions about the coffee, and the staff knew their stuff. They were friendly and happy to talk us through what we wanted to know.',
      id: 'Anka bersih dan ditata dengan apik, dengan ruangan yang luas dan meja komunal besar. Semua yang kami pesan, dari makanan sampai minuman, enak. Melted Brûlée Toast menjadi favorit kami dari pesanan hari itu, dan mereka juga serius soal kopi. Kami punya banyak pertanyaan tentang kopinya, dan para staf benar-benar paham. Mereka ramah dan dengan senang hati menjelaskan apa yang ingin kami ketahui.',
      ja: 'Ankaは清潔で美しく整えられていて、空間にゆとりがあり、大きな共用テーブルもありました。食べ物から飲み物まで、注文したものはどれもおいしかったです。その日に頼んだ中で一番気に入ったのはMelted Brûlée Toast。コーヒーにも真剣に向き合っているお店です。コーヒーについていろいろ質問しましたが、スタッフは知識が豊富でした。親しみやすく、知りたいことを快く説明してくれました。',
      ko: 'Anka는 깨끗하고 아름답게 꾸며져 있었으며, 공간도 넉넉하고 큰 공용 테이블도 있었습니다. 음식부터 음료까지 주문한 것은 모두 맛있었습니다. 그날 주문한 메뉴 중에서는 Melted Brûlée Toast가 가장 마음에 들었고, 커피에도 진심인 곳이었습니다. 커피에 대해 이것저것 많이 물어봤는데, 직원들이 잘 알고 있었습니다. 친절하게 응대하며 궁금한 내용을 기꺼이 설명해 주었습니다.',
      'zh-CN':
        'Anka干净整洁，布置得很漂亮，空间宽敞，还设有一张大长桌。我们点的食物和饮品都很好吃、好喝。那天点的餐品中，我们最喜欢Melted Brûlée Toast，他们对咖啡也很认真。我们问了不少关于咖啡的问题，店员都很懂行。他们友善热情，乐意为我们解答想了解的内容。',
    }),
    about: t({
      en: 'Anka Coffee is a specialty coffee shop on Jl. Buluh Indah in Denpasar serving espresso drinks, filter coffee, food and pastries. It offers beans from several roasteries, including its own house blend, in a white interior with wood accents and plants.',
      id: 'Anka Coffee adalah kedai kopi spesialti di Jl. Buluh Indah, Denpasar, yang menyajikan minuman berbasis espresso, kopi filter, makanan, dan pastri. Kedai ini menawarkan biji kopi dari beberapa roastery serta house blend-nya sendiri, dengan interior putih beraksen kayu dan tanaman.',
      ja: 'Anka Coffeeは、デンパサールのJl. Buluh Indahにあるスペシャルティコーヒー店で、エスプレッソ系のドリンク、フィルターコーヒー、食事、ペストリーを提供しています。木のアクセントと植物を配した白い店内で、複数のロースターの豆や独自のハウスブレンドを楽しめます。',
      ko: 'Anka Coffee는 덴파사르의 Jl. Buluh Indah에 있는 스페셜티 커피숍으로, 에스프레소 음료와 필터 커피, 음식, 페이스트리를 제공합니다. 나무 소재와 식물로 포인트를 준 흰색 인테리어의 공간에서 여러 로스터리의 원두와 자체 하우스 블렌드를 선보입니다.',
      'zh-CN':
        'Anka Coffee是一家位于登巴萨Jl. Buluh Indah的精品咖啡馆，供应意式咖啡饮品、滤泡咖啡、餐食和酥点。店内提供多家烘焙商的咖啡豆，也有自家的拼配豆；白色为主的室内搭配木质装饰和绿植。',
    }),
    area: 'Denpasar',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: "Anka Coffee's grey and white building with a pitched roof, a brick wall, a stone Anka sign beside the entrance steps, a terrace and flowering trees",
        id: 'Bangunan abu-abu dan putih Anka Coffee dengan atap miring, dinding bata, papan nama Anka dari batu di samping tangga masuk, teras, dan pepohonan berbunga',
        ja: '勾配のある屋根のAnka Coffeeのグレーと白の建物。レンガの壁、入口の階段脇にあるAnkaの石の看板、テラス、花の咲く木々が見える',
        ko: '경사진 지붕과 벽돌 담, 입구 계단 옆의 Anka 석재 간판, 테라스, 꽃이 핀 나무가 있는 Anka Coffee의 회색과 흰색 건물',
        'zh-CN':
          'Anka Coffee的灰白色建筑，带有坡屋顶、砖墙、入口台阶旁的Anka石质招牌、露台和开花的树木',
      }),
    },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ANKA+Coffee&query_place_id=ChIJSW0xBRJB0i0RreISVFeWAi8',
    coordinates: {
      lat: -8.643095,
      lng: 115.196287,
    },
    instagram: 'anka.idn',
    threads: 'anka.idn',
    address: 'Jl. Buluh Indah No. 88B, Pemecutan Kaja, Denpasar Utara, Denpasar',
    postalCode: '80118',
    // Spending estimated from the menu in our photos; supplementary amenities checked at
    // https://www.corner.inc/place/pVVJbbmHKnUj
    spending: {
      min: 30000,
      max: 100000,
    },
    visitedAt: ['2026-09-11', '2026-10-10'],
    wifi: 100,
    power: 'plenty',
    seating: ['indoor', 'outdoor'],
    cooling: 'ac',
    noise: 'quiet',
    music: true,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'plenty',
      car: 'enough',
    },
    caveats: t({
      en: "We didn't find much to fault. Even the toilet felt well thought through. If we were nitpicking, the front outdoor area could be put to better use. It was mostly unused on our visits, and there's a more private outdoor area at the back.",
      id: 'Kami tidak menemukan banyak kekurangan. Bahkan toiletnya pun terasa dirancang dengan baik. Kalau harus mencari-cari kekurangan, area luar di depan bisa dimanfaatkan dengan lebih baik. Saat kami berkunjung, area itu sebagian besar tidak digunakan, sementara di belakang ada area luar yang lebih privat.',
      ja: '気になる点はほとんどありませんでした。トイレまでよく考えられていると感じました。あえて細かいことを言うなら、正面の屋外スペースはもっと活用できそうです。私たちが訪れたときはほぼ使われておらず、奥にはより人目を気にせず過ごせる屋外スペースもあります。',
      ko: '크게 아쉬운 점은 찾지 못했습니다. 화장실까지 세심하게 신경 썼다는 느낌이었습니다. 굳이 꼽자면 앞쪽 야외 공간을 좀 더 잘 활용할 수 있을 것 같습니다. 저희가 방문했을 때는 거의 사용되지 않았고, 뒤쪽에는 더 프라이빗한 야외 공간이 있습니다.',
      'zh-CN':
        '我们没发现太多可挑剔的地方，连卫生间都让人觉得考虑得很周到。如果硬要挑一点，前面的户外区域可以利用得更好。我们几次到访时，那里大多闲置着，而后面还有一处更私密的户外区域。',
    }),
    badge: 'approved',
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: "Anka Coffee's white facade with a pitched roof, flowering trees, a stone entrance sign and cars parked out front",
          id: 'Fasad putih Anka Coffee dengan atap miring, pepohonan berbunga, papan nama batu di pintu masuk, dan mobil yang terparkir di depan',
          ja: '勾配のある屋根のAnka Coffeeの白い外観。花の咲く木々、入口の石の看板、店の前に駐車した車が見える',
          ko: '경사진 지붕이 있는 Anka Coffee의 흰색 외관과 꽃이 핀 나무, 입구의 석재 간판, 앞에 주차된 차들',
          'zh-CN':
            'Anka Coffee的白色外立面，配有坡屋顶，周围有开花的树木、入口处的石质招牌，以及停在门前的汽车',
        }),
      },
      {
        src: './anka_2.webp',
        alt: t({
          en: 'A wooden tray with espresso, an iced drink and a coffee information card at Anka',
          id: 'Nampan kayu berisi espresso, minuman dingin, dan kartu informasi kopi di Anka',
          ja: 'Ankaで、エスプレッソ、アイスドリンク、コーヒーの説明カードを載せた木のトレー',
          ko: 'Anka의 나무 쟁반에 놓인 에스프레소, 아이스 음료, 커피 안내 카드',
          'zh-CN': 'Anka的木质托盘上放着意式浓缩咖啡、冰饮和咖啡介绍卡',
        }),
      },
      {
        src: './anka_3.webp',
        alt: t({
          en: 'Melted Brûlée Toast, rice bowls and drinks spread across a white table',
          id: 'Melted Brûlée Toast, rice bowl, dan minuman tersaji di atas meja putih',
          ja: '白いテーブルに並ぶMelted Brûlée Toast、ライスボウル、ドリンク',
          ko: '흰색 테이블 위에 펼쳐진 Melted Brûlée Toast, 라이스볼, 음료',
          'zh-CN': '白色桌面上摆着Melted Brûlée Toast、盖饭和饮品',
        }),
      },
      {
        src: './anka_4.webp',
        alt: t({
          en: 'A rice bowl topped with a soft egg and chopped seaweed',
          id: 'Rice bowl dengan topping telur setengah matang dan potongan rumput laut',
          ja: '半熟卵と刻み海苔を載せたライスボウル',
          ko: '반숙 달걀과 잘게 썬 김을 올린 라이스볼',
          'zh-CN': '一碗盖饭，上面放着半熟蛋和海苔碎',
        }),
      },
      {
        src: './anka_5.webp',
        alt: t({
          en: "Anka's white coffee bar with wooden stools, a lit coffee display and the large black Anka logo",
          id: 'Bar kopi putih Anka dengan bangku kayu, pajangan kopi berlampu, dan logo Anka hitam berukuran besar',
          ja: '木のスツール、照明付きのコーヒーディスプレイ、大きな黒いAnkaのロゴがある白いコーヒーカウンター',
          ko: '나무 스툴과 조명이 켜진 커피 진열대, 커다란 검은색 Anka 로고가 있는 Anka의 흰색 커피 바',
          'zh-CN': 'Anka的白色咖啡吧台，配有木凳、带灯光的咖啡陈列区和大型黑色Anka标志',
        }),
      },
      {
        src: './anka_6.webp',
        alt: t({
          en: "White communal table and wooden stools in front of Anka's backlit logo wall",
          id: 'Meja komunal putih dan bangku kayu di depan dinding logo Anka dengan pencahayaan dari belakang',
          ja: 'Ankaのロゴを背後から照らした壁の前にある白い共用テーブルと木のスツール',
          ko: '뒤에서 조명이 비치는 Anka 로고 벽 앞의 흰색 공용 테이블과 나무 스툴',
          'zh-CN': 'Anka背光标志墙前的白色共用长桌和木凳',
        }),
      },
      {
        src: './anka_7.webp',
        alt: t({
          en: 'Spacious dining room with a long communal table, smaller tables, plants and air conditioning',
          id: 'Ruang makan luas dengan meja komunal panjang, meja-meja kecil, tanaman, dan AC',
          ja: '長い共用テーブル、小さめのテーブル、植物、エアコンのある広々としたダイニングスペース',
          ko: '긴 공용 테이블과 작은 테이블들, 식물, 에어컨이 있는 넓은 식사 공간',
          'zh-CN': '宽敞的用餐区，设有共用长桌、小桌、绿植和空调',
        }),
      },
      {
        src: './anka_8.webp',
        alt: t({
          en: 'Wooden stools along the communal table beside a slatted divider and the entrance door',
          id: 'Bangku-bangku kayu berjajar di sepanjang meja komunal, di samping partisi berkisi dan pintu masuk',
          ja: '格子状の仕切りと入口のドアのそばにある共用テーブルに沿って並ぶ木のスツール',
          ko: '격자형 칸막이와 출입문 옆 공용 테이블을 따라 놓인 나무 스툴',
          'zh-CN': '共用长桌旁排列着木凳，旁边是条栅隔断和入口门',
        }),
      },
      {
        src: './anka_9.webp',
        alt: t({
          en: 'Small tables with cushioned chairs along a softly lit wall, with outdoor seating beyond the window',
          id: 'Meja-meja kecil dan kursi berbantalan di sepanjang dinding dengan pencahayaan lembut, dengan tempat duduk luar ruang terlihat di balik jendela',
          ja: '柔らかい照明の壁沿いに置かれた小さなテーブルとクッション付きの椅子。窓の向こうには屋外席が見える',
          ko: '은은한 조명이 비치는 벽을 따라 놓인 작은 테이블과 쿠션 의자, 창문 너머로 보이는 야외 좌석',
          'zh-CN': '柔和灯光照亮的墙边摆着小桌和软垫椅，窗外可见户外座位',
        }),
      },
      {
        src: './anka_10.webp',
        alt: t({
          en: 'View along the large white communal table toward the coffee bar and other indoor tables',
          id: 'Pemandangan sepanjang meja komunal putih yang besar ke arah bar kopi dan meja-meja lain di dalam ruangan',
          ja: '大きな白い共用テーブル越しに見るコーヒーカウンターと店内のほかのテーブル',
          ko: '커다란 흰색 공용 테이블을 따라 바라본 커피 바와 다른 실내 테이블들',
          'zh-CN': '沿着白色共用大长桌望向咖啡吧台和其他室内桌位',
        }),
      },
      {
        src: './anka_11.webp',
        alt: t({
          en: "A barista preparing coffee beside the espresso machine at Anka's counter",
          id: 'Barista menyiapkan kopi di samping mesin espresso di konter Anka',
          ja: 'Ankaのカウンターで、エスプレッソマシンのそばでコーヒーを淹れるバリスタ',
          ko: 'Anka 카운터의 에스프레소 머신 옆에서 커피를 준비하는 바리스타',
          'zh-CN': '咖啡师在Anka吧台的意式咖啡机旁制作咖啡',
        }),
      },
      {
        src: './anka_12.webp',
        alt: t({
          en: 'Outdoor seating with a high table and black chairs beside wooden-framed windows',
          id: 'Tempat duduk luar ruang dengan meja tinggi dan kursi hitam di samping jendela berbingkai kayu',
          ja: '木枠の窓のそばにハイテーブルと黒い椅子を置いた屋外席',
          ko: '나무 프레임 창문 옆에 높은 테이블과 검은색 의자가 놓인 야외 좌석',
          'zh-CN': '木框窗户旁的户外座位，配有高桌和黑色椅子',
        }),
      },
      {
        src: './anka_13.webp',
        alt: t({
          en: "Croissants, cinnamon rolls and slices of cake in Anka's glass pastry display",
          id: 'Croissant, cinnamon roll, dan potongan kue di dalam etalase pastri kaca Anka',
          ja: 'Ankaのガラス製ペストリーケースに並ぶクロワッサン、シナモンロール、カットケーキ',
          ko: 'Anka의 유리 페이스트리 진열장에 놓인 크루아상, 시나몬 롤, 조각 케이크',
          'zh-CN': 'Anka的玻璃糕点柜里摆着可颂、肉桂卷和切片蛋糕',
        }),
      },
      {
        src: './anka_14.webp',
        alt: t({
          en: 'A jar of coffee beans with Lychee Sorbet and Kiniruku tasting cards on a wooden stand',
          id: 'Stoples biji kopi dengan kartu catatan rasa Lychee Sorbet dan Kiniruku di atas dudukan kayu',
          ja: '木製の台に置かれたコーヒー豆の瓶と、Lychee SorbetとKinirukuのテイスティングカード',
          ko: '나무 받침대 위의 커피 원두 병과 Lychee Sorbet, Kiniruku 테이스팅 카드',
          'zh-CN': '木质展示架上放着一罐咖啡豆，以及Lychee Sorbet和Kiniruku的风味介绍卡',
        }),
      },
      {
        src: './anka_15.webp',
        alt: t({
          en: 'Filter coffee in a glass server beside a pink cup and a Lychee Sorbet tasting card',
          id: 'Kopi filter dalam server kaca di samping cangkir merah muda dan kartu catatan rasa Lychee Sorbet',
          ja: 'ガラスサーバーに入ったフィルターコーヒーと、その隣のピンクのカップ、Lychee Sorbetのテイスティングカード',
          ko: '분홍색 잔과 Lychee Sorbet 테이스팅 카드 옆 유리 서버에 담긴 필터 커피',
          'zh-CN': '玻璃分享壶中的滤泡咖啡，旁边放着粉色杯子和Lychee Sorbet风味介绍卡',
        }),
      },
      {
        src: './anka_16.webp',
        alt: t({
          en: 'Anka Daily Set menu offering a food and drink combination for Rp 75K',
          id: 'Menu Anka Daily Set yang menawarkan paket makanan dan minuman seharga Rp 75K',
          ja: '食事とドリンクのセットをRp 75Kで提供するAnka Daily Setのメニュー',
          ko: '음식과 음료 조합을 Rp 75K에 제공하는 Anka Daily Set 메뉴',
          'zh-CN': 'Anka Daily Set菜单，提供售价Rp 75K的餐食与饮品组合',
        }),
      },
      {
        src: './anka_18.webp',
        alt: t({
          en: "Anka Coffee's hanging sign beside flowering trees and the cafe roof",
          id: 'Papan nama gantung Anka Coffee di samping pepohonan berbunga dan atap kafe',
          ja: '花の咲く木々とカフェの屋根のそばにあるAnka Coffeeの吊り看板',
          ko: '꽃이 핀 나무와 카페 지붕 옆에 걸린 Anka Coffee 간판',
          'zh-CN': '开花的树木和咖啡馆屋顶旁悬挂着Anka Coffee的招牌',
        }),
      },
    ],
  },
} satisfies Dictionary
