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
      <PageHero eyebrow="SPACE" title="새로워진 공간" description="맛의 깊이는 그대로, 식사의 편안함은 한층 더" />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="OUR SPACE" title="모임에 맞는 편안한 자리" description="실제 하늘땅 본점의 공간을 소개합니다." />
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
          <SectionHeading eyebrow="FOR YOUR MOMENT" title="방문 목적별 추천" />
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
      <CtaBanner title="모임에 맞는 자리를 준비해 드립니다" description="인원과 모임 성격을 알려주시면 편안한 좌석을 안내해 드립니다." />
    </>
  )
}
