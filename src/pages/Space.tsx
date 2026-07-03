import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'

const spaceCards = [
  {
    title: '메인 홀',
    desc: '넓고 쾌적한 메인 홀에서 숯불갈비 본연의 분위기를 즐기실 수 있습니다.',
    image: '/images/space/main-hall.jpg',
    label: '매장 내부 사진 자리',
  },
  {
    title: '가족 외식석',
    desc: '아이와 함께여도 편안한 가족 단위 좌석을 준비했습니다.',
    image: '/images/space/family.jpg',
    label: '가족 외식석 사진 자리',
  },
  {
    title: '단체석',
    desc: '회사 회식, 모임 등 단체 손님을 위한 넉넉한 좌석을 운영합니다.',
    image: '/images/space/group.jpg',
    label: '단체석 사진 자리',
  },
  {
    title: '프라이빗 룸',
    desc: '접대, 상견례, 부모님 모임 등 조용한 자리가 필요할 때 좋습니다.',
    image: '/images/space/private-room.jpg',
    label: '룸 사진 자리',
  },
  {
    title: '대기 공간',
    desc: '방문 인원이 많은 시간에도 편히 기다리실 수 있는 공간을 마련했습니다.',
    image: '/images/space/waiting.jpg',
    label: '대기 공간 사진 자리',
  },
  {
    title: '주차 안내',
    desc: '매장 이용 고객을 위한 주차 공간을 안내해 드립니다. [주차 안내 입력 필요]',
    image: '/images/space/parking.jpg',
    label: '주차 또는 외관 사진 자리',
  },
]

const occasions = [
  '부모님 모시고 가기 좋은 식사',
  '가족 외식',
  '회사 회식',
  '단체 모임',
  '손님 접대',
  '점심 모임',
]

export default function Space() {
  usePageMeta(
    '공간 안내 | 백년가업 하늘땅 본점',
    '가족 외식부터 단체 모임까지 편안하게 머무는 공간. 메인 홀, 가족 외식석, 단체석, 프라이빗 룸, 주차 안내까지 하늘땅의 공간을 소개합니다.',
  )

  return (
    <>
      <PageHero
        eyebrow="SPACE"
        title="공간 안내"
        description="가족 외식부터 단체 모임까지, 편안하게 머무는 공간"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="OUR SPACE"
            title="하늘땅의 공간"
            description="모임의 성격에 맞게 준비된 좌석과 공간을 소개합니다."
          />
          <div className="grid grid--3">
            {spaceCards.map((card) => (
              <article className="space-card" key={card.title}>
                <ImagePlaceholder src={card.image} label={card.label} ratio="4 / 3" />
                <div className="space-card__body">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <SectionHeading
            eyebrow="OCCASIONS"
            title="이런 자리에 좋습니다"
            description="하늘땅이 어울리는 모임을 추천해 드립니다."
          />
          <ul className="occasion-list">
            {occasions.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="모임 전, 미리 문의해 주세요"
        description="인원과 모임 성격을 알려주시면 알맞은 좌석을 준비해 드립니다."
      />
    </>
  )
}
