import { formatPrice, lunchMenus, signatureMenus } from './menu'
import { seatingSummary, store } from './store'

export type FaqCategory = '방문 안내' | '예약 안내' | '메뉴와 공간'

export interface FaqItem {
  category: FaqCategory
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    category: '방문 안내',
    question: '하늘땅 숯불갈비와 백년가업 하늘땅 본점은 같은 곳인가요?',
    answer: `네, 같은 매장입니다. 하늘땅 숯불갈비는 ${store.address}에 있는 ${store.storeName}입니다. 전화번호는 ${store.phone}이며, 공식 홈페이지는 하늘땅.com입니다.`,
  },
  {
    category: '방문 안내',
    question: '백년가업 하늘땅 본점은 어디에 있나요?',
    answer: '경남 창원시 진해구 병암로 49에 있습니다. 스타벅스와 탑텐 사이에서 우회전하면 매장과 전용 주차장을 찾기 쉽습니다.',
  },
  {
    category: '방문 안내',
    question: '영업시간과 브레이크타임은 언제인가요?',
    answer: '매일 오전 11시부터 오후 9시 30분까지 영업합니다. 브레이크타임은 오후 3시부터 5시까지이며 라스트오더는 오후 8시입니다.',
  },
  {
    category: '방문 안내',
    question: '주차할 수 있나요?',
    answer: `매장 전용 주차장에 ${store.parkingMinimumSpaces}대 이상 주차할 수 있으며, 매장 앞 도로변 흰 선 구간에도 주차가 가능합니다. 내비게이션에서 백년가업 하늘땅 본점 또는 ${store.address}를 검색해 주세요.`,
  },
  {
    category: '방문 안내',
    question: '휴무일이 있나요?',
    answer: '하늘땅 본점은 매일 운영합니다. 공휴일이나 임시 휴무 등 운영 변동이 걱정되는 날에는 방문 전에 매장으로 전화해 확인해 주세요.',
  },
  {
    category: '예약 안내',
    question: '예약은 어떻게 하나요?',
    answer: '홈페이지의 네이버 예약 버튼에서 방문 날짜, 시간, 인원을 선택해 예약할 수 있습니다. 별도 문의가 필요하면 매장 전화 055-541-5252로 연락해 주세요.',
  },
  {
    category: '예약 안내',
    question: '전화·카카오톡 상담과 네이버 예약은 어떻게 구분하나요?',
    answer: '좌석 예약은 네이버 예약을 이용해 주세요. 단체석, 모임, 인원 변경처럼 상담이 필요한 내용은 매장 전화 055-541-5252 또는 카카오톡 상담으로 문의해 주세요.',
  },
  {
    category: '예약 안내',
    question: '카카오톡으로 문의할 수 있나요?',
    answer: '네. 홈페이지의 카카오톡 상담 버튼을 누르면 하늘땅 채널의 채팅으로 연결됩니다. 좌석 예약은 네이버 예약을 이용해 주세요.',
  },
  {
    category: '예약 안내',
    question: '예약을 변경하거나 취소하려면 어떻게 하나요?',
    answer: '네이버 예약 내역에서 변경 또는 취소 가능 여부를 확인해 주세요. 방문 시간이 임박했거나 인원 변경이 필요한 경우에는 매장으로 전화해 주시면 확인을 도와드립니다.',
  },
  {
    category: '예약 안내',
    question: '가족 외식이나 단체 모임도 가능한가요?',
    answer: `네. ${seatingSummary}까지 이용할 수 있습니다. 룸 전체 개방이나 단체 모임은 ${store.phone}로 인원과 일정을 문의해 주세요.`,
  },
  {
    category: '메뉴와 공간',
    question: '하늘땅 숯불갈비의 메뉴 가격과 중량은 어떻게 되나요?',
    answer: `${signatureMenus.map((menu) => `${menu.name}는 ${menu.portion}에 ${formatPrice(menu.price)}`).join(', ')}입니다. 전체 메뉴는 홈페이지 메뉴 안내에서 확인하실 수 있습니다. 가격과 중량은 매장 운영 상황에 따라 변경될 수 있습니다.`,
  },
  {
    category: '메뉴와 공간',
    question: '점심특선도 있나요?',
    answer: `${lunchMenus.map((menu) => `${menu.name}은 ${menu.portion}에 ${formatPrice(menu.price)}`).join(', ')}입니다. 매일 오전 11시에 문을 열며 브레이크타임은 오후 3시부터 5시까지입니다.`,
  },
  {
    category: '메뉴와 공간',
    question: '하늘땅의 대표 메뉴는 무엇인가요?',
    answer: '숯불 양념 돼지갈비가 대표 메뉴입니다. 숯불 양념 소갈비와 한우 불고기도 준비하고 있습니다. 원육을 골라 직접 만든 양념을 사용하며 갈비는 참숯에 굽습니다.',
  },
  {
    category: '메뉴와 공간',
    question: '고기는 숯불로 굽나요?',
    answer: '네. 돼지갈비와 소갈비는 참숯에 구워 드십니다. 한우 불고기는 육수를 넣은 서울식 불고기판에 끓여 드시는 메뉴입니다.',
  },
  {
    category: '메뉴와 공간',
    question: '매장 공기와 환기 시설은 어떤가요?',
    answer: '매장에는 공조 시스템과 테이블별 배기 시설을 갖추고 있습니다.',
  },
  {
    category: '메뉴와 공간',
    question: '갈비 선물세트는 어떻게 주문하나요?',
    answer: '선물세트 구성과 수량은 매장 전화 055-541-5252 또는 카카오톡으로 상담하실 수 있습니다. 기업이나 단체의 대량 주문도 문의해 주세요.',
  },
]

export const homeFaqItems = faqItems.slice(0, 6)
