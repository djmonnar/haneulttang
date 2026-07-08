import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import BrandSubnav from '../components/BrandSubnav'
import CtaBanner from '../components/CtaBanner'

const greetingParagraphs = [
  '백년가업 하늘땅은 부모님의 손맛과 철학을 이어받아 3대째 가업을 이어가고 있는 숯불갈비 전문점입니다.',
  '세월이 흘러도 변하지 않는 기준으로 엄선한 원육, 정성껏 만든 양념, 신선한 식재료를 고집하며 하늘땅만의 숯불구이를 준비하고 있습니다.',
  '대표 메뉴인 숯불 양념 돼지갈비는 은은하고 담백한 양념 맛으로 오랜 시간 남녀노소에게 사랑받아 온 메뉴입니다. 숯불 양념 소갈비와 한우 불고기 또한 고기의 풍미와 참숯 향을 조화롭게 담아낸 하늘땅의 시그니처 메뉴입니다.',
  '새롭게 신축한 매장은 위생적이고 쾌적한 식사 환경을 위해 세련된 인테리어와 현대적인 공조 시스템을 갖추었습니다. 오랜 내공이 담긴 숯불의 맛은 그대로 지키고, 식사의 편안함은 한층 더 높였습니다.',
  '가족 외식부터 격식 있는 모임까지, 백년가업 하늘땅에서 시간이 증명한 진짜 숯불구이를 경험해 보시기 바랍니다.',
]

export default function Greeting() {
  usePageMeta(
    '대표 인사말 | 백년가업 하늘땅 본점',
    '3대를 이어온 맛의 깊이와 새로워진 공간의 품격. 백년가업 하늘땅 박동철 대표의 인사말을 소개합니다.',
  )

  return (
    <>
      <PageHero
        eyebrow="GREETING"
        title="대표 인사말"
        description="3대를 이어온 맛의 깊이, 새로워진 공간의 품격"
      />
      <BrandSubnav />

      <section className="section">
        <div className="container">
          <div className="greeting-page">
            <article className="greeting-letter" aria-labelledby="greeting-title">
              <p className="greeting-letter__eyebrow">하늘땅을 찾아주시는 분들께</p>
              <h2 id="greeting-title">3대를 이어온 맛의 깊이, 새로워진 공간의 품격</h2>
              <div className="greeting-letter__body">
                {greetingParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <footer className="greeting-letter__footer">
                <span>백년가업 하늘땅 대표</span>
                <strong className="greeting-letter__signature">박동철 올림</strong>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
