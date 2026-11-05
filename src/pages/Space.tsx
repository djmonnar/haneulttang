import { CalendarCheck } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SeatingGuide from '../components/SeatingGuide'
import { spaces, visitOccasions } from '../data/content'
import { seatingSummary, store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Space() {
  usePageMeta(
    '진해 가족 외식·단체 회식 공간 | 백년가업 하늘땅',
    `${seatingSummary}. ${store.parking}. 하늘땅 본점의 실제 매장 사진과 단체 모임 안내입니다.`,
  )

  return (
    <>
      <PageHero eyebrow="SPACE" title="매장 안내" description="가족 식사와 단체 모임을 위한 홀·룸을 안내합니다." />
      <section className="section">
        <div className="container">
          <SectionHeading title="홀과 룸" description="하늘땅 본점의 매장 사진입니다." />
          <SeatingGuide />
          <div className="space-gallery">
            {spaces.map((space, index) => (
              <figure className={`space-gallery__item ${index === 0 || index === 3 ? 'space-gallery__item--wide' : ''}`} key={space.id}>
                <img {...space.image} loading={index < 2 ? 'eager' : 'lazy'} />
                <figcaption><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{space.title}</h3><p>{space.description}</p></div></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading title="가족·단체 모임" />
          <div className="occasion-grid">
            {visitOccasions.map((item, index) => (
              <article className="occasion-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p>
                <a href={store.naverBookingUrl} target="_blank" rel="noreferrer"><CalendarCheck aria-hidden="true" size={17} /> 네이버 예약</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="단체로 방문하시나요?" description="인원과 날짜를 알려주시면 이용 가능한 좌석을 안내해 드립니다." />
    </>
  )
}
