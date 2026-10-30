import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 15,
  content: {
    place_id: 'tulus_coliving',
    slug: 'tulus-coliving',
    title: 'Tulus Coliving',
    category: 'stays',
    description: t({
      en: 'The beach was about five minutes away by motorbike, and cafes and minimarkets were nearby. We’d stay here again for the location. The apartment was well equipped too, with a full kitchen and big closets.',
      id: 'Pantai berjarak sekitar lima menit dengan motor, dan kafe serta minimarket ada di dekatnya. Kami akan menginap di sini lagi karena lokasinya. Apartemennya juga lengkap, dengan dapur penuh dan lemari besar.',
      ja: 'ビーチまではバイクで約5分で、カフェやミニマーケットも近くにありました。立地が良いので、また泊まりたいです。アパートメントの設備も整っていて、フルキッチンと大きなクローゼットがありました。',
      ko: '해변까지 오토바이로 약 5분 거리였고, 카페와 미니마켓도 가까웠습니다. 위치가 좋아서 다시 머물고 싶습니다. 아파트도 잘 갖춰져 있었고, 풀 키친과 큰 옷장이 있었습니다.',
      'zh-CN':
        '海滩骑摩托车大约五分钟，附近就有咖啡馆和便利店。因为位置好，我们愿意再住这里。公寓设备也齐全，有完整的厨房和大衣柜。',
    }),
    about: t({
      en: 'Tulus Coliving is an apartment stay on Jl. Raya Kuta in Bali. Guests rent individual studios within the building, with each studio accommodating up to two people.',
      id: 'Tulus Coliving adalah penginapan apartemen di Jl. Raya Kuta, Bali. Tamu menyewa studio tersendiri di dalam gedung, dan setiap studio menampung hingga dua orang.',
      ja: 'Tulus ColivingはバリのJl. Raya Kutaにあるアパートメント型の宿です。建物内の個室スタジオを借りられ、各スタジオには2人まで滞在できます。',
      ko: 'Tulus Coliving은 발리 Jl. Raya Kuta에 있는 아파트형 숙소입니다. 건물 안의 개별 스튜디오를 빌리며, 스튜디오마다 최대 두 명까지 묵을 수 있습니다.',
      'zh-CN':
        'Tulus Coliving是巴厘岛Jl. Raya Kuta上的公寓式住宿。客人租住楼内的独立单间，每间最多住两人。',
    }),
    area: 'Kuta',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Tulus Coliving Apartments entrance with a yellow rental sign, glass doors, potted plants, and four scooters parked outside',
        id: 'Pintu masuk Tulus Coliving Apartments dengan papan sewa kuning, pintu kaca, tanaman pot, dan empat skuter yang diparkir di luar',
        ja: '黄色いレンタルの看板、ガラス戸、鉢植え、外に停めたスクーター4台があるTulus Coliving Apartmentsの入口',
        ko: '노란 임대 간판, 유리문, 화분, 밖에 주차된 스쿠터 네 대가 있는 Tulus Coliving Apartments 입구',
        'zh-CN':
          'Tulus Coliving Apartments入口，有黄色出租招牌、玻璃门、盆栽和门外停放的四辆摩托车',
      }),
    },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Tulus%20Coliving%20Jl.%20Raya%20Kuta%20Bali',
    coordinates: { lat: -8.719971, lng: 115.180442 },
    instagram: 'tuluscolivingvilla',
    address: 'Jl. Raya Kuta, Kuta, Kec. Kuta, Bali 80361',
    postalCode: '80361',
    spending: { max: 500000 },
    visitedAt: ['2026-08-27'],
    roomType: 'private-studio',
    bathroom: 'private',
    cooling: 'ac',
    wifi: 'available',
    noise: 'moderate',
    kitchen: 'private',
    pool: true,
    parking: { motorbike: 'plenty', car: 'plenty' },
    caveats: t({
      en: 'It’s right by the street, so when the traffic is too crowded, the noise can be a bit annoying.',
      id: 'Tempatnya tepat di pinggir jalan, jadi saat lalu lintas terlalu ramai, suaranya bisa agak mengganggu.',
      ja: '通り沿いに面しているので、交通量が多いと騒音が少し気になります。',
      ko: '도로 바로 옆에 있어서, 교통이 너무 붐비면 소음이 조금 거슬립니다.',
      'zh-CN': '它就在马路边上，车流太密的时候，噪音会有点烦人。',
    }),
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: 'Sunlit bedroom at Tulus Coliving with a wooden headboard, white bedding, and sheer curtains',
          id: 'Kamar tidur Tulus Coliving yang tersinari matahari, dengan kepala tempat tidur kayu, seprai putih, dan tirai tipis',
          ja: '木のヘッドボード、白い寝具、シアーカーテンがある、日の差すTulus Colivingの寝室',
          ko: '나무 헤드보드, 흰 침구, 시어 커튼이 있는 햇살 드는 Tulus Coliving 침실',
          'zh-CN': 'Tulus Coliving阳光充足的卧室，有木质床头、白色床品和薄纱窗帘',
        }),
      },
      {
        src: './tulus_1.webp',
        alt: t({
          en: 'Dark wood vanity and desk with a rustic branch chair, mirror reflecting the bed',
          id: 'Meja rias dan meja kayu gelap dengan kursi ranting rustic, cermin memantulkan tempat tidur',
          ja: '素朴な枝の椅子がある濃い木の化粧台と机。鏡にベッドが映っている',
          ko: '투박한 나뭇가지 의자가 있는 짙은 나무 화장대와 책상, 거울에 침대가 비친다',
          'zh-CN': '深色木梳妆台和书桌，配有一把粗犷的树枝椅，镜子映出床',
        }),
      },
      {
        src: './tulus_2.webp',
        alt: t({
          en: 'Sheer curtains and open glass doors looking out to a balcony tree and the street beyond',
          id: 'Tirai tipis dan pintu kaca terbuka menghadap pohon di balkon dan jalan di baliknya',
          ja: 'シアーカーテンと開いたガラス戸。バルコニーの木と、その先の通りが見える',
          ko: '시어 커튼과 열린 유리문 너머로 발코니의 나무와 그 앞 거리가 보인다',
          'zh-CN': '薄纱窗帘和敞开的玻璃门，外面是阳台的树和更远处的街道',
        }),
      },
      {
        src: './tulus_3.webp',
        alt: t({
          en: 'Neatly made bed with white pillows, bolsters, and a light wood headboard in morning light',
          id: 'Tempat tidur yang rapi dengan bantal putih, guling, dan kepala tempat tidur kayu terang di cahaya pagi',
          ja: '朝の光の中、白い枕とボルスター、明るい木のヘッドボードがある整えられたベッド',
          ko: '아침 빛 속, 흰 베개와 볼스터, 밝은 나무 헤드보드가 있는 정돈된 침대',
          'zh-CN': '晨光里铺得整齐的床，有白色枕头、长枕和浅色木质床头',
        }),
      },
      {
        src: './tulus_4.webp',
        alt: t({
          en: 'Dark wood console with a television, remote, and wooden chair beside floor-length curtains',
          id: 'Konsol kayu gelap dengan televisi, remot, dan kursi kayu di samping tirai sepanjang lantai',
          ja: '床までのカーテンの横に、テレビ、リモコン、木の椅子がある濃い木のコンソール',
          ko: '바닥까지 내려오는 커튼 옆, 텔레비전과 리모컨, 나무 의자가 있는 짙은 나무 콘솔',
          'zh-CN': '深色木边柜上有电视和遥控器，旁边是一把木椅和落地窗帘',
        }),
      },
      {
        src: './tulus_5.webp',
        alt: t({
          en: 'Compact kitchenette with wood cabinets, induction cooktop, sink, fridge, and kettle',
          id: 'Dapur kecil dengan lemari kayu, kompor induksi, wastafel, kulkas, dan ketel',
          ja: '木のキャビネット、IHコンロ、シンク、冷蔵庫、ケトルがあるコンパクトな簡易キッチン',
          ko: '나무 수납장, 인덕션, 싱크대, 냉장고, 주전자가 있는 작은 주방',
          'zh-CN': '紧凑的小厨房，有木柜、电磁炉、水槽、冰箱和烧水壶',
        }),
      },
      {
        src: './tulus_6.webp',
        alt: t({
          en: 'Copper pot on a black induction cooktop beside drinking glasses and a pitcher',
          id: 'Panci tembaga di atas kompor induksi hitam, di samping gelas minum dan sebuah teko',
          ja: '黒いIHコンロの上の銅の鍋。横にグラスとピッチャーがある',
          ko: '검은 인덕션 위의 구리 냄비, 옆에 유리잔과 피처',
          'zh-CN': '黑色电磁炉上的铜锅，旁边是水杯和一个玻璃壶',
        }),
      },
      {
        src: './tulus_7.webp',
        alt: t({
          en: 'Bathroom vanity with a white vessel sink, wood cabinet, framed mirror, and soap bottles',
          id: 'Meja wastafel kamar mandi dengan wastafel vessel putih, lemari kayu, cermin berbingkai, dan botol sabun',
          ja: '白いベッセルシンク、木のキャビネット、額縁の鏡、ソープボトルがある洗面台',
          ko: '흰색 베슬 세면대, 나무 수납장, 액자 거울, 비누 병이 있는 세면대',
          'zh-CN': '浴室盥洗台，有白色台上盆、木柜、带框镜子和皂液瓶',
        }),
      },
      {
        src: './tulus_8.webp',
        alt: t({
          en: 'Chrome rain shower and handheld sprayer mounted on beige bathroom tile',
          id: 'Pancuran hujan krom dan semprotan genggam yang terpasang di ubin kamar mandi berwarna beige',
          ja: 'ベージュの浴室タイルに取り付けられたクロムのレインシャワーとハンドシャワー',
          ko: '베이지색 욕실 타일에 달린 크롬 레인 샤워와 핸드 스프레이',
          'zh-CN': '米色浴室瓷砖上的铬色顶喷和手持花洒',
        }),
      },
      {
        src: './tulus_9.webp',
        alt: t({
          en: 'Narrow mosaic-tiled swimming pool in a white courtyard with green wall panels',
          id: 'Kolam renang sempit berubin mosaik di halaman putih dengan panel dinding hijau',
          ja: '緑の壁パネルがある白い中庭の、モザイクタイルの細長いプール',
          ko: '초록 벽 패널이 있는 흰 안뜰의 좁고 긴 모자이크 타일 수영장',
          'zh-CN': '白色庭院里的窄长马赛克瓷砖泳池，墙面有绿色饰板',
        }),
      },
      {
        src: './tulus_10.webp',
        alt: t({
          en: 'Rustic wooden log swing in a bright common room with a potted plant and framed art',
          id: 'Ayunan balok kayu rustic di ruang bersama yang terang, dengan tanaman pot dan karya seni berbingkai',
          ja: '鉢植えと額縁の絵がある明るい共用室の、素朴な丸太のブランコ',
          ko: '화분과 액자가 있는 밝은 공용 공간의 투박한 통나무 그네',
          'zh-CN': '明亮公共空间里的原木秋千，旁边有盆栽和带框画',
        }),
      },
      {
        src: './tulus_11.webp',
        alt: t({
          en: 'Framed landscape painting above two wooden benches on a light tiled hallway wall',
          id: 'Lukisan pemandangan berbingkai di atas dua bangku kayu pada dinding lorong berubin terang',
          ja: '明るいタイルの廊下の壁で、木のベンチ2つの上に掛かる額入りの風景画',
          ko: '밝은 타일 복도 벽, 나무 벤치 두 개 위에 걸린 액자 풍경화',
          'zh-CN': '浅色瓷砖走廊墙上，两张木长凳上方的带框风景画',
        }),
      },
      {
        src: './tulus_12.webp',
        alt: t({
          en: 'Long indoor corridor with wooden doors, ceiling duct, and spotlights on polished tile',
          id: 'Koridor dalam yang panjang dengan pintu kayu, saluran di langit-langit, dan lampu sorot di ubin yang dipoles',
          ja: '木のドア、天井のダクト、磨かれたタイルの上のスポットライトがある長い屋内廊下',
          ko: '나무 문, 천장 덕트, 광택 타일 위의 스포트라이트가 있는 긴 실내 복도',
          'zh-CN': '长长的室内走廊，有木门、天花板风管，抛光地砖上照着射灯',
        }),
      },
      {
        src: './tulus_13.webp',
        alt: t({
          en: 'Covered outdoor balcony walkway overlooking the street, with hanging bulbs and glass doors',
          id: 'Selasar balkon luar beratap yang menghadap jalan, dengan lampu gantung dan pintu kaca',
          ja: '通りを見下ろす屋根付きの屋外バルコニー通路。吊り下げ電球とガラス戸がある',
          ko: '거리가 내려다보이는 지붕 있는 야외 발코니 통로, 매달린 전구와 유리문',
          'zh-CN': '俯瞰街道的有顶室外阳台走道，挂着灯泡，一侧是玻璃门',
        }),
      },
      {
        src: './tulus_14.webp',
        alt: t({
          en: 'Street intersection below with scooters, cars, tangled wires, and a Pos Polis booth',
          id: 'Persimpangan di bawah dengan skuter, mobil, kabel yang berantakan, dan booth Pos Polis',
          ja: '下に見える交差点。スクーター、車、絡まった電線、Pos Polisのブースがある',
          ko: '아래 교차로에 스쿠터, 자동차, 엉킨 전선, Pos Polis 초소',
          'zh-CN': '下方的路口，有摩托车、汽车、缠绕的电线和一个Pos Polis岗亭',
        }),
      },
      {
        src: './tulus_15.webp',
        alt: t({
          en: 'Tulus Coliving Apartments storefront sign above glass doors with scooters parked in front',
          id: 'Papan nama Tulus Coliving Apartments di atas pintu kaca, dengan skuter yang diparkir di depan',
          ja: 'ガラス戸の上にあるTulus Coliving Apartmentsの看板。前にスクーターが停まっている',
          ko: '유리문 위 Tulus Coliving Apartments 간판, 앞에 스쿠터가 주차되어 있다',
          'zh-CN': '玻璃门上方的Tulus Coliving Apartments招牌，门前停着摩托车',
        }),
      },
      {
        src: './tulus_16.webp',
        alt: t({
          en: 'Mirror selfie in the wooden wardrobe, reflecting the bright room behind the photographer',
          id: 'Swafoto cermin di lemari kayu, memantulkan ruangan terang di belakang fotografer',
          ja: '木のワードローブでの鏡越しのセルフィー。撮影者の背後の明るい部屋が映っている',
          ko: '나무 옷장 거울 셀카, 촬영자 뒤의 밝은 방이 비친다',
          'zh-CN': '木衣柜镜中的自拍，映出拍摄者身后明亮的房间',
        }),
      },
    ],
  },
} satisfies Dictionary
