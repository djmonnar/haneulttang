// 지점 정보 — 실제 정보 확정 시 이 파일만 수정하면 사이트 전체에 반영됩니다.
export interface StoreInfo {
  brandName: string
  storeName: string
  slogan: string
  address: string
  phone: string
  hours: string
  owner: string
  bizNumber: string
  parking: string
  directions: string[]
  naverMapUrl: string
  mapEmbedUrl: string
  kakaoMapUrl: string
  kakaoChannelUrl: string
}

export const store: StoreInfo = {
  brandName: '백년가업 하늘땅',
  storeName: '백년가업 하늘땅 본점',
  slogan: '정육에서 시작되는 숯불갈비의 품격',
  address: '경남 창원시 진해구 병암로 49 백년가업 하늘땅 본점',
  phone: '[전화번호 확인 필요]',
  hours: '[영업시간 확인 필요]',
  owner: '[대표자 입력 필요]',
  bizNumber: '[사업자등록번호 입력 필요]',
  parking: '[주차 안내 입력 필요]',
  directions: [
    '스타벅스와 탑텐 사이에서 우회전',
    '진해 경화동 / 병암로 인근',
    '가족 외식, 단체 방문 시 사전 예약 권장',
  ],
  naverMapUrl:
    'https://map.naver.com/p/search/' +
    encodeURIComponent('경남 창원시 진해구 병암로 49'),
  mapEmbedUrl:
    'https://maps.google.com/maps?q=' +
    encodeURIComponent('경남 창원시 진해구 병암로 49') +
    '&z=16&ie=UTF8&output=embed',
  kakaoMapUrl:
    'https://map.kakao.com/?q=' +
    encodeURIComponent('경남 창원시 진해구 병암로 49'),
  kakaoChannelUrl: '#', // 추후 카카오톡 채널 링크로 교체
}
