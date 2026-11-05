import { photos } from './photos'
import { seatingSummary, store } from './store'

export interface ContentImage {
  src: string
  alt: string
  width?: number
  height?: number
}

export const trustHighlights = [
  {
    title: '2대째 가업',
    description: '부모님의 손맛과 철학을 이어온 숯불갈비',
  },
  {
    title: '엄선한 원육',
    description: '기준에 맞춰 고르고 준비하는 신선한 고기',
  },
  {
    title: '새로 지은 공간',
    description: '쾌적한 신축 매장과 현대적인 공조 시스템',
  },
  {
    title: '모임에 좋은 공간',
    description: '가족 외식부터 부모님 모임, 단체 회식까지',
  },
] as const

export const brandStoryParagraphs = [
  '백년가업 하늘땅은 부모님의 손맛과 철학을 이어받아 2대째 가업을 이어가고 있는 숯불갈비 전문점입니다.',
  '세월이 흘러도 변하지 않는 기준으로 엄선한 원육, 정성껏 만든 양념, 신선한 식재료를 고집하며 하늘땅만의 숯불구이를 준비하고 있습니다.',
  '대표 메뉴인 숯불 양념 돼지갈비는 은은하고 담백한 양념 맛으로 오랜 시간 남녀노소에게 사랑받아 온 메뉴입니다. 숯불 양념 소갈비와 한우 불고기 또한 고기의 풍미와 참숯 향을 조화롭게 담아낸 하늘땅의 시그니처 메뉴입니다.',
  '새롭게 신축한 매장은 위생적이고 쾌적한 식사 환경을 위해 세련된 인테리어와 현대적인 공조 시스템을 갖추었습니다. 오랜 내공이 담긴 숯불의 맛은 그대로 지키고, 식사의 편안함은 한층 더 높였습니다.',
  '가족 외식부터 격식 있는 모임까지, 백년가업 하늘땅에서 시간이 증명한 진짜 숯불구이를 경험해 보시기 바랍니다.',
] as const

interface Standard {
  id: string
  title: string
  description: string
  image?: ContentImage
}

export const standards: Standard[] = [
  {
    id: 'meat',
    title: '원육',
    description: '기준에 맞춰 엄선하는 신선한 고기',
    image: photos.bulgogi,
  },
  {
    id: 'marinade',
    title: '양념',
    description: '지나치게 자극적이지 않고 은은하게 배어드는 하늘땅의 양념',
    image: photos.beefGalbi,
  },
  {
    id: 'aging',
    title: '숙성',
    description: '원육과 메뉴의 특성에 맞춰 완성하는 깊은 맛',
  },
  {
    id: 'charcoal',
    title: '참숯',
    description: '고기의 육즙과 풍미를 살려주는 은은한 숯 향',
    image: photos.charcoalTable,
  },
  {
    id: 'ingredients',
    title: '신선한 식재료',
    description: '고기와 함께하는 야채와 반찬까지 지키는 기준',
    image: photos.porkGalbi,
  },
]

export const spaces = [
  {
    id: 'main-hall',
    title: '메인 홀',
    description: `테이블 좌석으로 구성된 ${store.seating.hall}명 규모의 홀입니다.`,
    image: photos.hall,
  },
  {
    id: 'family',
    title: '가족석',
    description: '아이부터 부모님까지 편안하게 머무는 가족 단위 좌석',
    image: photos.roomWindow,
  },
  {
    id: 'group',
    title: '단체석',
    description: `룸 전체 개방 시 최대 ${store.seating.combinedRoomsMax}명까지 이용할 수 있습니다.`,
    image: photos.roomConnected,
  },
  {
    id: 'private-room',
    title: '프라이빗 룸',
    description: `룸당 최대 ${store.seating.roomMax}명까지 이용할 수 있습니다.`,
    image: photos.roomSeating,
  },
  {
    id: 'parking',
    title: '외관과 주차장',
    description: store.parking,
    image: { src: '/images/hero/exterior.jpg', alt: '하늘땅 본점 외관과 매장 앞 주차장', width: 1920, height: 1280 },
  },
] as const

export const visitOccasions = [
  { title: '가족 외식', description: '아이부터 부모님까지 편안하게 즐기는 식사' },
  { title: '부모님 모임', description: '조용하고 품격 있는 공간에서 함께하는 시간' },
  { title: '회사 회식', description: seatingSummary },
  { title: '친목 모임', description: '편안하게 식사와 대화를 즐길 수 있는 공간' },
  { title: '격식 있는 자리', description: '독립된 공간에서 차분하게 즐기는 모임' },
] as const

export const reviewSummaries = [
  '부모님과 함께 방문하기 편안한 곳',
  '돼지갈비 양념이 자극적이지 않고 담백해요',
  '주차장이 있어 가족 모임 장소로 편리해요',
  '새 매장이 넓고 쾌적해졌어요',
] as const
