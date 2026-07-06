import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import BrandSeal from '../components/BrandSeal'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'
import { signatureMenus, formatPrice } from '../data/menu'
import { store } from '../data/store'

// 히어로 슬라이드 — 이미지 추가/교체 시 이 배열만 수정
const heroSlides = [
  { src: '/images/hero/exterior.jpg', alt: '백년가업 하늘땅 본점 외관' },
  { src: '/images/hero/galbi-1.jpg', alt: '숯불 위 양념갈비' },
  { src: '/images/hero/galbi-2.jpg', alt: '숯불 위 양념 소갈비' },
]

const SLIDE_INTERVAL = 5500 // ms

const highlights = [
  {
    seal: '選',
    sealLabel: '가릴 선',
    title: '좋은 고기를 고르는 안목',
    desc: '좋은 갈비는 원육에서 결정됩니다. 하늘땅은 고기를 보는 눈에 타협하지 않습니다.',
  },
  {
    seal: '誠',
    sealLabel: '정성 성',
    title: '손질과 숙성의 정성',
    desc: '부위의 결을 따라 정성껏 손질하고, 하늘땅만의 양념으로 숙성해 깊은 맛을 완성합니다.',
  },
  {
    seal: '火',
    sealLabel: '불 화',
    title: '숯불이 완성하는 맛',
    desc: '잘 피운 숯불 위에서 가장 맛있는 순간에 구워, 그대로 식탁에 올립니다.',
  },
  {
    seal: '家',
    sealLabel: '집 가',
    title: '가족이 편안한 자리',
    desc: '부모님과 아이, 소중한 손님까지. 누구와 함께 와도 편안한 공간을 준비했습니다.',
  },
]

const processSteps = [
  '원육 선별',
  '손질',
  '육가공',
  '양념/숙성',
  '숯불 조리',
  '매장 제공',
]

const spaces = [
  { title: '가족 외식', label: '가족 외식석 사진 자리', image: '/images/space/family.jpg' },
  { title: '단체 회식', label: '단체석 사진 자리', image: '/images/space/group.jpg' },
  { title: '부모님 모임', label: '부모님 모임 좌석 사진 자리', image: '/images/space/parents.jpg' },
  { title: '프라이빗 룸', label: '프라이빗 룸 사진 자리', image: '/images/space/private-room.jpg' },
  { title: '주차 안내', label: '주차장 사진 자리', image: '/images/space/parking.jpg' },
]

