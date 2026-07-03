import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'

const philosophies = [
  {
    title: '정직한 원육 선별',
    desc: '정육점 운영 기반으로 원육을 직접 보고, 만지고, 이해한 뒤 가장 좋은 상태의 고기만 선별합니다.',
  },
  {
    title: '정성을 담은 손질과 양념',
    desc: '갈비 한 대 한 대 정성껏 손질하고, 하늘땅만의 양념과 숙성으로 깊은 맛을 완성합니다.',
  },
  {
    title: '가족이 함께하는 따뜻한 식사 공간',
    desc: '아이부터 부모님까지, 온 가족이 편안하게 머물 수 있는 공간과 서비스를 지향합니다.',
  },
]

const meanings = [
  {
    title: '오래 사랑받는 브랜드',
    desc: '유행을 좇지 않고, 세월이 지나도 변하지 않는 맛과 정성으로 오래 사랑받는 브랜드를 만듭니다.',
  },
  {
    title: '지역에서 신뢰받는 외식 공간',
    desc: '진해 지역의 가족 외식과 모임 자리에서 믿고 찾을 수 있는 갈비명가가 되고자 합니다.',
  },
  {
    title: '다음 세대까지 이어갈 수 있는 외식 브랜드',
    desc: '백년가업이라는 이름처럼, 다음 세대까지 이어질 수 있는 기업형 외식 브랜드를 지향합니다.',
  },
]

const directions = [
  '지역 갈비명가',
  '정육 기반 외식 브랜드',
  '직영점 확장 가능성',
  '선물세트 및 육가공 상품화',
  '브랜드 본사화',
]

export default function Brand() {
  usePageMeta(
    '하늘땅 이야기 | 백년가업 하늘땅 본점',
    '좋은 고기는 정직한 선별에서 시작됩니다. 정육 기반 숯불갈비 브랜드 백년가업 하늘땅의 철학과 백년가업의 의미를 소개합니다.',
  )

  return (
    <>
      <PageHero
        eyebrow="BRAND STORY"
        title="하늘땅 이야기"
        description="정육에서 시작되는 숯불갈비의 품격, 백년가업 하늘땅"
      />

      {/* 브랜드 인사말 */}
      <section className="section">
        <div className="container">
          <div className="brand-greeting">
            <div className="brand-greeting__text">
              <SectionHeading
                eyebrow="GREETING"
                title="좋은 고기는 정직한 선별에서 시작됩니다"
                align="left"
              />
              <p>
                백년가업 하늘땅은 단순히 고기를 굽는 식당이 아니라, 정육 기반의
                원육 선별과 손질, 육가공 노하우를 바탕으로 가장 맛있는 상태의
                갈비를 제공하는 숯불갈비 브랜드입니다.
              </p>
              <p>
                고기를 가장 잘 아는 사람이 고르고, 손질하고, 굽습니다. 하늘땅의
                식탁 위에는 정육에서 시작된 정직한 품질과, 가족을 대접하는
                마음이 함께 오릅니다.
              </p>
            </div>
            <ImagePlaceholder
              src="/images/brand/main.jpg"
              label="브랜드 이미지 자리"
              ratio="4 / 5"
            />
          </div>
        </div>
      </section>

      {/* 브랜드 철학 */}
      <section className="section section--beige">
        <div className="container">
          <SectionHeading eyebrow="PHILOSOPHY" title="하늘땅의 세 가지 철학" />
          <div className="grid grid--3">
            {philosophies.map((p, i) => (
              <article className="philosophy-card" key={p.title}>
                <span className="philosophy-card__num">{`0${i + 1}`}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 백년가업의 의미 */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="百年家業"
            title="백년가업의 의미"
            description="백 년을 이어갈 가업이라는 마음으로, 하루하루의 식탁을 정성껏 준비합니다."
            onDark
          />
          <div className="grid grid--3">
            {meanings.map((m) => (
              <article className="meaning-card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 지향하는 방향 */}
      <section className="section">
        <div className="container">
          <div className="brand-direction">
            <div className="brand-direction__text">
              <SectionHeading
                eyebrow="VISION"
                title="하늘땅이 지향하는 방향"
                align="left"
                description="한 곳의 매장에서 시작해, 정육 기반 외식 브랜드 본사로 성장해 갑니다."
              />
              <ul className="check-list">
                {directions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src="/images/brand/store.jpg"
              label="매장 외관 또는 내부 사진 자리"
              ratio="4 / 3"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
