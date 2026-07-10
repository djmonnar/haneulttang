export interface ContentImage {
  src: string
  alt: string
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

export const standards = [
  {
    id: 'meat',
    title: '원육',
    description: '기준에 맞춰 엄선하는 신선한 고기',
    image: { src: '/images/butchery/showcase.jpg', alt: '하늘땅이 엄선한 신선한 원육' },
  },
  {
    id: 'marinade',
    title: '양념',
    description: '지나치게 자극적이지 않고 은은하게 배어드는 하늘땅의 양념',
    image: { src: '/images/butchery/marinated.jpg', alt: '하늘땅 방식으로 정성껏 양념한 갈비' },
  },
  {
    id: 'aging',
    title: '숙성',
    description: '원육과 메뉴의 특성에 맞춰 완성하는 깊은 맛',
    image: { src: '/images/butchery/processing.jpg', alt: '갈비 원육을 손질하는 과정' },
  },
  {
    id: 'charcoal',
    title: '참숯',
    description: '고기의 육즙과 풍미를 살려주는 은은한 숯 향',
    image: { src: '/images/brand/main.jpg', alt: '참숯 위에서 구워지는 양념갈비' },
  },
  {
    id: 'ingredients',
    title: '신선한 식재료',
    description: '고기와 함께하는 야채와 반찬까지 지키는 기준',
    image: { src: '/images/hero/galbi-1.jpg', alt: '신선한 곁들임과 함께 차린 숯불갈비 한 상' },
  },
] as const

export const spaces = [
  {
    id: 'main-hall',
    title: '메인 홀',
    description: '높은 층고와 현대적인 공조 시스템을 갖춘 쾌적한 식사 공간',
    image: { src: '/images/space/main-hall.jpg', alt: '백년가업 하늘땅의 넓고 쾌적한 메인 홀' },
  },
  {
    id: 'family',
    title: '가족석',
    description: '아이부터 부모님까지 편안하게 머무는 가족 단위 좌석',
    image: { src: '/images/space/family.jpg', alt: '자연광이 드는 하늘땅 가족 식사 좌석' },
  },
  {
    id: 'group',
    title: '단체석',
    description: '회사 회식과 단체 모임을 여유롭게 준비할 수 있는 넉넉한 좌석',
    image: { src: '/images/space/group.jpg', alt: '단체 회식과 모임에 적합한 넓은 좌석' },
  },
  {
    id: 'private-room',
    title: '프라이빗 룸',
    description: '부모님 모임과 격식 있는 자리를 위한 독립된 공간',
    image: { src: '/images/space/private-room.jpg', alt: '독립된 하늘땅 프라이빗 룸' },
  },
  {
    id: 'waiting',
    title: '대기 공간',
    description: '방문 전후에도 편안하게 머물 수 있도록 마련한 공간',
    image: { src: '/images/space/waiting.jpg', alt: '하늘땅 매장 대기 공간' },
  },
  {
    id: 'parking',
    title: '외관과 주차장',
    description: '가족과 단체 방문이 편리한 매장 앞 전용 주차장',
    image: { src: '/images/space/parking.jpg', alt: '하늘땅 매장 앞 전용 주차장' },
  },
] as const

export const visitOccasions = [
  { title: '가족 외식', description: '아이부터 부모님까지 편안하게 즐기는 식사' },
  { title: '부모님 모임', description: '조용하고 품격 있는 공간에서 함께하는 시간' },
  { title: '회사 회식', description: '넉넉한 좌석과 편리한 단체 예약' },
  { title: '친목 모임', description: '편안하게 식사와 대화를 즐길 수 있는 공간' },
  { title: '격식 있는 자리', description: '독립된 공간에서 차분하게 즐기는 모임' },
] as const

export const reviewSummaries = [
  '부모님과 함께 방문하기 편안한 곳',
  '돼지갈비 양념이 자극적이지 않고 담백해요',
  '주차장이 있어 가족 모임 장소로 편리해요',
  '새 매장이 넓고 쾌적해졌어요',
] as const