export default function Home() {
  usePageMeta(
    '백년가업 하늘땅 본점 | 진해 숯불갈비·돼지양념갈비',
    '진해 숯불갈비 전문점 백년가업 하늘땅 본점. 정육 기반의 원육 선별과 육가공 노하우로 완성한 숯불 양념갈비, 소갈비, 한우 불고기, 점심특선, 단체 예약과 선물세트를 만나보세요.',
  )

  const [slide, setSlide] = useState(0)

  // 히어로 자동 슬라이드 — 동작 줄이기 설정 시 자동 재생 없음
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      SLIDE_INTERVAL,
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero">
        {/* 자동 슬라이더 — 이미지가 제자리에서 서서히 교체(크로스페이드) */}
        <div className="hero__slider" aria-hidden="true">
          {heroSlides.map((s, i) => (
            <div
              className={`hero__slide ${i === slide ? 'is-active' : ''}`}
              key={s.src}
            >
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
        {/* 세로쓰기 시그니처 — 전통 현판처럼 오른쪽에 세로로 흐르는 문구 */}
        <p className="hero__vertical" aria-hidden="true">
          숯불에 굽는 백년의 정성
        </p>
        <div className="container hero__inner">
          <p className="hero__brand hero__stagger" style={{ '--d': '0ms' } as React.CSSProperties}>
            百年家業 · 삼대째 이어온 정성
          </p>
          <h1 className="hero__title hero__stagger" style={{ '--d': '150ms' } as React.CSSProperties}>
            삼대째 이어온 손맛,
            <br />
            백년가업 하늘땅
          </h1>
          <p className="hero__sub hero__stagger" style={{ '--d': '300ms' } as React.CSSProperties}>
            삼대째 이어온 고기에 대한 안목과 정성.{' '}
            <br className="br-desktop" />
            백년가업 하늘땅이 가족의 식탁 위에 정직한 숯불갈비 한 상을 올립니다.
          </p>
          <div className="hero__actions hero__stagger" style={{ '--d': '450ms' } as React.CSSProperties}>
            <Link to="/menu" className="btn btn--gold">
              메뉴 보기
            </Link>
            <Link to="/reservation" className="btn btn--outline-light">
              예약 문의
            </Link>
            <Link to="/location" className="btn btn--outline-light">
              오시는 길
            </Link>
          </div>
        </div>
        {/* 슬라이드 인디케이터 */}
        <div className="hero__dots" role="tablist" aria-label="히어로 이미지 선택">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={`hero__dot ${i === slide ? 'is-active' : ''}`}
              aria-label={`${i + 1}번째 이미지`}
              aria-selected={i === slide}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
        {/* 스크롤 인디케이터 — 아래로 흐르는 금색 선 */}
        <div className="hero__scroll" aria-hidden="true">
          SCROLL
        </div>
      </section>

      {/* Interlude — 브랜드 문장 하나로 쉬어가는 구간 */}
      <section className="interlude">
        <div className="container interlude__inner">
          <BrandSeal className="interlude__seal" label="백년가업 낙관" />
          <p className="interlude__line">
            고기를 대하는 마음이
            <br className="br-desktop" /> 삼대를 이었습니다
          </p>
          <p className="interlude__caption">百年家業 · 하늘땅</p>
        </div>
      </section>

      {/* Brand Highlight */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="BRAND"
            title="하늘땅이 신뢰받는 이유"
            description="정육에서 시작해 숯불로 완성하는, 백년가업 하늘땅의 네 가지 약속입니다."
          />
          <div className="grid grid--4">
            {highlights.map((h, i) => (
              <article className="highlight-card" key={h.title}>
                <span className="highlight-card__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="highlight-card__seal" aria-label={h.sealLabel}>
                  {h.seal}
                </span>
                <h3>{h.title}</h3>
                <span className="highlight-card__divider" aria-hidden="true" />
                <p>{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Band — 화면 가득 숯불 이미지 위로 콘텐츠가 흐르는 구간 */}
      <section
        className="parallax-band"
        role="img"
        aria-label="숯불 위에서 구워지는 양념갈비"
      >
        <div className="container parallax-band__inner">
          <p className="parallax-band__eyebrow">CHARCOAL</p>
          <p className="parallax-band__line">
            잘 고른 고기와 잘 피운 숯불,
            <br />
            맛은 그 사이에서 완성됩니다
          </p>
        </div>
      </section>

      {/* Signature Menu Preview */}
      <section className="section section--beige">
        <div className="container">
          <SectionHeading
            eyebrow="SIGNATURE"
            title="하늘땅 대표 메뉴"
            description="정성껏 손질한 원육에 깊은 양념, 숯불향으로 완성한 하늘땅의 시그니처입니다."
          />
          <div className="grid grid--4">
            {signatureMenus.map((menu) => (
              <article className="menu-card" key={menu.id}>
                <ImagePlaceholder
                  src={menu.image}
                  label={menu.imageLabel ?? `${menu.name} 사진`}
                  ratio="4 / 3"
                />
                <div className="menu-card__body">
                  <h3>{menu.name}</h3>
                  {menu.portion && <p className="menu-card__portion">{menu.portion}</p>}
                  <p className="menu-card__price">{formatPrice(menu.price)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section__more">
            <Link to="/menu" className="btn btn--brown">
              전체 메뉴 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Butchery Preview */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="BUTCHERY"
            title="하늘땅의 맛은 정육에서 시작됩니다"
            description="정육점 운영 기반의 원육 이해와 자체 육가공 노하우가 하늘땅 갈비의 품질을 만듭니다."
            onDark
          />
          <ol className="process">
            {processSteps.map((step, i) => (
              <li className="process__step" key={step}>
                <span className="process__num">{i + 1}</span>
                <span className="process__label">{step}</span>
              </li>
            ))}
          </ol>
          <div className="grid grid--2 butchery-preview__images">
            <ImagePlaceholder
              src="/images/butchery/showcase.jpg"
              label="정육 쇼케이스 이미지 자리"
              ratio="16 / 9"
            />
            <ImagePlaceholder
              src="/images/butchery/processing.jpg"
              label="육가공 이미지 자리"
              ratio="16 / 9"
            />
          </div>
          <div className="section__more">
            <Link to="/butchery" className="btn btn--outline-gold">
              정육·육가공 이야기 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Space Preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="SPACE"
            title="편안하게 머무는 공간"
            description="가족 외식부터 단체 회식, 접대 자리까지. 모임의 성격에 맞는 공간을 준비했습니다."
          />
          <div className="space-preview">
            {spaces.map((s) => (
              <figure className="space-preview__item" key={s.title}>
                <ImagePlaceholder src={s.image} label={s.label} ratio="1 / 1" />
                <figcaption>{s.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="section__more">
            <Link to="/space" className="btn btn--brown">
              공간 안내 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <CtaBanner
        title="가족 모임과 단체 회식은 하늘땅에서"
        description="전화 예약, 단체 문의, 카카오톡 문의로 편안하게 준비해 드립니다."
      />

      {/* Location Preview */}
      <section className="section section--beige">
        <div className="container">
          <SectionHeading eyebrow="LOCATION" title="오시는 길" />
          <div className="location-preview">
            <div className="map-embed">
              <iframe
                src={store.mapEmbedUrl}
                title="백년가업 하늘땅 본점 위치 지도"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="location-preview__info">
              <h3>{store.storeName}</h3>
              <p className="location-preview__addr">{store.address}</p>
              <ul className="location-preview__notes">
                {store.directions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <div className="location-preview__actions">
                <a
                  className="btn btn--brown btn--sm"
                  href={store.naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버지도 보기
                </a>
                <a
                  className="btn btn--brown btn--sm"
                  href={store.kakaoMapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  카카오맵 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
