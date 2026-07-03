// 선물세트 데이터 — 상품 구성·가격 확정 시 이 파일만 수정하면 됩니다.
export interface GiftItem {
  id: string
  name: string
  description: string
  price: number | null // null = 가격 확인 필요
  image: string
  imageLabel: string
  tags: string[]
}

export const giftItems: GiftItem[] = [
  {
    id: 'yangnyeom-set',
    name: '양념갈비 세트',
    description:
      '하늘땅의 대표 숯불 양념갈비를 집에서도 즐길 수 있도록 정성껏 포장한 세트입니다. 정육 기반의 원육 선별과 숙성 노하우를 그대로 담았습니다.',
    price: null,
    image: '/images/gift/yangnyeom-set.jpg',
    imageLabel: '양념갈비 세트 사진',
    tags: ['대표 상품', '가정용'],
  },
  {
    id: 'family-set',
    name: '가족 포장세트',
    description:
      '온 가족이 함께 즐길 수 있는 넉넉한 구성의 포장세트입니다. 주말 가족 식사, 캠핑, 홈파티에 좋습니다.',
    price: null,
    image: '/images/gift/family-set.jpg',
    imageLabel: '가족 포장세트 사진',
    tags: ['가족 외식', '포장'],
  },
  {
    id: 'holiday-set',
    name: '명절 선물세트',
    description:
      '설·추석 명절, 소중한 분께 마음을 전하는 프리미엄 갈비 선물세트입니다. 명절 시즌 사전 예약을 권장드립니다.',
    price: null,
    image: '/images/gift/holiday-set.jpg',
    imageLabel: '명절 선물세트 사진',
    tags: ['명절', '선물'],
  },
  {
    id: 'corporate-gift',
    name: '기업 단체 선물',
    description:
      '임직원 선물, 거래처 답례품 등 기업 단위의 대량 주문에 맞춰 구성과 수량을 협의해 드립니다.',
    price: null,
    image: '/images/gift/corporate-gift.jpg',
    imageLabel: '기업 단체 선물 사진',
    tags: ['기업', '대량 주문'],
  },
]
