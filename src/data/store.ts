export interface StoreInfo {
  brandName: string
  storeName: string
  slogan: string
  address: string
  lotAddress: string
  locationGuide: string
  phone: string
  telLink: string
  hours: string
  openingHours: {
    open: string
    close: string
    breakStart: string
    breakEnd: string
    lastOrder: string
  }
  owner: string
  bizNumber: string
  parking: string
  visitNote: string
  directions: string[]
  naverMapUrl: string
  mapEmbedUrl: string
  kakaoMapUrl: string
  kakaoChannelUrl: string | null
  naverReviewUrl: string | null
  socialLinks: {
    instagram: string | null
    blog: string | null
    youtube: string | null
  }
  canonicalOrigin: string
}

const placeQuery = encodeURIComponent('백년가업 하늘땅 본점')
const addressQuery = encodeURIComponent('경남 창원시 진해구 병암로 49')

export const store: StoreInfo = {
  brandName: '백년가업 하늘땅',
  storeName: '백년가업 하늘땅 본점',
  slogan: '2대를 이어온 맛의 깊이, 새로워진 공간의 품격',
  address: '경남 창원시 진해구 병암로 49',
  lotAddress: '경남 창원시 진해구 경화동 883-3',
  locationGuide: '스타벅스와 탑텐 사이에서 우회전',
  phone: '055-541-5252',
  telLink: 'tel:0555415252',
  hours: '매일 11:00-21:30',
  openingHours: {
    open: '11:00',
    close: '21:30',
    breakStart: '15:00',
    breakEnd: '17:00',
    lastOrder: '20:00',
  },
  owner: '박동철',
  bizNumber: '119-07-94650',
  parking: '전용 주차장 이용 가능',
  visitNote: '가족 및 단체 방문 시 사전 예약을 권장드립니다.',
  directions: [
    '스타벅스와 탑텐 사이에서 우회전',
    '진해 경화동 병암로 49',
    '가족 및 단체 방문 시 사전 예약 권장',
  ],
  naverMapUrl: `https://map.naver.com/p/search/${placeQuery}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${addressQuery}&z=16&ie=UTF8&output=embed`,
  kakaoMapUrl: `https://map.kakao.com/?q=${placeQuery}`,
  kakaoChannelUrl: null,
  naverReviewUrl: null,
  socialLinks: {
    instagram: null,
    blog: null,
    youtube: null,
  },
  canonicalOrigin: 'https://xn--wh1bu4c029b.com',
}
