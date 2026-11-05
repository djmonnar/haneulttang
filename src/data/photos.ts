const folder = '/images/visit-20261105'

const photo = (name: string, alt: string) => ({
  src: `${folder}/${name}.webp`, alt, width: 1920, height: 1280,
})

export const photos = {
  roomWindow: photo('room-window', '하늘땅 매장 창가의 테이블 좌석과 숯불 배기 시설'),
  roomConnected: photo('room-connected', '하늘땅 룸 공간에 나란히 배치된 식사 테이블'),
  roomSeating: photo('room-seating', '하늘땅 룸의 테이블과 의자'),
  hall: photo('hall', '하늘땅 홀의 전체 좌석과 창가 테이블'),
  porkGalbi: photo('pork-galbi', '집게로 구워내는 하늘땅 숯불 양념 돼지갈비'),
  beefGalbi: photo('beef-galbi', '숯불 위에 넓게 펼쳐 구운 하늘땅 양념 소갈비'),
  charcoalTable: photo('charcoal-table', '하늘땅의 참숯 화로와 갈비, 곁들임 반찬'),
  bulgogi: photo('hanwoo-bulgogi', '서울식 불고기판에 채소와 함께 담은 하늘땅 한우 불고기'),
}
