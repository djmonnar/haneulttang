import { menuCategories, menuItems } from './menu'
import { store } from './store'

export const homeMeta = {
  title: '하늘땅 숯불갈비 | 백년가업 하늘땅 본점 · 진해 경화동',
  description: '하늘땅 숯불갈비 공식 홈페이지입니다. 백년가업 하늘땅 본점은 진해 경화동 병암로 49에 있습니다. 돼지갈비·소갈비·한우 불고기 메뉴와 가격, 주차, 룸·단체석, 네이버 예약을 안내합니다.',
}

export const sitePages = [
  { path: '/', name: '홈', priority: '1.0' },
  { path: '/brand', name: '하늘땅 이야기', priority: '0.8' },
  { path: '/brand/greeting', name: '인사말', priority: '0.7' },
  { path: '/menu', name: '메뉴와 가격', priority: '0.9' },
  { path: '/space', name: '매장 안내', priority: '0.8' },
  { path: '/standards', name: '하늘땅의 기준', priority: '0.7' },
  { path: '/gift', name: '선물세트', priority: '0.7' },
  { path: '/reservation', name: '예약 안내', priority: '0.9' },
  { path: '/business', name: '브랜드 문의', priority: '0.4' },
  { path: '/location', name: '오시는 길', priority: '0.9' },
  { path: '/news', name: '소식·공지', priority: '0.5' },
  { path: '/faq', name: '자주 묻는 질문', priority: '0.8' },
  { path: '/privacy', name: '개인정보처리방침', priority: '0.2' },
  { path: '/terms', name: '이용약관', priority: '0.2' },
] as const

const origin = store.canonicalOrigin
const restaurantId = `${origin}/#restaurant`
const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: store.brandName,
      alternateName: store.alternateNames,
      inLanguage: 'ko-KR',
      publisher: { '@id': restaurantId },
    },
    {
      '@type': 'Restaurant',
      '@id': restaurantId,
      name: store.storeName,
      alternateName: store.alternateNames,
      description: '하늘땅 숯불갈비는 진해 경화동 병암로 49에 있는 백년가업 하늘땅 본점입니다. 숯불 양념 돼지갈비, 소갈비, 한우 불고기를 판매하며 가족석·단체석·룸과 매장 전용 주차장을 갖추고 있습니다.',
      url: `${origin}/`,
      image: `${origin}/og-image.jpg`,
      telephone: '+82-55-541-5252',
      servesCuisine: ['한식', '숯불갈비'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '병암로 49',
        addressLocality: '창원시 진해구',
        addressRegion: '경상남도',
        addressCountry: 'KR',
      },
      geo: { '@type': 'GeoCoordinates', ...store.coordinates },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek, opens: store.openingHours.open, closes: store.openingHours.breakStart },
        { '@type': 'OpeningHoursSpecification', dayOfWeek, opens: store.openingHours.breakEnd, closes: store.openingHours.close },
      ],
      acceptsReservations: store.naverBookingUrl,
      hasMenu: { '@id': `${origin}/menu#menu` },
      hasMap: store.naverPlaceUrl,
      sameAs: [store.naverPlaceUrl],
    },
  ],
}

export const menuStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': `${origin}/menu#menu`,
  url: `${origin}/menu`,
  name: `${store.searchName} 메뉴와 가격`,
  inLanguage: 'ko-KR',
  hasMenuSection: menuCategories.map((category) => ({
    '@type': 'MenuSection',
    name: category,
    hasMenuItem: menuItems.filter((item) => item.category === category).map((item) => ({
      '@type': 'MenuItem',
      '@id': `${origin}/menu#${item.id}`,
      name: item.name,
      description: [item.portion, item.description].filter(Boolean).join(' · '),
      ...(item.image ? { image: `${origin}${item.image}` } : {}),
      offers: { '@type': 'Offer', price: item.price, priceCurrency: 'KRW' },
    })),
  })),
}
