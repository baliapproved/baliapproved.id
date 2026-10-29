import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 6,
  content: {
    place_id: 'st_ali_coffee',
    slug: 'st-ali-coffee',
    title: 'ST. ALi Coffee',
    category: 'cafes',
    description: t({
      en: "We liked the outdoor seats for morning coffee and watching people pass by in Pererenan. The cafe felt quiet during our visit. Power outlets are limited if you're bringing a laptop. With the partly outdoor setup, we'd mainly come for coffee or breakfast, so that wouldn't be a problem for us.",
      id: 'Kami suka tempat duduk di luar untuk kopi pagi dan melihat orang lalu-lalang di Pererenan. Saat kami datang, kafinya terasa tenang. Stopkontak terbatas jika membawa laptop. Karena sebagian areanya di luar, kami terutama akan datang untuk kopi atau sarapan, jadi itu bukan masalah bagi kami.',
      ja: 'Pererenanで朝のコーヒーを飲みながら、通りを行く人を眺める屋外席が気に入りました。訪れたときは静かでした。ノートパソコンを持ってくるならコンセントは少なめです。半屋外なので、私たちは主にコーヒーか朝食のために来るつもりで、その点は気になりません。',
      ko: 'Pererenan에서 아침 커피를 마시며 지나가는 사람들을 볼 수 있는 야외 좌석이 좋았습니다. 방문했을 때 카페는 조용했습니다. 노트북을 가져온다면 콘센트가 적습니다. 반야외라 우리는 주로 커피나 아침 식사 때문에 올 것이라, 그 점은 문제가 되지 않습니다.',
      'zh-CN':
        '我们喜欢在户外座位上喝早晨的咖啡，看着Pererenan街上的人来来往往。到访时店里很安静。如果带笔记本电脑来，电源插座不多。这里有一部分是露天的，我们主要会来喝咖啡或吃早餐，所以这一点对我们来说不是问题。',
    }),
    about: t({
      en: 'ST. ALi is a Melbourne coffee roaster founded in 2005. Its Pererenan cafe is at Further Hotel and serves coffee, breakfast, and lunch daily.',
      id: 'ST. ALi adalah roaster kopi dari Melbourne yang berdiri pada 2005. Kafenya di Pererenan berada di Further Hotel dan menyajikan kopi, sarapan, serta makan siang setiap hari.',
      ja: 'ST. ALiは2005年創業のメルボルンのコーヒーロースターです。PererenanのカフェはFurther Hotelにあり、毎日コーヒー、朝食、ランチを提供しています。',
      ko: 'ST. ALi는 2005년에 설립된 멜버른의 커피 로스터입니다. Pererenan 카페는 Further Hotel에 있으며, 매일 커피와 아침 식사, 점심을 제공합니다.',
      'zh-CN':
        'ST. ALi是一家2005年创立于墨尔本的咖啡烘焙商。Pererenan这家店在Further Hotel里，每天供应咖啡、早餐和午餐。',
    }),
    area: 'Pererenan',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Terracotta ST. ALi Coffee corner building with a brick lattice upper storey, open glass walls, and potted palms along the steps',
        id: 'Bangunan pojok terakota ST. ALi Coffee dengan lantai atas kisi bata, dinding kaca terbuka, dan palem dalam pot di sepanjang tangga',
        ja: 'レンガの格子がある上階、開いたガラス壁、階段沿いの鉢植えパームがある、テラコッタ色のST. ALi Coffeeの角の建物',
        ko: '벽돌 격자 상층, 열린 유리벽, 계단을 따라 놓인 화분 야자나무가 있는 테라코타색 ST. ALi Coffee 코너 건물',
        'zh-CN': 'ST. ALi Coffee的陶土色转角建筑，上层是砖格栅，玻璃墙敞开，台阶旁摆着盆栽棕榈',
      }),
    },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=ST.%20ALi%20Coffee%20Jl.%20Pantai%20Pererenan%20No.121%20Bali',
    coordinates: {
      lat: -8.646637,
      lng: 115.125388,
    },
    instagram: 'stali.id',
    website: 'https://stali.com.au/pages/st-ali-bali',
    address: 'Jl. Pantai Pererenan No.121, Pererenan, Badung',
    postalCode: '80351',
    spending: {
      min: 30000,
      max: 100000,
    },
    visitedAt: ['2026-08-02'],
    wifi: 'available',
    power: 'limited',
    seating: ['semi-outdoor'],
    cooling: 'open-air',
    noise: 'quiet',
    // Not confirmed on the visit.
    music: null,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'limited',
      car: 'street',
    },
    caveats: t({
      en: "It's a semi-outdoor space, so it might not be the best place for a long work session, and the power outlets were also quite limited at the time we visited. If you are not into dogs, you might feel annoyed because there are plenty there.",
      id: 'Ini ruang semi-outdoor, jadi mungkin bukan tempat terbaik untuk bekerja lama, dan stopkontak juga cukup terbatas saat kami berkunjung. Jika tidak suka anjing, mungkin akan terganggu karena di sana cukup banyak.',
      ja: '半屋外の空間なので、長時間の仕事には向かないかもしれません。訪れた時点でコンセントもかなり少なめでした。犬が苦手なら、たくさんいるので気になるかもしれません。',
      ko: '반야외 공간이라 오래 일하기에는 최선이 아닐 수 있고, 방문했을 때 콘센트도 상당히 적었습니다. 개를 좋아하지 않는다면, 이곳에 개가 많아서 신경 쓰일 수 있습니다.',
      'zh-CN':
        '这里是半户外空间，所以未必适合长时间工作，我们到访时电源插座也相当少。如果不喜欢狗，可能会觉得烦，因为这里狗很多。',
    }),
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: 'ST. ALi Coffee terracotta corner building with brick lattice facade and tropical plants at the entrance',
          id: 'Bangunan pojok terakota ST. ALi Coffee dengan fasad kisi bata dan tanaman tropis di pintu masuk',
          ja: 'レンガ格子のファサードと入口の熱帯植物がある、テラコッタ色のST. ALi Coffeeの角の建物',
          ko: '벽돌 격자 파사드와 입구의 열대 식물이 있는 테라코타색 ST. ALi Coffee 코너 건물',
          'zh-CN': 'ST. ALi Coffee的陶土色转角建筑，立面是砖格栅，入口处有热带植物',
        }),
      },
      {
        src: './st_ali_1.webp',
        alt: t({
          en: 'The ST. ALi Coffee facade with brick lattice screening, outdoor tables, and a laptop open at a sidewalk seat',
          id: 'Fasad ST. ALi Coffee dengan kisi bata, meja luar, dan laptop terbuka di kursi pinggir jalan',
          ja: 'レンガ格子のスクリーン、屋外テーブル、歩道席で開いたノートパソコンがあるST. ALi Coffeeのファサード',
          ko: '벽돌 격자 스크린, 야외 테이블, 인도 좌석에 펼쳐진 노트북이 있는 ST. ALi Coffee 파사드',
          'zh-CN': 'ST. ALi Coffee立面，有砖格栅、户外桌，以及人行道座位上打开的笔记本电脑',
        }),
      },
      {
        src: './st_ali_2.webp',
        alt: t({
          en: 'A-frame chalkboard on the sidewalk reading ST. ALi Coffee, everyday 6 AM to 6 PM, with an arrow toward the entrance',
          id: 'Papan tulis A-frame di trotoar bertuliskan ST. ALi Coffee, setiap hari pukul 6 pagi sampai 6 sore, dengan panah ke pintu masuk',
          ja: '歩道のA型黒板。ST. ALi Coffee、毎日午前6時から午後6時、入口への矢印が書かれている',
          ko: '인도 위의 A형 칠판. ST. ALi Coffee, 매일 오전 6시부터 오후 6시, 입구를 가리키는 화살표',
          'zh-CN': '人行道上的A字黑板，写着ST. ALi Coffee、每天早上6点到下午6点，并有箭头指向入口',
        }),
      },
      {
        src: './st_ali_3.webp',
        alt: t({
          en: 'Terracotta corner pillar and ST. ALi Coffee lettering, with monstera pots and outdoor seating beyond',
          id: 'Pilar pojok terakota dan tulisan ST. ALi Coffee, dengan pot monstera dan tempat duduk luar di baliknya',
          ja: 'テラコッタの角柱とST. ALi Coffeeの文字。奥にはモンステラの鉢と屋外席',
          ko: '테라코타 코너 기둥과 ST. ALi Coffee 글자. 너머에는 몬스테라 화분과 야외 좌석',
          'zh-CN': '陶土色转角柱和ST. ALi Coffee字样，远处是龟背竹盆栽和户外座位',
        }),
      },
      {
        src: './st_ali_4.webp',
        alt: t({
          en: 'Looking across the indoor dining room toward the bar, communal table, and street openings, with a mirrored ceiling panel overhead',
          id: 'Memandang ruang makan dalam ke arah bar, meja komunal, dan bukaan ke jalan, dengan panel langit-langit cermin di atas',
          ja: '店内のダイニングからバー、共用テーブル、通りへの開口部を見る。頭上には鏡の天井パネル',
          ko: '실내 다이닝에서 바, 공용 테이블, 거리로 난 개구부를 바라본 모습. 위에는 거울 천장 패널',
          'zh-CN': '从室内用餐区望向吧台、长桌和临街开口，头顶是镜面天花板',
        }),
      },
      {
        src: './st_ali_5.webp',
        alt: t({
          en: 'Guests at a long wooden table under the mirrored ceiling, with glass walls opening onto tropical greenery outside',
          id: 'Pengunjung di meja kayu panjang di bawah langit-langit cermin, dengan dinding kaca yang membuka ke tanaman tropis di luar',
          ja: '鏡の天井の下の長い木のテーブルに座る客。ガラス壁の向こうには熱帯の緑',
          ko: '거울 천장 아래 긴 나무 테이블에 앉은 손님들. 유리벽 밖으로는 열대 식물이 보인다',
          'zh-CN': '客人坐在镜面天花板下的长木桌旁，玻璃墙外是热带绿植',
        }),
      },
      {
        src: './st_ali_6.webp',
        alt: t({
          en: "Take Me Home retail wall with ST. ALi Bali tote bags, caps, and It's Meant To Be shirts on terracotta tile",
          id: "Dinding ritel Take Me Home dengan tote ST. ALi Bali, topi, dan kaus It's Meant To Be di atas ubin terakota",
          ja: "テラコッタタイルのTake Me Home物販壁。ST. ALi Baliのトート、キャップ、It's Meant To Beのシャツ",
          ko: "테라코타 타일 위의 Take Me Home 리테일 벽. ST. ALi Bali 토트백, 캡, It's Meant To Be 티셔츠",
          'zh-CN':
            "陶土砖墙上的Take Me Home零售区，有ST. ALi Bali托特包、帽子和It's Meant To Be衬衫",
        }),
      },
      {
        src: './st_ali_7.webp',
        alt: t({
          en: 'Customer at the wooden bar with the espresso machine and bean bags, ST. ALi hours on the glass, and palms outside',
          id: 'Pelanggan di bar kayu dengan mesin espresso dan kantong biji, jam buka ST. ALi di kaca, dan palem di luar',
          ja: 'エスプレッソマシンと豆袋のある木のバーに座る客。ガラスにはST. ALiの営業時間、外にはパーム',
          ko: '에스프레소 머신과 원두 봉지가 있는 나무 바의 손님. 유리에는 ST. ALi 영업시간, 밖에는 야자수',
          'zh-CN':
            '客人坐在木吧台前，旁边是意式咖啡机和咖啡豆袋，玻璃上写着ST. ALi的营业时间，外面是棕榈',
        }),
      },
      {
        src: './st_ali_8.webp',
        alt: t({
          en: 'Printed coffee menu page with house blend, espresso, cold brew, and barista breakfast listings',
          id: 'Halaman menu kopi cetak dengan house blend, espresso, cold brew, dan daftar sarapan barista',
          ja: 'ハウスブレンド、エスプレッソ、コールドブリュー、バリスタブレックファストが載った印刷のコーヒーメニュー',
          ko: '하우스 블렌드, 에스프레소, 콜드브루, 바리스타 브렉퍼스트가 적힌 인쇄된 커피 메뉴',
          'zh-CN': '印制的咖啡菜单，列着招牌拼配、意式咖啡、冷萃和咖啡师早餐',
        }),
      },
      {
        src: './st_ali_9.webp',
        alt: t({
          en: 'Pastry case with oat and raisin cookies and dark chocolate sea salt cookies on parchment',
          id: 'Etalase pastri dengan oat and raisin cookies dan dark chocolate sea salt cookies di atas kertas roti',
          ja: 'クッキングシートの上にオートミールレーズンクッキーとダークチョコレートシーソルトクッキーが並ぶペストリーケース',
          ko: '유산지 위에 오트 앤 레이즌 쿠키와 다크 초콜릿 씨솔트 쿠키가 놓인 페이스트리 케이스',
          'zh-CN': '点心柜里的燕麦葡萄干饼干和黑巧海盐饼干，垫在烘焙纸上',
        }),
      },
      {
        src: './st_ali_10.webp',
        alt: t({
          en: 'Barista tamping a portafilter beside a La Marzocco espresso machine pouring into a white cup',
          id: 'Barista menekan portafilter di samping mesin espresso La Marzocco yang menuang ke cangkir putih',
          ja: '白いカップへ注ぐLa Marzoccoのエスプレッソマシンの横で、ポルタフィルターをタンピングするバリスタ',
          ko: '흰색 컵에 추출 중인 La Marzocco 에스프레소 머신 옆에서 포타필터를 탬핑하는 바리스타',
          'zh-CN': '咖啡师正在压粉，旁边的La Marzocco意式咖啡机正把咖啡萃取进白杯',
        }),
      },
      {
        src: './st_ali_11.webp',
        alt: t({
          en: 'Black coffee in a green-banded ST. ALi cup beside a latte with heart art on a dark outdoor table in morning light',
          id: 'Kopi hitam di cangkir ST. ALi bergaris hijau di samping latte dengan latte art hati, di meja luar yang gelap pada cahaya pagi',
          ja: '朝の光の中、暗い屋外テーブルに並ぶ、緑のラインのST. ALiカップに入ったブラックコーヒーとハートのラテアートのラテ',
          ko: '아침 빛 속 어두운 야외 테이블 위, 초록 줄무늬 ST. ALi 컵의 블랙 커피와 하트 라테 아트가 있는 라테',
          'zh-CN': '晨光下的深色户外桌上，绿边ST. ALi杯里的黑咖啡，旁边是一只心形拉花的拿铁',
        }),
      },
      {
        src: './st_ali_12.webp',
        alt: t({
          en: 'Wide view of the terracotta lattice facade and recessed outdoor seating along the Pererenan corner',
          id: 'Pemandangan lebar fasad kisi terakota dan tempat duduk luar yang menjorok di sepanjang pojok Pererenan',
          ja: 'Pererenanの角に沿った、テラコッタ格子のファサードと奥まった屋外席の広い眺め',
          ko: 'Pererenan 코너를 따라 이어진 테라코타 격자 파사드와 안으로 들어간 야외 좌석의 넓은 풍경',
          'zh-CN': 'Pererenan转角处陶土格栅立面和凹进的户外座位的宽景',
        }),
      },
    ],
  },
} satisfies Dictionary
