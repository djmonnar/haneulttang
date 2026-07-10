import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandSubnav from '../components/BrandSubnav'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { brandStoryParagraphs, trustHighlights } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  '부모님의 손맛과 철학을 잇는 마음',
  '유행보다 오래 지켜온 맛의 기준',
  '가족이 안심하고 찾는 식사 공간',
  '다음 세대에도 전하고 싶은 한 끼',
] as const

export default function Brand() {
  usePageMeta(
    '2대를 이어온 숯불갈비 | 백년가업 하늘땅 이야기',
    '부모님의 손맛과 철학을 이어 2대째 가업을 지키는 백년가업 하늘땅의 이야기와 새로 지은 공간을 소개합니다.',
  )

  return (
    <>
      <PageHero eyebrow="BRAND STORY" title="하늘땅 이야기" description="한 끼의 맛이 가업이 되기까지" />
      <BrandSubnav />

      <section className="section">
        <div className="container story-layout story-layout--brand">
          <figure className="story-visual">
            <img src="/images/hero/exterior.jpg" alt="새롭게 신축한 백년가업 하늘땅 본점 외관" width="1600" height="1067" />
            <figcaption><span>2代</span> 손맛과 철학을 잇다</figcaption>
          </figure>
          <div className="story-copy">
            <p className="section-kicker">TWO GENERATIONS</p>
            <h2>부모님의 손맛에서<br />오늘의 하늘땅까지</h2>
            <blockquote>“2대를 이어온 손맛과 철학 위에,<br />새로워진 공간의 품격을 더했습니다.”</blockquote>
            {brandStoryParagraphs.slice(0, 3).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" to="/brand/greeting">대표 인사말 읽기 <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE KEEP" title="하늘땅이 이어가는 것" />
          <div className="trust-strip__grid trust-strip__grid--brand">
            {trustHighlights.map((item, index) => (
              <article className="trust-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section brand-renewal">
        <div className="container brand-renewal__layout">
          <div className="brand-renewal__copy">
            <p className="section-kicker">A NEW CHAPTER</p>
            <h2>맛은 지키고,<br />공간은 새롭게</h2>
            <p>{brandStoryParagraphs[3]}</p>
            <p>오랜 시간 찾아주신 분들이 더 편안하게 식사하고, 가족과 단체 모임을 여유롭게 이어갈 수 있도록 새 매장을 지었습니다.</p>
            <ul>{values.map((value) => <li key={value}><Check aria-hidden="true" size={18} /> {value}</li>)}</ul>
          </div>
          <div className="brand-renewal__images">
            <img src="/images/brand/store.jpg" alt="하늘땅의 이전 매장 이야기" width="1600" height="1067" loading="lazy" />
            <img src="/images/space/main-hall.jpg" alt="새롭게 지은 하늘땅 본점 메인 홀" width="1600" height="1067" loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
