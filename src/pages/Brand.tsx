import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandSubnav from '../components/BrandSubnav'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { brandStoryParagraphs, trustHighlights } from '../data/content'
import { photos } from '../data/photos'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  '부모님께 배운 손맛과 철학',
  '원육과 양념을 준비하는 기준',
  '가족이 안심하고 찾는 식사 공간',
  '다음 세대에도 이어가고 싶은 가업',
] as const

export default function Brand() {
  usePageMeta(
    '2대를 이어온 숯불갈비 | 백년가업 하늘땅 이야기',
    '부모님의 손맛과 철학을 이어 2대째 운영하는 백년가업 하늘땅. 매장 이야기와 홀·룸을 소개합니다.',
  )

  return (
    <>
      <PageHero eyebrow="BRAND STORY" title="하늘땅 이야기" description="부모님이 하시던 갈비집을 이어 2대째 운영하고 있습니다." />
      <BrandSubnav />

      <section className="section">
        <div className="container story-layout story-layout--brand">
          <figure className="story-visual">
            <img src="/images/hero/exterior.jpg" alt="백년가업 하늘땅 본점 외관" width="1600" height="1067" />
            <figcaption>
              <span>2대째</span>
              <strong>부모님의 손맛과 철학을 이어갑니다</strong>
            </figcaption>
          </figure>
          <div className="story-copy">
            <h2>부모님의 손맛에서<br />오늘의 하늘땅까지</h2>
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
            <h2>가족 식사부터<br />단체 모임까지</h2>
            <p>{brandStoryParagraphs[3]}</p>
            <p>가족 외식과 단체 모임에 맞춰 홀과 룸을 운영합니다.</p>
            <ul>{values.map((value) => <li key={value}><Check aria-hidden="true" size={18} /> {value}</li>)}</ul>
          </div>
          <div className="brand-renewal__images">
            <img {...photos.roomWindow} loading="lazy" />
            <img {...photos.roomConnected} loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
