import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 1,
  content: {
    place_id: 'little_contrast_renon',
    slug: 'little-contrast-renon',
    title: 'Little Contrast Renon',
    category: 'cafes',
    description: t({
      en: "Little Contrast is in a quiet alley in Renon, with a large indoor area and outdoor seating. It's a good place to hang out, or to stop by after a run or a workout. The coffee was affordable, and they also served meals. There was plenty of parking for motorbikes and enough for cars. It's an easy stop for coffee or a meal.",
      id: 'Little Contrast berada di gang yang tenang di Renon, dengan area dalam ruangan yang luas dan tempat duduk di luar. Tempat ini cocok untuk nongkrong atau mampir setelah lari atau berolahraga. Kopinya terjangkau, dan mereka juga menyajikan makanan. Tempat parkir motor tersedia banyak, dan tempat parkir mobil juga cukup. Tempat yang praktis untuk mampir minum kopi atau makan.',
      ja: 'Little ContrastはRenonの静かな路地にあり、広い店内と屋外席があります。ゆっくり過ごすのにも、ランニングや運動の後に立ち寄るのにもよい場所です。コーヒーは手頃な価格で、食事も提供していました。バイク用の駐車スペースはたっぷりあり、車用も十分にありました。コーヒーや食事で気軽に立ち寄れるお店です。',
      ko: 'Little Contrast는 Renon의 조용한 골목에 있으며, 넓은 실내 공간과 야외 좌석이 있습니다. 편하게 시간을 보내거나 달리기나 운동을 마친 뒤 들르기 좋은 곳입니다. 커피 가격은 부담 없었고 식사 메뉴도 있었습니다. 오토바이 주차 공간은 넉넉했고 자동차를 주차할 자리도 충분했습니다. 커피를 마시거나 식사하러 가볍게 들르기 좋습니다.',
      'zh-CN':
        'Little Contrast位于Renon一条安静的小巷里，室内空间宽敞，也有户外座位。这里适合闲坐聊天，或在跑步、锻炼后顺路歇脚。咖啡价格实惠，也供应餐食。摩托车停车位很充裕，汽车停车位也够用。想喝杯咖啡或吃顿饭，都可以轻松来这里坐坐。',
    }),
    about: t({
      en: 'Little Contrast is a cafe in a quiet alley in Renon serving affordable coffee and meals. It has a large indoor area and outdoor seating.',
      id: 'Little Contrast adalah kafe di gang yang tenang di Renon yang menyajikan kopi dan makanan dengan harga terjangkau. Kafe ini memiliki area dalam ruangan yang luas dan tempat duduk di luar.',
      ja: 'Little ContrastはRenonの静かな路地にあるカフェで、手頃な価格のコーヒーと食事を提供しています。広い店内と屋外席があります。',
      ko: 'Little Contrast는 Renon의 조용한 골목에 있는 카페로, 합리적인 가격의 커피와 식사를 제공합니다. 넓은 실내 공간과 야외 좌석이 있습니다.',
      'zh-CN':
        'Little Contrast是一家位于Renon安静小巷里的咖啡馆，供应价格实惠的咖啡和餐食。店内空间宽敞，也设有户外座位。',
    }),
    area: 'Renon',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: "Little Contrast Renon's green and white storefront with a large tree in front, a glass entrance, a pickup window and tables on a covered terrace",
        id: 'Bagian depan Little Contrast Renon berwarna hijau dan putih, dengan pohon besar di depannya, pintu masuk kaca, jendela pengambilan pesanan, dan meja-meja di teras beratap',
        ja: '緑と白のLittle Contrast Renonの店先。手前に大きな木があり、ガラス張りの入口、受け取り用の窓口、屋根付きテラスのテーブルが見える',
        ko: '초록색과 흰색으로 꾸민 Little Contrast Renon 매장 전경. 앞쪽의 큰 나무와 유리 출입문, 주문 픽업 창구, 지붕이 있는 테라스의 테이블이 보인다',
        'zh-CN':
          'Little Contrast Renon绿白相间的店面，门前有一棵大树，设有玻璃入口、取餐窗口和带顶露台上的桌子',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/BzF9LVc5TphxfFny9',
    coordinates: {
      lat: -8.6658459,
      lng: 115.2381534,
    },
    instagram: 'little.contrast',
    tiktok: 'little.contrast',
    website: 'https://littlecontrast.com/store/bali/denpasar',
    phone: '+62 813 7379 3480',
    address: 'Jl. Merdeka IV No.8B, Renon, Denpasar Selatan, Kota Denpasar, Bali 80239',
    postalCode: '80239',
    spending: {
      min: 30000,
      max: 60000,
    },
    visitedAt: ['2026-10-24'],
    wifi: 53.69,
    power: 'limited',
    seating: ['indoor', 'outdoor'],
    // An air conditioner is visible in the photo of the counter through the window.
    cooling: 'ac',
    noise: 'quiet',
    music: false,
    toilet: true,
    reservation: 'not-needed',
    parking: {
      motorbike: 'plenty',
      car: 'enough',
    },
    caveats: t({
      en: "Power outlets are limited, and the concrete benches can get uncomfortable after a while. Keep that in mind if you're planning to work here all day.",
      id: 'Stopkontak terbatas, dan bangku beton bisa terasa kurang nyaman setelah diduduki cukup lama. Pertimbangkan hal ini jika berencana bekerja di sini seharian.',
      ja: 'コンセントは少なく、コンクリートのベンチは長く座っているとつらくなることがあります。一日中ここで仕事をする予定なら、その点を考慮してください。',
      ko: '콘센트가 적고, 콘크리트 벤치는 오래 앉아 있으면 불편해질 수 있습니다. 이곳에서 하루 종일 일할 계획이라면 참고하세요.',
      'zh-CN':
        '电源插座较少，混凝土长凳坐久了可能会不太舒服。如果打算在这里工作一整天，记得考虑这两点。',
    }),
    gallery: [
      {
        src: './cover.webp',
        alt: t({
          en: "Little Contrast's illuminated storefront at dusk, with a tree shading the entrance and motorbikes parked outside",
          id: 'Bagian depan Little Contrast yang menyala saat senja, dengan pohon menaungi pintu masuk dan motor terparkir di luar',
          ja: '夕暮れ時に明かりがともるLittle Contrastの店先。入口には木陰ができ、外にはバイクが停まっている',
          ko: '해 질 무렵 불이 켜진 Little Contrast 매장 전경. 입구에 나무 그늘이 드리워져 있고 밖에는 오토바이가 주차되어 있다',
          'zh-CN': '黄昏时亮着灯的Little Contrast店面，树木遮蔽着入口，外面停着摩托车',
        }),
      },
      {
        src: './little-contrast_2.webp',
        alt: t({
          en: 'A hand holding two Little Contrast takeaway drinks in a cardboard carrier',
          id: 'Tangan memegang wadah karton berisi dua minuman Little Contrast untuk dibawa pulang',
          ja: 'Little Contrastの持ち帰り用ドリンク2杯が入った紙製ホルダーを持つ手',
          ko: 'Little Contrast 테이크아웃 음료 두 잔이 담긴 종이 캐리어를 든 손',
          'zh-CN': '一只手提着纸质杯托，里面装着两杯Little Contrast外带饮品',
        }),
      },
      {
        src: './little-contrast_3.webp',
        alt: t({
          en: "Staff behind Little Contrast's counter, seen through the open window beside the entrance",
          id: 'Staf di belakang konter Little Contrast, terlihat melalui jendela terbuka di samping pintu masuk',
          ja: '入口脇の開いた窓から見える、Little Contrastのカウンター内で働くスタッフ',
          ko: '입구 옆 열린 창문 너머로 보이는 Little Contrast 카운터 안쪽의 직원들',
          'zh-CN': '从入口旁敞开的窗户望进去，可以看到Little Contrast吧台后的员工',
        }),
      },
      {
        src: './little-contrast_4.webp',
        alt: t({
          en: 'Illuminated Little Contrast sign above the entrance, framed by leaves at dusk',
          id: 'Papan nama Little Contrast yang menyala di atas pintu masuk, dibingkai dedaunan saat senja',
          ja: '夕暮れの葉越しに見える、入口上で明かりのともるLittle Contrastの看板',
          ko: '해 질 무렵 나뭇잎 사이로 보이는 입구 위의 불 켜진 Little Contrast 간판',
          'zh-CN': '黄昏时分，树叶映衬着入口上方亮着灯的Little Contrast招牌',
        }),
      },
      {
        src: './little-contrast_5.webp',
        alt: t({
          en: 'White Little Contrast espresso machine on the counter beside a grinder',
          id: 'Mesin espresso putih Little Contrast di atas konter, di samping penggiling kopi',
          ja: 'カウンターのグラインダー横に置かれた、Little Contrastの白いエスプレッソマシン',
          ko: '그라인더 옆 카운터 위에 놓인 Little Contrast의 흰색 에스프레소 머신',
          'zh-CN': 'Little Contrast吧台上的白色意式咖啡机，旁边放着磨豆机',
        }),
      },
    ],
  },
} satisfies Dictionary
