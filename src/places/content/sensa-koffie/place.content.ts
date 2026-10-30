import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place',
  item: 13,
  content: {
    place_id: 'sensa_koffie',
    slug: 'sensa-koffie',
    title: 'Sensa Koffie',
    category: 'cafes',
    about: t({
      en: 'Sensa Koffie is a coffee roastery and atelier in Kuta that roasts single origin coffees from across Indonesia. Its founder, Vito Adi Tjandrasurja, won the 2014 Indonesia Cup Tasters Championship. Guests can taste single origins at the bar or join a cupping session in the lab.',
      id: 'Sensa Koffie adalah roasteri dan atelier kopi di Kuta yang memanggang kopi single origin dari seluruh Indonesia. Pendirinya, Vito Adi Tjandrasurja, memenangkan Indonesia Cup Tasters Championship 2014. Tamu bisa mencicipi single origin di bar atau ikut sesi cupping di lab.',
      ja: 'Sensa Koffieはクタにあるコーヒー焙煎所兼アトリエで、インドネシア各地のシングルオリジンコーヒーを焙煎しています。創業者のVito Adi Tjandrasurjaは2014年のIndonesia Cup Tasters Championshipで優勝しました。バーでシングルオリジンを味わうか、ラボのカッピングセッションに参加できます。',
      ko: 'Sensa Koffie는 쿠타에 있는 커피 로스터리 겸 아틀리에로, 인도네시아 각지의 싱글 오리진 커피를 로스팅합니다. 창업자 Vito Adi Tjandrasurja는 2014 Indonesia Cup Tasters Championship에서 우승했습니다. 바에서 싱글 오리진을 맛보거나 랩의 커핑 세션에 참여할 수 있습니다.',
      'zh-CN':
        'Sensa Koffie是库塔的一家咖啡烘焙工坊兼工作室，烘焙来自印度尼西亚各地的单一产地咖啡。创始人Vito Adi Tjandrasurja赢得了2014年Indonesia Cup Tasters Championship。客人可以在吧台品尝单一产地咖啡，或在实验室参加杯测。',
    }),
    area: 'Kuta',
    cutout: {
      src: './cutout.webp',
      alt: t({
        en: 'Sensa Koffie’s coffee bar with a roaster, grinders and an espresso machine, a glowing green sk sign on the wall above a shelf of brewers and a trailing plant, and clear blue stools along the amber-lit counter',
        id: 'Bar kopi Sensa Koffie dengan mesin roasting, grinder, dan mesin espresso, tanda sk hijau menyala di dinding di atas rak brewer dan tanaman menjuntai, serta kursi biru bening di sepanjang meja yang diterangi cahaya amber',
        ja: '焙煎機、グラインダー、エスプレッソマシンのあるSensa Koffieのコーヒーバー。壁には光る緑のskサイン、その下にブリュワーの棚とつる植物、琥珀色に照らされたカウンターに沿って透明な青いスツールがある',
        ko: '로스터, 그라인더, 에스프레소 머신이 있는 Sensa Koffie 커피 바. 벽에는 빛나는 초록색 sk 간판, 그 아래 브루어 선반과 늘어진 식물, 호박색으로 비친 카운터를 따라 투명한 파란 스툴이 있다',
        'zh-CN':
          'Sensa Koffie的咖啡吧台，有烘焙机、磨豆机和意式咖啡机，墙上有发光的绿色sk标志，下方是冲煮器具架和垂蔓植物，琥珀色灯光的柜台旁摆着透明蓝色凳子',
      }),
    },
    mapsUrl: 'https://maps.app.goo.gl/b1Lq2BnAkaGg5ea17',
    coordinates: { lat: -8.709053, lng: 115.179433 },
    instagram: 'sensakoffie',
    tiktok: 'sensakoffieroastery',
    website: 'https://sensakoffie.id/',
    whatsapp: '+62 811 3860 101',
    address: 'Jl. Dewi Sri, Ruko Parwata Blok 3-4, Kuta, Badung',
    postalCode: '80361',
  },
} satisfies Dictionary
