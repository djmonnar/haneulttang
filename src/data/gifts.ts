// 선물세트 데이터 — 상품 구성·가격 확정 시 이 파일만 수정하면 됩니다.
export interface GiftItem {
  id: string
  name: string
  description: string
  price: number | null // null = 가격 확인 필요
  tags: string[]
}

export const giftItems: GiftItem[] = [
  {
    id: 'yangnyeom-set',
    name: '양념갈비 세트',
    description:
      '하늘땅의 숯불 양념갈비를 집에서도 드실 수 있는 포장 세트입니다. 정육 경험을 바탕으로 원육을 고르고 숙성해 준비합니다.',
    price: null,
    tags: ['대표 상품', '가정용'],
  },
  {
    id: 'family-set',
    name: '가족 포장세트',
    description:
      '온 가족이 함께 즐길 수 있는 넉넉한 구성의 포장세트입니다. 주말 가족 식사, 캠핑, 홈파티에 좋습니다.',
    price: null,
    tags: ['가족 외식', '포장'],
  },
  {
    id: 'holiday-set',
    name: '명절 선물세트',
    description:
      '설·추석에 선물하실 수 있는 갈비 세트입니다. 명절에는 사전 예약을 권합니다.',
    price: null,
    tags: ['명절', '선물'],
  },
  {
    id: 'corporate-gift',
    name: '기업 단체 선물',
    description:
      '임직원 선물, 거래처 답례품 등 기업 단위의 대량 주문에 맞춰 구성과 수량을 협의해 드립니다.',
    price: null,
    tags: ['기업', '대량 주문'],
  },
]
