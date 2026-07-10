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
      <PageHero eyebrow="OUR STANDARD" title="하늘땅의 기준" description="좋은 고기를 고르는 일부터 식탁에 올리는 순간까지" />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FIVE STANDARDS" title="변하지 않는 다섯 가지" description="정육과 육가공에서 쌓은 이해를 고객이 맛으로 느낄 수 있는 기준으로 이어갑니다." />
          <div className="standard-detail-list">
            {standards.map((item, index) => (
              <article className={`standard-detail ${index % 2 ? 'standard-detail--reverse' : ''}`} key={item.id}>
                <img src={item.image.src} alt={item.image.alt} width="1600" height="1067" loading={index === 0 ? 'eager' : 'lazy'} />
                <div><span>{String(index + 1).padStart(2, '0')}</span><h2>{item.title}</h2><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--charcoal butchery-foundation">
        <div className="container butchery-foundation__layout">
          <div><p className="section-kicker">BUTCHERY FOUNDATION</p><h2>정육과 육가공에서<br />시작된 고기에 대한 이해</h2><p>부위의 특성과 결을 살피고, 메뉴에 맞는 손질과 양념을 거쳐 숯불 위에서 가장 좋은 맛을 완성합니다.</p></div>
          <img src="/images/butchery/processing.jpg" alt="하늘땅의 원육 손질과 육가공 과정" width="1600" height="1067" loading="lazy" />
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
