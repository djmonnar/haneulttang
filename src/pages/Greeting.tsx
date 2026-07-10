import BrandSubnav from '../components/BrandSubnav'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import { brandStoryParagraphs } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Greeting() {
  usePageMeta(
    '대표 인사말 | 백년가업 하늘땅 본점',
    '2대를 이어온 맛의 깊이와 새로워진 공간의 품격. 백년가업 하늘땅 박동철 대표의 인사말입니다.',
  )

  return (
    <>
      <PageHero eyebrow="GREETING" title="대표 인사말" description="2대를 이어온 맛의 깊이, 새로워진 공간의 품격" />
      <BrandSubnav />
      <section className="section">
        <div className="container container--narrow greeting-page">
          <article className="greeting-letter" aria-labelledby="greeting-title">
            <p className="greeting-letter__eyebrow">하늘땅을 찾아주시는 분들께</p>
            <h2 id="greeting-title">2대를 이어온 맛의 깊이,<br />새로워진 공간의 품격</h2>
            <div className="greeting-letter__body">
              {brandStoryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <footer className="greeting-letter__footer">
              <span>백년가업 하늘땅 대표</span>
              <strong className="greeting-letter__signature">박동철 올림</strong>
            </footer>
          </article>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
