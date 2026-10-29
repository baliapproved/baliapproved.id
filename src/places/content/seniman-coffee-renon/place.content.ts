import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 4,
  content: {
    place_id: 'seniman_coffee_renon',
    slug: 'seniman-coffee-renon',
    title: 'Seniman Coffee Renon',
    category: 'cafes',
    description: t({
      en: "The rocking chairs and unusual mugs kept catching our attention at Seniman. Even the bathroom entrance was worth a look. It was busy on our weekday visit, but quiet enough to work or talk over coffee. We'd come back for the rotating Indonesian single origin coffees and a few hours of work.",
      id: 'Kursi goyang dan cangkirnya yang tidak biasa terus menarik perhatian kami di Seniman. Bahkan pintu masuk kamar mandinya layak dilihat. Saat kami datang di hari kerja, tempatnya ramai, tetapi cukup tenang untuk bekerja atau mengobrol sambil minum kopi. Kami akan kembali untuk kopi single origin Indonesia yang berganti-ganti dan beberapa jam bekerja.',
      ja: 'Senimanでは、ロッキングチェアと変わったマグが何度も目に留まりました。トイレの入口でさえ一見の価値がありました。平日の訪問時は混んでいましたが、コーヒーを飲みながら仕事をしたり話したりできる程度の静かさでした。入れ替わるインドネシアのシングルオリジンと、数時間の仕事のためにまた来たいと思います。',
      ko: 'Seniman에서는 흔들의자와 특이한 머그가 계속 눈에 들어왔습니다. 화장실 입구조차 한번 볼 만했습니다. 평일 방문 때는 붐볐지만, 커피를 마시며 일하거나 이야기할 수 있을 만큼은 조용했습니다. 교대로 나오는 인도네시아 싱글 오리진과 몇 시간의 작업을 위해 다시 오고 싶습니다.',
      'zh-CN':
        '在Seniman，摇椅和别致的杯子一直吸引着我们。就连卫生间入口也值得一看。我们工作日到访时店里人不少，但仍然安静到可以边喝咖啡边工作或聊天。我们还会再来，为了轮换的印尼单一产地咖啡，也想在这里工作几个小时。',
    }),
    about: t({
      en: "Seniman is a specialty coffee roaster with cafes in Bali and Surabaya. It roasts Indonesian single origin coffees and designs its own furniture and tableware. The Renon location has a coffee bar, Dalam Seniman's contemporary art space, a retail shop, and a vinyl corner.",
      id: 'Seniman adalah roaster kopi spesialti dengan kafe di Bali dan Surabaya. Mereka memanggang kopi single origin Indonesia dan merancang furnitur serta peralatan makan sendiri. Lokasi Renon memiliki bar kopi, ruang seni kontemporer Dalam Seniman, toko ritel, dan sudut vinyl.',
      ja: 'Senimanは、バリとスラバヤにカフェを持つスペシャルティコーヒーのロースターです。インドネシアのシングルオリジンを焙煎し、家具や食器も自社でデザインしています。Renon店にはコーヒーバー、現代アートスペースのDalam Seniman、物販、レコードコーナーがあります。',
      ko: 'Seniman은 발리와 수라바야에 카페를 둔 스페셜티 커피 로스터입니다. 인도네시아 싱글 오리진을 로스팅하고, 가구와 테이블웨어도 직접 디자인합니다. Renon 매장에는 커피 바, 현대 미술 공간 Dalam Seniman, 리테일 숍, 바이닐 코너가 있습니다.',
      'zh-CN':
        'Seniman是一家精品咖啡烘焙商，在巴厘岛和泗水都有咖啡馆。他们烘焙印尼单一产地咖啡，并自行设计家具和餐具。Renon这家店有咖啡吧、当代艺术空间Dalam Seniman、零售区和黑胶角落。',
    }),
    area: 'Renon',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: "White Seniman Coffee Renon corner building with its round red sign, Imagine You Know What You're Doing painted on the wall, and a covered terrace",
        id: "Bangunan pojok putih Seniman Coffee Renon dengan papan nama merah bundar, tulisan Imagine You Know What You're Doing di dinding, dan teras beratap",
        ja: "丸い赤い看板、壁に描かれたImagine You Know What You're Doing、屋根付きテラスがある、白いSeniman Coffee Renonの角の建物",
        ko: "둥근 빨간 간판, 벽에 쓰인 Imagine You Know What You're Doing, 지붕이 있는 테라스가 있는 Seniman Coffee Renon의 흰색 코너 건물",
        'zh-CN':
          "Seniman Coffee Renon的白色转角建筑，有圆形红色招牌、墙上写着Imagine You Know What You're Doing，以及带顶露台",
      }),
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Seniman%20Coffee%20Renon',
    coordinates: {
      lat: -8.674793,
      lng: 115.230019,
    },
    instagram: 'senimancoffee',
    website: 'https://www.senimancoffee.com/seniman-renon/',
    address: 'Jl. Tukad Musi No. 19, Panjer, Denpasar Selatan, Denpasar',
    postalCode: '80225',
    spending: {
      min: 30000,
      max: 100000,
    },
    visitedAt: ['2026-08-28'],
    wifi: 248,
    power: 'enough',
    seating: ['indoor', 'outdoor'],
    cooling: 'ac',
    noise: 'quiet',
    music: true,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'enough',
      car: 'limited',
    },
    caveats: t({
      en: 'The indoor seats might all be taken during work hours. The car parking is a bit limited, though available, and there are parking attendants that will help.',
      id: 'Kursi di dalam mungkin sudah penuh pada jam kerja. Parkir mobil agak terbatas, meskipun tersedia, dan ada petugas parkir yang akan membantu.',
      ja: '仕事時間帯は店内の席がすべて埋まっていることがあります。車の駐車スペースは少なめですが空いていて、案内してくれる駐車係もいます。',
      ko: '업무 시간에는 실내 좌석이 모두 차 있을 수 있습니다. 자동차 주차 공간은 다소 제한적이지만 이용할 수 있고, 주차를 도와주는 안내원도 있습니다.',
      'zh-CN': '工作时间室内座位可能全满。汽车停车位有些紧张，但还是有的，也有停车管理员会帮忙。',
    }),
    badge: 'approved',
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: 'Seniman Coffee Renon sign against a clear blue sky',
          id: 'Papan nama Seniman Coffee Renon dengan langit biru cerah di belakangnya',
          ja: '澄んだ青空を背景にしたSeniman Coffee Renonの看板',
          ko: '맑고 푸른 하늘을 배경으로 한 Seniman Coffee Renon 간판',
          'zh-CN': '晴朗蓝天下的Seniman Coffee Renon招牌',
        }),
      },
      {
        src: './seniman_1.webp',
        alt: t({
          en: 'The Seniman bar with the coffee flavor wheel and specials board behind it, and Bar Roker chairs lined up in front',
          id: 'Bar Seniman dengan roda rasa kopi dan papan menu spesial di belakangnya, serta kursi Bar Roker berjajar di depan',
          ja: 'コーヒーフレーバーホイールとスペシャルボードを背にしたSenimanのバーと、手前に並ぶBar Rokerの椅子',
          ko: '커피 플레이버 휠과 스페셜 보드를 등진 Seniman 바와, 앞에 늘어선 Bar Roker 의자',
          'zh-CN': 'Seniman吧台，后方是咖啡风味轮和特调板，前方排着Bar Roker椅子',
        }),
      },
      {
        src: './seniman_2.webp',
        alt: t({
          en: 'A barista pouring from a gooseneck kettle into a pour-over cone, with a syphon brewer set up alongside',
          id: 'Barista menuang dari ketel leher angsa ke cone pour-over, dengan syphon brewer di sampingnya',
          ja: 'グースネックケトルからプアオーバーのドリッパーへ注ぐバリスタ。隣にはサイフォンがセットされている',
          ko: '구즈넥 케틀로 푸어오버 드리퍼에 물을 따르는 바리스타. 옆에는 사이폰 브루어도 준비되어 있다',
          'zh-CN': '咖啡师正用鹅颈壶往手冲滤杯里注水，旁边摆着虹吸壶',
        }),
      },
      {
        src: './seniman_3.webp',
        alt: t({
          en: 'A latte with feather latte art on a brightly painted tray surrounded by green glass tumblers',
          id: 'Latte dengan latte art berbentuk bulu di atas nampan berwarna cerah, dikelilingi gelas kaca hijau',
          ja: '明るい色のトレイに置かれた、羽のようなラテアートのラテ。周りには緑のガラスタンブラー',
          ko: '밝은색 쟁반 위, 깃털 모양 라테 아트가 그려진 라테. 주위에는 초록색 유리 텀블러가 놓여 있다',
          'zh-CN': '一只画着羽毛拉花的拿铁，放在色彩鲜艳的托盘上，周围是绿色玻璃杯',
        }),
      },
      {
        src: './seniman_4.webp',
        alt: t({
          en: 'Karana Bali Madu, Kintamanis and Tirta bean bags packed in open Seniman shop boxes on a wooden table',
          id: 'Kantong biji Karana Bali Madu, Kintamanis, dan Tirta di dalam kotak toko Seniman yang terbuka, di atas meja kayu',
          ja: '木のテーブルの上、開いたSenimanの箱に入ったKarana Bali Madu、Kintamanis、Tirtaの豆袋',
          ko: '나무 테이블 위, 열린 Seniman 상자 안에 담긴 Karana Bali Madu, Kintamanis, Tirta 원두 봉지',
          'zh-CN': '木桌上打开的Seniman盒子里装着Karana Bali Madu、Kintamanis和Tirta咖啡豆袋',
        }),
      },
      {
        src: './seniman_5.webp',
        alt: t({
          en: 'The Tektonik Records corner, with record bins, a wall of album sleeves and leather armchairs around a table',
          id: 'Sudut Tektonik Records, dengan rak piringan, dinding penuh sampul album, dan kursi kulit di sekeliling meja',
          ja: 'Tektonik Recordsのコーナー。レコード棚、アルバムジャケットの壁、テーブルを囲む革のアームチェア',
          ko: 'Tektonik Records 코너. 레코드 선반, 앨범 커버로 가득한 벽, 테이블을 둘러싼 가죽 안락의자',
          'zh-CN': 'Tektonik Records角落，有唱片架、贴满专辑封面的墙，以及围着桌子的皮扶手椅',
        }),
      },
      {
        src: './seniman_6.webp',
        alt: t({
          en: 'Record crates labeled Blues/Rock and Rock & Roll Oldies beside the turntables and the Tektonik price list',
          id: 'Peti piringan berlabel Blues/Rock dan Rock & Roll Oldies di samping turntable dan daftar harga Tektonik',
          ja: 'ターンテーブルとTektonikの価格表の横にある、Blues/RockとRock & Roll Oldiesと書かれたレコード箱',
          ko: '턴테이블과 Tektonik 가격표 옆에 놓인 Blues/Rock, Rock & Roll Oldies라고 적힌 레코드 상자',
          'zh-CN': '唱机和Tektonik价目表旁边，标着Blues/Rock和Rock & Roll Oldies的唱片箱',
        }),
      },
      {
        src: './seniman_7.webp',
        alt: t({
          en: 'An Astro Boy figurine and a Pointer Sisters record sleeve in front of the Tektonik wall of album covers',
          id: 'Figurin Astro Boy dan sampul piringan Pointer Sisters di depan dinding sampul album Tektonik',
          ja: 'Tektonikのアルバムジャケットの壁の前にある鉄腕アトムのフィギュアとPointer Sistersのレコードジャケット',
          ko: 'Tektonik의 앨범 커버 벽 앞에 놓인 아스트로 보이 피규어와 Pointer Sisters 레코드 커버',
          'zh-CN': 'Tektonik专辑封面墙前的阿童木手办和Pointer Sisters唱片封套',
        }),
      },
      {
        src: './seniman_8.webp',
        alt: t({
          en: 'Sitting at a table in the main room, with the lit retail shelves and the counter behind',
          id: 'Duduk di meja ruang utama, dengan rak ritel yang menyala dan konter di belakang',
          ja: 'メインルームのテーブル席から、明かりのついた物販棚と奥のカウンターを見る',
          ko: '메인 룸의 테이블에 앉아, 불이 켜진 리테일 선반과 뒤쪽 카운터를 바라본 모습',
          'zh-CN': '坐在主空间的桌子旁，身后是亮着灯的零售货架和吧台',
        }),
      },
      {
        src: './seniman_9.webp',
        alt: t({
          en: 'The main room in daylight, with folded white ceiling panels, wooden tables, white rocking chairs and people working by the windows',
          id: 'Ruang utama di siang hari, dengan panel langit-langit putih terlipat, meja kayu, kursi goyang putih, dan orang-orang yang bekerja di dekat jendela',
          ja: '日中のメインルーム。折りたたまれた白い天井パネル、木のテーブル、白いロッキングチェア、窓際で仕事をする人々',
          ko: '낮의 메인 룸. 접힌 흰색 천장 패널, 나무 테이블, 흰색 흔들의자, 창가에서 일하는 사람들',
          'zh-CN': '白天的主空间，折叠的白色天花板、木桌、白色摇椅，还有人在窗边工作',
        }),
      },
      {
        src: './seniman_10.webp',
        alt: t({
          en: 'Glass bottles and cups of coffee beans along the retail ledge, with tea packages, caps and a Seniman tote above',
          id: 'Botol kaca dan cangkir berisi biji kopi di sepanjang rak ritel, dengan kemasan teh, topi, dan tote Seniman di atasnya',
          ja: '物販棚に並ぶ、コーヒー豆の入ったガラス瓶とカップ。上には茶葉のパッケージ、キャップ、Senimanのトート',
          ko: '리테일 선반을 따라 놓인 커피 원두가 담긴 유리병과 컵. 위에는 차 패키지, 캡, Seniman 토트백',
          'zh-CN': '零售架上排列着装着咖啡豆的玻璃瓶和杯子，上方是茶包、帽子和Seniman托特包',
        }),
      },
      {
        src: './seniman_11.webp',
        alt: t({
          en: 'A Seniman glass of dark coffee sitting on a glass server at the bar',
          id: 'Gelas Seniman berisi kopi hitam di atas server kaca di bar',
          ja: 'バーのガラスサーバーの上に置かれた、黒いコーヒーが入ったSenimanのグラス',
          ko: '바의 글라스 서버 위에 놓인, 진한 커피가 담긴 Seniman 글라스',
          'zh-CN': '吧台上的玻璃分享壶上放着一杯Seniman深色咖啡',
        }),
      },
      {
        src: './seniman_12.webp',
        alt: t({
          en: 'The Seniman Cafe doorway sign next to a display cabinet of brewing gear, with a scooter parked outside',
          id: 'Papan nama pintu Seniman Cafe di samping lemari pajang peralatan seduh, dengan skuter terparkir di luar',
          ja: '抽出器具のディスプレイ棚の横にあるSeniman Cafeの入口サイン。外にはスクーターが停まっている',
          ko: '추출 도구 진열장 옆의 Seniman Cafe 출입구 간판. 밖에는 스쿠터가 주차되어 있다',
          'zh-CN': 'Seniman Cafe门口招牌，旁边是陈列冲煮器具的柜子，门外停着一辆摩托车',
        }),
      },
      {
        src: './seniman_13.webp',
        alt: t({
          en: 'Hanging fabric banners reading The Power Within Craftsmanship above white plinths displaying leather goods',
          id: 'Spanduk kain gantung bertuliskan The Power Within Craftsmanship di atas pedestal putih yang memajang barang kulit',
          ja: '革製品を展示した白い台座の上に掛かる、The Power Within Craftsmanshipと書かれた布のバナー',
          ko: '가죽 제품을 전시한 흰색 좌대 위에 걸린 The Power Within Craftsmanship라고 적힌 천 배너',
          'zh-CN': '悬挂的布条上写着The Power Within Craftsmanship，下方白色展台上陈列着皮具',
        }),
      },
      {
        src: './seniman_14.webp',
        alt: t({
          en: "Imagine You Know What You're Doing painted on the exterior wall in the afternoon sun, with a motorbike parked below",
          id: "Tulisan Imagine You Know What You're Doing di dinding luar di bawah sinar matahari sore, dengan motor terparkir di bawahnya",
          ja: "午後の日差しの中、外壁に描かれたImagine You Know What You're Doing。下にはバイクが停まっている",
          ko: "오후 햇살 아래 외벽에 그려진 Imagine You Know What You're Doing. 아래에는 오토바이가 주차되어 있다",
          'zh-CN': "午后阳光下，外墙上写着Imagine You Know What You're Doing，下方停着一辆摩托车",
        }),
      },
    ],
  },
} satisfies Dictionary
