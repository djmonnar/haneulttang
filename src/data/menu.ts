import { photos } from './photos'

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
    price: 17000,
    description:
      '은은하고 담백한 양념의 돼지갈비. 오랫동안 사랑받아 온 하늘땅의 대표 메뉴입니다.',
    signature: true,
    image: photos.porkGalbi.src,
    imageLabel: photos.porkGalbi.alt,
  },
  {
    id: 'so-galbi',
    category: '고기류',
    name: '숯불 양념 소갈비',
    portion: '200g',
    price: 29000,
    description:
      '부드러운 소갈비에 양념을 더했습니다. 참숯에 구워 숯 향과 함께 드시는 메뉴입니다.',
    signature: true,
    image: photos.beefGalbi.src,
    imageLabel: photos.beefGalbi.alt,
  },
  {
    id: 'hanwoo-bulgogi',
    category: '고기류',
    name: '한우 불고기',
    portion: '150g',
    price: 22000,
    description:
      '한우와 육수를 서울식 불고기판에 담아 끓여 먹습니다.',
    signature: true,
    image: photos.bulgogi.src,
    imageLabel: photos.bulgogi.alt,
  },
  {
    id: 'lunch-bulgogi',
    category: '점심특선',
    name: '한우 불고기 점심특선',
    portion: '120g',
    price: 17000,
    description: '하늘땅식 서울 불고기를 점심특선으로 준비했습니다.',
    lunchBadge: true,
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
    price: 8000,
  },
]

export const menuCategories: MenuCategory[] = ['고기류', '점심특선', '식사류']
export const signatureMenus = menuItems.filter((item) => item.signature)
export const lunchMenus = menuItems.filter((item) => item.category === '점심특선')
