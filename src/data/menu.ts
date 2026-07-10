export type MenuCategory = '고기류' | '점심특선' | '식사류'

export interface MenuItem {
  id: string
  category: MenuCategory
  name: string
  portion?: string
  price: number
  description?: string
  signature?: boolean
  lunchBadge?: boolean
  image?: string
  imageLabel?: string
}

export const formatPrice = (price: number): string =>
  `${price.toLocaleString('ko-KR')}원`

export const menuItems: MenuItem[] = [
  {
    id: 'yangnyeom-galbi',
    category: '고기류',
    name: '숯불 양념 돼지갈비',
    portion: '200g',
    price: 15000,
    description:
      '은은하고 담백한 양념으로 남녀노소 오랜 시간 사랑받아 온 하늘땅의 대표 메뉴',
    signature: true,
    image: '/images/menu/yangnyeom-galbi.jpg',
    imageLabel: '하늘땅 숯불 양념 돼지갈비',
  },
  {
    id: 'so-galbi',
    category: '고기류',
    name: '숯불 양념 소갈비',
    portion: '200g',
    price: 27000,
    description:
      '소고기의 풍부한 육즙과 부드러운 식감에 참숯 향을 더한 깊은 풍미',
    signature: true,
    image: '/images/menu/so-galbi.jpg',
    imageLabel: '하늘땅 숯불 양념 소갈비',
  },
  {
    id: 'hanwoo-bulgogi',
    category: '고기류',
    name: '한우 불고기',
    portion: '150g',
    price: 20000,
    description:
      '엄선한 한우와 깊은 육수가 서울식 불고기판에서 어우러지는 하늘땅의 시그니처',
    signature: true,
    image: '/images/menu/hanwoo-bulgogi.jpg',
    imageLabel: '서울식 불고기판에 담은 하늘땅 한우 불고기',
  },
  {
    id: 'lunch-bulgogi',
    category: '점심특선',
    name: '한우 불고기 점심특선',
    portion: '120g',
    price: 15000,
    description: '점심 시간에 부담 없이 즐기는 하늘땅식 서울 불고기',
    lunchBadge: true,
    image: '/images/menu/lunch-bulgogi.jpg',
    imageLabel: '서울식 불고기판의 한우 불고기 점심특선',
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
]

export const menuCategories: MenuCategory[] = ['고기류', '점심특선', '식사류']
export const signatureMenus = menuItems.filter((item) => item.signature)
export const lunchMenus = menuItems.filter((item) => item.category === '점심특선')
