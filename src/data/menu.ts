// 메뉴 데이터 — 가격·구성 변경 시 이 파일만 수정하면 됩니다.
export type MenuCategory = '고기류' | '점심특선' | '식사류' | '포장/선물세트'

export interface MenuItem {
  id: string
  category: MenuCategory
  name: string
  portion?: string
  price: number | null // null = 가격 확인 필요
  description?: string
  signature?: boolean
  image?: string
  imageLabel?: string
}

export const formatPrice = (price: number | null): string =>
  price === null ? '가격 문의' : `${price.toLocaleString('ko-KR')}원`

export const menuItems: MenuItem[] = [
  {
    id: 'yangnyeom-galbi',
    category: '고기류',
    name: '숯불 양념 갈비',
    portion: '200g',
    price: 15000,
    description:
      '하늘땅의 대표 메뉴. 정성껏 손질한 원육에 깊은 양념을 더해 숯불향으로 완성한 돼지양념갈비입니다.',
    signature: true,
    image: '/images/menu/yangnyeom-galbi.jpg',
    imageLabel: '숯불 양념 갈비 사진',
  },
  {
    id: 'so-galbi',
    category: '고기류',
    name: '숯불 양념 소갈비',
    portion: '200g',
    price: 27000,
    description:
      '부드러운 소갈비에 하늘땅만의 양념을 더해 고급스러운 풍미를 살린 메뉴입니다.',
    signature: true,
    image: '/images/menu/so-galbi.jpg',
    imageLabel: '숯불 양념 소갈비 사진',
  },
  {
    id: 'hanwoo-bulgogi',
    category: '고기류',
    name: '숯불 한우 불고기',
    portion: '150g',
    price: 20000,
    description:
      '한우의 깊은 맛을 숯불향과 함께 즐길 수 있는 하늘땅의 불고기 메뉴입니다.',
    signature: true,
    image: '/images/menu/hanwoo-bulgogi.jpg',
    imageLabel: '숯불 한우 불고기 사진',
  },
  {
    id: 'lunch-bulgogi',
    category: '점심특선',
    name: '숯불 한우 불고기 점심특선',
    portion: '120g',
    price: 15000,
    description:
      '점심 시간에 부담 없이 즐길 수 있는 실속형 한우 불고기 특선입니다.',
    signature: true,
    image: '/images/menu/lunch-bulgogi.jpg',
    imageLabel: '점심특선 사진',
  },
  {
    id: 'doenjang',
    category: '식사류',
    name: '된장찌개',
    price: 5000,
  },
  {
    id: 'naeng-memil',
    category: '식사류',
    name: '냉메밀',
    price: 7000,
  },
  {
    id: 'bibim-memil',
    category: '식사류',
    name: '비빔메밀',
    price: 7000,
  },
  {
    id: 'rice',
    category: '식사류',
    name: '공기밥',
    price: null,
  },
  {
    id: 'gift-galbi-set',
    category: '포장/선물세트',
    name: '양념갈비 세트',
    price: null,
  },
  {
    id: 'gift-family-set',
    category: '포장/선물세트',
    name: '가족 포장세트',
    price: null,
  },
  {
    id: 'gift-holiday-set',
    category: '포장/선물세트',
    name: '명절 선물세트',
    price: null,
  },
  {
    id: 'gift-corporate',
    category: '포장/선물세트',
    name: '기업 단체 선물',
    price: null,
  },
]

export const menuCategories: MenuCategory[] = [
  '고기류',
  '점심특선',
  '식사류',
  '포장/선물세트',
]

export const signatureMenus = menuItems.filter((item) => item.signature)
