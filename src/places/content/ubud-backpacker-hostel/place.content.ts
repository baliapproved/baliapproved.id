import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 16,
  content: {
    place_id: 'ubud_backpacker_hostel',
    slug: 'ubud-backpacker-hostel',
    title: 'Ubud Backpacker Hostel',
    category: 'stays',
    description: t({
      en: 'Sharing a dorm means being around other travellers, and that was part of the appeal for us. We met people over shared meals and evenings in the common room, with quieter mornings by the pool. We ended up making lots of new friends.',
      id: 'Berbagi kamar asrama berarti berada di antara pelancong lain, dan itu menjadi bagian dari daya tariknya bagi kami. Kami bertemu orang lewat makan bersama dan malam di ruang bersama, dengan pagi yang lebih tenang di tepi kolam. Kami akhirnya mendapat banyak teman baru.',
      ja: 'ドミトリーを共有するということは、ほかの旅行者と一緒に過ごすことでもあり、それが私たちには魅力のひとつでした。共同の食事や共用室での夜に人と知り合い、プールサイドの朝はより静かでした。結局、たくさんの新しい友人ができました。',
      ko: '도미토리를 함께 쓴다는 것은 다른 여행자들과 함께 있는 것이고, 그게 저희에게는 매력의 일부였습니다. 같이 먹는 식사와 공용 공간의 저녁에 사람들을 만났고, 수영장 옆 아침은 더 조용했습니다. 결국 새 친구를 많이 사귀었습니다.',
      'zh-CN':
        '住共用宿舍意味着和其他旅行者在一起，而这正是我们喜欢这里的原因之一。我们在共享的餐食和公共休息室的夜晚认识了人，泳池边的早晨则更安静。最后我们交了很多新朋友。',
    }),
    about: t({
      en: 'Ubud Backpacker Hostel is a hostel on Jl. Yudistira in Peliatan, Ubud. Set in a traditional Balinese house, it offers shared dormitories and private rooms.',
      id: 'Ubud Backpacker Hostel adalah hostel di Jl. Yudistira, Peliatan, Ubud. Berada di rumah tradisional Bali, hostel ini menawarkan asrama bersama dan kamar pribadi.',
      ja: 'Ubud Backpacker Hostelはウブドのペリアタン、Jl. Yudistiraにあるホステルです。伝統的なバリの家にあり、相部屋ドミトリーと個室があります。',
      ko: 'Ubud Backpacker Hostel은 우붓 펠리아탄의 Jl. Yudistira에 있는 호스텔입니다. 전통 발리 가옥에 있으며, 공유 도미토리와 개인실을 제공합니다.',
      'zh-CN':
        'Ubud Backpacker Hostel是乌布佩利亚坦Jl. Yudistira上的一家旅舍。它设在一座传统巴厘屋舍里，提供共用宿舍和独立房间。',
    }),
    area: 'Ubud',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Balinese pavilion at Ubud Backpacker Hostel with a tiled roof, open kitchen, wooden dining table, and tropical plants',
        id: 'Bale Bali di Ubud Backpacker Hostel dengan atap genteng, dapur terbuka, meja makan kayu, dan tanaman tropis',
        ja: '瓦屋根、オープンキッチン、木の食卓、熱帯の植物があるUbud Backpacker Hostelのバリ風パビリオン',
        ko: '기와 지붕, 오픈 키친, 나무 식탁, 열대 식물이 있는 Ubud Backpacker Hostel의 발리식 파빌리온',
        'zh-CN': 'Ubud Backpacker Hostel的巴厘亭阁，有瓦顶、开放式厨房、木餐桌和热带植物',
      }),
    },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Ubud%20Backpacker%20Hostel%2C%20Jl.%20Yudistira%20No.21%2C%20Peliatan%2C%20Gianyar',
    coordinates: { lat: -8.52516, lng: 115.268175 },
    instagram: 'ubudbackpackerhostel',
    whatsapp: '+62 851 9004 1547',
    address: 'Jl. Yudistira No. 21, Peliatan, Banjar Kalah, Gianyar',
    postalCode: '80571',
    spending: { max: 500000 },
    visitedAt: ['2026-08-14'],
    roomType: 'shared-dorm',
    bathroom: 'shared',
    cooling: 'ac',
    wifi: 'available',
    noise: 'quiet',
    kitchen: 'shared',
    pool: true,
    parking: { motorbike: 'enough', car: 'limited' },
    caveats: t({
      en: 'Car parking might be tricky, but we were informed that the staff will help us with this. The shared dorm rooms might not be for those who don’t like socializing, and they only provide private rooms for women.',
      id: 'Parkir mobil bisa agak sulit, tetapi kami diberi tahu bahwa staf akan membantu. Kamar asrama bersama mungkin tidak cocok bagi yang tidak suka bersosialisasi, dan kamar pribadi hanya disediakan untuk perempuan.',
      ja: '車の駐車は少し難しいかもしれませんが、スタッフが手伝ってくれると聞きました。相部屋のドミトリーは人との交流が苦手な人には向かないかもしれません。個室は女性専用です。',
      ko: '자동차 주차는 조금 어려울 수 있지만, 직원이 도와준다고 들었습니다. 공유 도미토리는 어울리는 것을 좋아하지 않는 사람에게는 맞지 않을 수 있고, 개인실은 여성에게만 제공합니다.',
      'zh-CN':
        '汽车停车可能有点麻烦，但我们被告知工作人员会帮忙。共用宿舍可能不适合不喜欢社交的人，独立房间只提供给女性。',
    }),
    badge: 'good-find',
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: 'Staff grilling chicken on an outdoor barbecue at night, with smoke rising under tropical plants',
          id: 'Staf memanggang ayam di barbeku luar pada malam hari, dengan asap naik di antara tanaman tropis',
          ja: '夜、熱帯の植物の下で煙を上げながら屋外のバーベキューで鶏を焼くスタッフ',
          ko: '밤에 열대 식물 아래에서 연기를 피우며 야외 바비큐로 닭을 굽는 직원',
          'zh-CN': '夜里员工在户外烧烤上烤鸡，热带植物下升起烟雾',
        }),
      },
      {
        src: './ubud_1.webp',
        alt: t({
          en: 'Two guests playing billiards in the common room at night',
          id: 'Dua tamu bermain biliar di ruang bersama pada malam hari',
          ja: '夜の共用室でビリヤードをする宿泊者二人',
          ko: '밤 공용 공간에서 당구를 치는 투숙객 두 명',
          'zh-CN': '夜里两位客人在公共休息室打台球',
        }),
      },
      {
        src: './ubud_2.webp',
        alt: t({
          en: 'A guest lining up a shot on the pool table',
          id: 'Seorang tamu membidik pukulan di meja biliar',
          ja: 'ビリヤード台でショットを構える宿泊者',
          ko: '당구대에서 샷을 겨누는 투숙객',
          'zh-CN': '一位客人在台球桌前瞄准击球',
        }),
      },
      {
        src: './ubud_3.webp',
        alt: t({
          en: 'The shared kitchen at night, with a wok on portable gas burners and patterned tile',
          id: 'Dapur bersama pada malam hari, dengan wajan di atas kompor gas portabel dan ubin bermotif',
          ja: '夜の共用キッチン。携帯ガスバーナーの上の中華鍋と柄入りタイル',
          ko: '밤의 공용 주방, 휴대용 가스 버너 위의 웍과 무늬 타일',
          'zh-CN': '夜里的共用厨房，便携燃气炉上放着炒锅，地面是花纹瓷砖',
        }),
      },
      {
        src: './ubud_4.webp',
        alt: t({
          en: 'Guests eating together at a long wooden communal table',
          id: 'Para tamu makan bersama di meja kayu panjang',
          ja: '長い木の共用テーブルで一緒に食事をする宿泊者たち',
          ko: '긴 나무 공용 테이블에서 함께 식사하는 투숙객들',
          'zh-CN': '客人们围坐在长木桌旁一起吃饭',
        }),
      },
      {
        src: './ubud_5.webp',
        alt: t({
          en: 'Guests dancing and laughing in the common room during an evening gathering',
          id: 'Para tamu menari dan tertawa di ruang bersama saat kumpul malam',
          ja: '夜の集まりで共用室で踊り、笑う宿泊者たち',
          ko: '저녁 모임에서 공용 공간에서 춤추고 웃는 투숙객들',
          'zh-CN': '晚上聚会时，客人们在公共休息室里跳舞欢笑',
        }),
      },
      {
        src: './ubud_6.webp',
        alt: t({
          en: 'Two people in a yoga pose by the pool mural',
          id: 'Dua orang dalam pose yoga di samping mural kolam',
          ja: 'プールの壁画のそばでヨガのポーズをとる二人',
          ko: '수영장 벽화 옆에서 요가 자세를 취하는 두 사람',
          'zh-CN': '两个人在泳池壁画旁做瑜伽姿势',
        }),
      },
      {
        src: './ubud_7.webp',
        alt: t({
          en: 'Pink flamingo pool floats in the swimming pool in front of the mural',
          id: 'Pelampung flamingo merah muda di kolam renang di depan mural',
          ja: '壁画の前のプールに浮かぶピンクのフラミンゴ型フロート',
          ko: '벽화 앞 수영장에 떠 있는 분홍 플라밍고 튜브',
          'zh-CN': '壁画前的泳池里漂着粉色火烈鸟浮具',
        }),
      },
      {
        src: './ubud_8.webp',
        alt: t({
          en: 'Carved wooden doors with signs asking guests to take off their shoes',
          id: 'Pintu kayu berukir dengan tanda yang meminta tamu melepas sepatu',
          ja: '靴を脱ぐよう案内する札が付いた彫刻の木の扉',
          ko: '신발을 벗으라는 안내 표지가 있는 조각된 나무 문',
          'zh-CN': '雕花木门，上面有请客人脱鞋的牌子',
        }),
      },
      {
        src: './ubud_9.webp',
        alt: t({
          en: 'The round Ubud Backpacker Hostel sign hanging from the eaves',
          id: 'Papan nama bulat Ubud Backpacker Hostel yang tergantung di atap',
          ja: '軒から下がる丸いUbud Backpacker Hostelの看板',
          ko: '처마에 매달린 둥근 Ubud Backpacker Hostel 간판',
          'zh-CN': '挂在屋檐下的圆形Ubud Backpacker Hostel招牌',
        }),
      },
      {
        src: './ubud_10.webp',
        alt: t({
          en: 'Poolside gazebos with Balinese stone statues',
          id: 'Gazebo di tepi kolam dengan patung batu Bali',
          ja: 'バリの石像があるプールサイドのガゼボ',
          ko: '발리 석상이 있는 수영장 가제보',
          'zh-CN': '池边凉亭和巴厘石像',
        }),
      },
      {
        src: './ubud_11.webp',
        alt: t({
          en: 'Blue sun loungers beside the pool under a frangipani tree',
          id: 'Kursi berjemur biru di samping kolam di bawah pohon kamboja',
          ja: 'プルメリアの木の下、プールのそばにある青いサンラウンジャー',
          ko: '플루메리아 나무 아래 수영장 옆의 파란 선베드',
          'zh-CN': '鸡蛋花树下、泳池旁的蓝色躺椅',
        }),
      },
      {
        src: './ubud_12.webp',
        alt: t({
          en: 'The hostel courtyard facade with a mossy koi pond and shrine',
          id: 'Fasad halaman hostel dengan kolam koi berlumut dan pelinggih',
          ja: '苔むした鯉の池と祠があるホステル中庭の外観',
          ko: '이끼 낀 잉어 연못과 사당이 있는 호스텔 안뜰 외관',
          'zh-CN': '旅舍庭院立面，有长着青苔的锦鲤池和神龛',
        }),
      },
      {
        src: './ubud_13.webp',
        alt: t({
          en: 'Koi swimming in the courtyard pond below a stone shrine and ferns',
          id: 'Ikan koi berenang di kolam halaman di bawah pelinggih batu dan pakis',
          ja: '石の祠とシダの下、中庭の池を泳ぐ鯉',
          ko: '돌 사당과 양치식물 아래 안뜰 연못에서 헤엄치는 잉어',
          'zh-CN': '锦鲤在庭院水池里游动，上方是石神龛和蕨类',
        }),
      },
      {
        src: './ubud_14.webp',
        alt: t({
          en: 'Reception desk with a chalkboard listing opening hours and check-in times',
          id: 'Meja resepsionis dengan papan tulis yang memuat jam buka dan waktu check-in',
          ja: '営業時間とチェックイン時刻が書かれた黒板がある受付',
          ko: '영업시간과 체크인 시간이 적힌 칠판이 있는 프런트 데스크',
          'zh-CN': '接待台和一块写着营业时间与入住时间的黑板',
        }),
      },
      {
        src: './ubud_15.webp',
        alt: t({
          en: 'A simple breakfast of corn, potato and egg on a white plate',
          id: 'Sarapan sederhana berisi jagung, kentang, dan telur di piring putih',
          ja: '白い皿に盛られた、トウモロコシとジャガイモと卵の簡単な朝食',
          ko: '흰 접시에 담긴 옥수수, 감자, 달걀의 간단한 아침 식사',
          'zh-CN': '白盘子上的简单早餐：玉米、土豆和鸡蛋',
        }),
      },
      {
        src: './ubud_16.webp',
        alt: t({
          en: 'A hand holding an iced coffee in the hostel courtyard',
          id: 'Sebuah tangan memegang es kopi di halaman hostel',
          ja: 'ホステルの中庭でアイスコーヒーを持つ手',
          ko: '호스텔 안뜰에서 아이스 커피를 든 손',
          'zh-CN': '一只手在旅舍庭院里拿着冰咖啡',
        }),
      },
    ],
  },
} satisfies Dictionary
