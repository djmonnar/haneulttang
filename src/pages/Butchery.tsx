import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'

const processSteps = [
  { label: '원육 선별', desc: '정육 기반의 안목으로 좋은 원육만 선별' },
  { label: '손질', desc: '부위별 특성에 맞춘 정성 어린 손질' },
  { label: '육가공', desc: '자체 육가공 역량으로 균일한 품질 유지' },
  { label: '양념/숙성', desc: '하늘땅만의 양념과 숙성으로 깊은 맛 완성' },
  { label: '숯불 조리', desc: '숯불향을 입혀 가장 맛있는 상태로 조리' },
  { label: '매장 제공', desc: '가장 맛있는 순간에 식탁 위로' },
  { label: '포장/선물세트', desc: '집에서도, 선물로도 이어지는 하늘땅의 맛' },
]

const strengths = [
  {
    title: '원육 선별력',
    desc: '정육점 운영 기반으로 축적된 안목으로 원육의 상태를 직접 판단합니다.',
  },
  {
    title: '손질 노하우',
    desc: '부위별 특성을 이해한 손질로 같은 고기도 더 맛있게 만듭니다.',
  },
  {
    title: '육가공 가능성',
    desc: '자체 가공 구조를 갖춰 맛의 균일성과 품질 관리, 원가 경쟁력을 확보합니다.',
  },
  {
    title: '양념육 상품화 가능성',
    desc: '하늘땅의 양념육을 상품 형태로 확장할 수 있는 기반을 갖추고 있습니다.',
  },
  {
    title: '선물세트 확장 가능성',
    desc: '명절·기업 선물세트 등 정육 기반 상품 라인업으로 확장이 가능합니다.',
  },
  {
    title: '직영점 및 가맹점 공급 가능성',
    desc: '균일한 품질의 양념육 공급 구조로 향후 매장 확장 시에도 같은 맛을 유지합니다.',
  },
]

export default function Butchery() {
  usePageMeta(
    '정육·육가공 | 백년가업 하늘땅 본점',
    '하늘땅의 갈비는 정육에서 시작됩니다. 원육 선별부터 손질, 육가공, 양념·숙성, 숯불 조리까지 하늘땅만의 품질 구조를 소개합니다.',
  )

  return (
    <>
      <PageHero
        eyebrow="BUTCHERY"
        title="정육·육가공"
        description="하늘땅의 갈비는 정육에서 시작됩니다"
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="WHY BUTCHERY"
            title="고기를 가장 잘 아는 사람이 굽습니다"
          />
          <p className="lead-text">
            하늘땅은 정육점 운영 기반을 바탕으로 원육을 이해하고, 직접
            선별·손질·가공하는 구조를 갖추고 있습니다. 이는 맛의 균일성, 품질
            관리, 원가 경쟁력, 향후 상품화 가능성으로 이어집니다.
          </p>
        </div>
      </section>

      {/* 프로세스 다이어그램 */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="PROCESS"
            title="정육에서 식탁까지"
            description="원육이 하늘땅의 식탁 위 갈비가 되기까지의 과정입니다."
            onDark
          />
          <ol className="process process--detail">
            {processSteps.map((step, i) => (
              <li className="process__step" key={step.label}>
                <span className="process__num">{i + 1}</span>
                <span className="process__label">{step.label}</span>
                <span className="process__desc">{step.desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 차별점 */}
      <section className="section section--beige">
        <div className="container">
          <SectionHeading
            eyebrow="STRENGTH"
            title="하늘땅의 차별점"
            description="정육 기반 구조가 만드는 여섯 가지 경쟁력입니다."
          />
          <div className="grid grid--3">
            {strengths.map((s) => (
              <article className="strength-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 */}
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            <ImagePlaceholder
              src="/images/butchery/showcase.jpg"
              label="정육 쇼케이스 사진 자리"
              ratio="4 / 3"
            />
            <ImagePlaceholder
              src="/images/butchery/processing.jpg"
              label="육가공 작업 사진 자리"
              ratio="4 / 3"
            />
            <ImagePlaceholder
              src="/images/butchery/marinated.jpg"
              label="양념갈비 사진 자리"
              ratio="4 / 3"
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="정육 기반 상품·공급 문의"
        description="선물세트, 양념육 상품화, 공급 관련 문의는 브랜드 문의 페이지를 이용해 주세요."
      />
    </>
  )
}
