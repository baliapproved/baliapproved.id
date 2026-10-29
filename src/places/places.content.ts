import { insert, t, type Dictionary } from 'intlayer'

export default {
  key: 'places',
  content: {
    listing: {
      filters: {
        show: t({
          en: 'Show',
          id: 'Tampilkan',
          ja: '表示',
          ko: '보기',
          'zh-CN': '显示',
        }),
        all: t({
          en: 'All',
          id: 'Semua',
          ja: 'すべて',
          ko: '전체',
          'zh-CN': '全部',
        }),
        places: t({
          en: 'Places',
          id: 'Tempat',
          ja: '場所',
          ko: '장소',
          'zh-CN': '地点',
        }),
        experiences: t({
          en: 'Experiences',
          id: 'Pengalaman',
          ja: '体験',
          ko: '체험',
          'zh-CN': '体验',
        }),
        services: t({
          en: 'Services',
          id: 'Layanan',
          ja: 'サービス',
          ko: '서비스',
          'zh-CN': '服务',
        }),
        guides: t({
          en: 'Guides',
          id: 'Panduan',
          ja: 'ガイド',
          ko: '가이드',
          'zh-CN': '指南',
        }),
      },
      perPerson: t({
        en: 'per person',
        id: 'per orang',
        ja: '1人あたり',
        ko: '1인당',
        'zh-CN': '每人',
      }),
      perNight: t({
        en: 'per night',
        id: 'per malam',
        ja: '1泊あたり',
        ko: '1박당',
        'zh-CN': '每晚',
      }),
      under: t({
        en: 'Under',
        id: 'Di bawah',
        ja: '未満',
        ko: '미만',
        'zh-CN': '低于',
      }),
    },
    categories: {
      cafes: t({
        en: 'Café',
        id: 'Kafe',
        ja: 'カフェ',
        ko: '카페',
        'zh-CN': '咖啡馆',
      }),
      restaurants: t({
        en: 'Restaurant',
        id: 'Restoran',
        ja: 'レストラン',
        ko: '레스토랑',
        'zh-CN': '餐厅',
      }),
      stays: t({
        en: 'Stay',
        id: 'Penginapan',
        ja: '宿泊施設',
        ko: '숙소',
        'zh-CN': '住宿',
      }),
      clubs: t({
        en: 'Club',
        id: 'Klub',
        ja: 'クラブ',
        ko: '클럽',
        'zh-CN': '俱乐部',
      }),
    },
    photos: {
      label: insert(
        t({
          en: 'Photos of {{title}}',
          id: 'Foto {{title}}',
          ja: '{{title}}の写真',
          ko: '{{title}} 사진',
          'zh-CN': '{{title}}的照片',
        }),
      ),
      previous: t({
        en: 'Previous photo',
        id: 'Foto sebelumnya',
        ja: '前の写真',
        ko: '이전 사진',
        'zh-CN': '上一张照片',
      }),
      next: t({
        en: 'Next photo',
        id: 'Foto berikutnya',
        ja: '次の写真',
        ko: '다음 사진',
        'zh-CN': '下一张照片',
      }),
      position: insert(
        t({
          en: '{{current}} of {{total}}',
          id: '{{current}} dari {{total}}',
          ja: '{{total}}枚中{{current}}枚目',
          ko: '{{total}}장 중 {{current}}번째',
          'zh-CN': '第{{current}}张，共{{total}}张',
        }),
      ),
    },
    badges: {
      approved: t({
        en: 'Approved',
        id: 'Approved',
        ja: 'お墨付き',
        ko: '추천하는 곳',
        'zh-CN': '认可推荐',
      }),
      'good-find': t({
        en: 'Good find',
        id: 'Temuan menarik',
        ja: 'うれしい発見',
        ko: '반가운 발견',
        'zh-CN': '值得一探',
      }),
    },
  },
} satisfies Dictionary
