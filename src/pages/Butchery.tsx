import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { standards } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Butchery() {
  usePageMeta(
    '하늘땅의 기준 | 원육·양념·숙성·참숯',
    '엄선한 원육, 은은한 양념, 메뉴에 맞는 숙성, 참숯, 신선한 식재료까지 하늘땅이 지키는 다섯 가지 기준입니다.',
    '/standards',
  )

  return (
    <>
      <PageHero eyebrow="OUR STANDARD" title="하늘땅의 기준" description="고기를 고르고 손질하는 기준을 소개합니다." />
      <section className="section">
        <div className="container">
          <SectionHeading title="원육부터 식재료까지" description="정육과 육가공 경험을 바탕으로 고기와 식재료를 준비합니다." />
          <div className="standard-detail-list">
            {standards.map((item, index) => (
              <article className={`standard-detail ${index % 2 ? 'standard-detail--reverse' : ''} ${!item.image ? 'standard-detail--text' : ''}`} key={item.id}>
                {item.image && <img {...item.image} loading={index === 0 ? 'eager' : 'lazy'} />}
                <div><span>{String(index + 1).padStart(2, '0')}</span><h2>{item.title}</h2><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--charcoal butchery-foundation">
        <div className="container container--narrow butchery-foundation__layout butchery-foundation__layout--text">
          <div><h2>고기를 살피고<br />메뉴에 맞게 손질합니다</h2><p>부위의 특성과 결을 살펴 손질하고 메뉴에 맞게 양념합니다.</p></div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
