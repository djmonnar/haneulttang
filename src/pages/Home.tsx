import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'
import { signatureMenus, formatPrice } from '../data/menu'
import { store } from '../data/store'

const highlights = [
  {
    title: '월매출로 검증된 지역 갈비 브랜드',
    desc: '진해 지역에서 꾸준히 사랑받으며 실적으로 증명해온 숯불갈비 전문 브랜드입니다.',
  },
  {
    title: '정육점 기반의 원육 선별',
    desc: '정육점 운영 기반으로 원육을 직접 이해하고 선별해 늘 균일한 품질을 유지합니다.',
  },
  {
    title: '육가공 가능성을 갖춘 확장성',
    desc: '손질부터 양념·숙성까지 자체 육가공 역량으로 선물세트와 상품화까지 이어집니다.',
  },
  {
    title: '가족 외식과 단체 모임에 적합한 공간',
    desc: '가족 외식석, 단체석, 프라이빗 룸까지. 모임의 성격에 맞는 좌석을 준비했습니다.',
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

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          {/* 추후 public/images/hero.jpg 교체 시 자동 표시 */}
          <img
            src="/images/hero.jpg"
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div className="container hero__inner">
          <p className="hero__brand">百年家業 · 백년가업</p>
          <h1 className="hero__title">
            정육에서 시작되는
            <br />
            갈비의 품격
          </h1>
          <p className="hero__sub">
            백년가업 하늘땅은 정육 기반의 원육 선별과 육가공 노하우로,{' '}
            <br className="br-desktop" />
            가족 외식과 단체 모임에 어울리는 프리미엄 숯불갈비 다이닝을 완성합니다.
          </p>
          <div className="hero__actions">
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
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </article>
            ))}
          </div>
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
