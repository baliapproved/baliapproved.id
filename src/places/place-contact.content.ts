import { t, type Dictionary } from 'intlayer'

export default {
  key: 'place-contact',
  content: {
    address: t({
      en: 'Address',
      id: 'Alamat',
      ja: '住所',
      ko: '주소',
      'zh-CN': '地址',
      ru: 'Адрес',
    }),
    phone: t({
      en: 'Phone',
      id: 'Telepon',
      ja: '電話',
      ko: '전화',
      'zh-CN': '电话',
      ru: 'Телефон',
    }),
    website: t({
      en: 'Website',
      id: 'Situs web',
      ja: 'ウェブサイト',
      ko: '웹사이트',
      'zh-CN': '网站',
      ru: 'Веб-сайт',
    }),
    maps: t({
      en: 'Google Maps',
      id: 'Google Maps',
      ja: 'Google マップ',
      ko: 'Google 지도',
      'zh-CN': '谷歌地图',
      ru: 'Google Карты',
    }),
    opensInNewTab: t({
      en: '(opens in a new tab)',
      id: '(dibuka di tab baru)',
      ja: '（新しいタブで開きます）',
      ko: '(새 탭에서 열림)',
      'zh-CN': '（在新标签页中打开）',
      ru: '(откроется в новой вкладке)',
    }),
  },
} satisfies Dictionary
