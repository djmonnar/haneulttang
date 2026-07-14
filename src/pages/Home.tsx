import {
  ArrowRight,
  CalendarCheck,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Phone,
  Quote,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BusinessStatus from '../components/BusinessStatus'
import SectionHeading from '../components/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { giftItems } from '../data/gifts'
import { formatPrice, signatureMenus } from '../data/menu'
import { store } from '../data/store'
import {
  brandStoryParagraphs,
  reviewSummaries,
  standards,
  trustHighlights,
  visitOccasions,
} from '../data/content'

export default function Home() {
  usePageMeta(
    '백년가업 하늘땅 본점 | 진해 숯불 양념갈비',
    '2대를 이어온 진해 숯불갈비 전문점 백년가업 하늘땅 본점. 숯불 양념 돼지갈비, 소갈비, 한우 불고기와 쾌적한 신축 매장, 단체석 및 전용 주차장을 만나보세요.',
    '/',
  )

  return (
    <>
      <section className="hero">
        <img
          className="hero__image"
          src="/images/hero/galbi-1.jpg"
          alt="참숯 위에서 구워지는 하늘땅 양념 돼지갈비"
          width="1600"
          height="1067"
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="hero__eyebrow">백년가업 하늘땅 · 진해 본점</p>
          <h1 className="hero__title">
            <span>2대를 이어온 맛의 깊이,</span>
            <span>새로워진 공간의 품격</span>
          </h1>
          <p className="hero__sub">
            엄선한 원육과 정성껏 만든 양념, 참숯의 깊은 향.
            <br className="br-desktop" /> 부모님의 손맛과 철학을 이어 변함없는 숯불구이의 기준을 지켜갑니다.
          </p>
          <div className="hero__actions">
            <Link to="/menu" className="btn btn--ivory">
              메뉴 보기 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a href={store.telLink} className="btn btn--wine">
              <Phone aria-hidden="true" size={18} /> 전화 예약
            </a>
            <Link to="/location" className="btn btn--outline-light">
              <MapPin aria-hidden="true" size={18} /> 오시는 길
            </Link>
          </div>
        </div>
        <div className="hero-info">
          <div className="container hero-info__inner">
            <BusinessStatus />
            <dl className="hero-info__hours">
              <div><dt>영업시간</dt><dd>매일 11:00-21:30</dd></div>
              <div><dt>브레이크타임</dt><dd>15:00-17:00</dd></div>
              <div><dt>라스트오더</dt><dd>20:00</dd></div>
              <div><dt>주차</dt><dd>전용 주차장</dd></div>
              <div><dt>전화</dt><dd><a href={store.telLink}>{store.phone}</a></dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-labelledby="trust-title">
        <div className="container">
          <p className="trust-strip__eyebrow" id="trust-title">한눈에 보는 하늘땅</p>
          <div className="trust-strip__grid">
            {trustHighlights.map((item, index) => (
              <article className="trust-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{item.title}</h2><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 브랜드 키워드 마르퀴 — 옆으로 흐르는 띠 */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((n) => (
            <ul key={n}>
              <li>숯불 양념갈비</li>
              <li>百年家業</li>
              <li>2대째 이어온 손맛</li>
              <li>진해 갈비명가</li>
              <li>참숯의 깊은 향</li>
              <li>하늘땅</li>
            </ul>
          ))}
        </div>
      </div>

      <section className="section story-section">
        <div className="container story-layout">
          <figure className="story-visual">
            <img
              src="/images/hero/exterior.jpg"
              alt="산을 배경으로 새롭게 신축한 백년가업 하늘땅 본점 외관"
              width="1600"
              height="1067"
              loading="lazy"
            />
            <figcaption>
              <span>2대째</span>
              <strong>부모님의 손맛과 철학을 이어갑니다</strong>
            </figcaption>
          </figure>
          <div className="story-copy">
            <p className="section-kicker">OUR STORY</p>
            <h2>한 끼의 맛이<br />가업이 되기까지</h2>
            <blockquote>“2대를 이어온 손맛과 철학 위에,<br />새로워진 공간의 품격을 더했습니다.”</blockquote>
            <p>{brandStoryParagraphs[0]}</p>
            <p>{brandStoryParagraphs[1]}</p>
            <Link className="text-link" to="/brand">
              하늘땅 이야기 더 보기 <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory" id="signature-menu">
        <div className="container">
          <SectionHeading
            eyebrow="SIGNATURE"
            title="세 가지 시그니처"
            description="오랜 시간 사랑받아 온 하늘땅의 숯불구이를 소개합니다."
          />
          <div className="signature-grid">
            {signatureMenus.map((menu, index) => (
              <article className="signature-card" key={menu.id}>
                <div className="signature-card__image">
                  <img src={menu.image} alt={menu.imageLabel} width="1600" height="1067" loading="lazy" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="signature-card__body">
                  <div className="signature-card__heading">
                    <h3>{menu.name}</h3>
                    <p>{formatPrice(menu.price)}</p>
                  </div>
                  <p className="signature-card__portion">{menu.portion}</p>
                  <p>{menu.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section__more">
            <Link to="/menu" className="btn btn--brown">전체 메뉴 보기 <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section standards-section">
        <div className="container">
          <SectionHeading
            eyebrow="OUR STANDARD"
            title="하늘땅의 다섯 가지 기준"
            description="원육부터 식탁 위의 작은 반찬까지, 변하지 않는 기준으로 준비합니다."
          />
          <div className="standards-list">
            {standards.map((item, index) => (
              <Link className="standard-item" to="/standards" key={item.id}>
                <img src={item.image.src} alt={item.image.alt} width="1600" height="1067" loading="lazy" />
                <div className="standard-item__veil" aria-hidden="true" />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--charcoal space-feature">
        <div className="container">
          <div className="space-feature__heading">
            <div>
              <p className="section-kicker">NEW SPACE</p>
              <h2>맛의 깊이는 그대로,<br />식사의 편안함은 한층 더</h2>
            </div>
            <p>새롭게 신축한 하늘땅 본점은 쾌적하고 위생적인 식사 환경과 현대적인 공조 시스템을 갖추었습니다.</p>
          </div>
          <div className="space-feature__media">
            <img src="/images/space/main-hall.jpg" alt="현대적인 공조 시설을 갖춘 하늘땅 메인 홀" width="1600" height="1067" loading="lazy" />
            <ul>
              <li><Check aria-hidden="true" size={18} /> 새롭게 신축한 매장</li>
              <li><Check aria-hidden="true" size={18} /> 쾌적하고 위생적인 식사 환경</li>
              <li><Check aria-hidden="true" size={18} /> 현대적인 공조 시스템</li>
              <li><UsersRound aria-hidden="true" size={18} /> 가족석 · 단체석 · 프라이빗 룸</li>
              <li><CarFront aria-hidden="true" size={18} /> 전용 주차장</li>
            </ul>
          </div>
          <div className="section__more section__more--left">
            <Link to="/space" className="btn btn--ivory">공간 자세히 보기 <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section occasion-section">
        <div className="container">
          <SectionHeading
            eyebrow="FOR YOUR MOMENT"
            title="어떤 자리로 오시나요?"
            description="모임의 성격에 맞는 편안한 자리를 준비해 드립니다."
          />
          <div className="occasion-grid">
            {visitOccasions.map((item, index) => (
              <article className="occasion-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={store.telLink} aria-label={`${item.title} 전화 예약`}><Phone aria-hidden="true" size={17} /> 예약 문의</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gift-feature">
        <img src="/images/gift/yangnyeom-set.jpg" alt="정성껏 포장한 하늘땅 양념갈비 선물세트" width="1600" height="1067" loading="lazy" />
        <div className="gift-feature__veil" aria-hidden="true" />
        <div className="container gift-feature__inner">
          <p className="section-kicker">GIFT SET</p>
          <h2>하늘땅의 정성을<br />소중한 분께 전하세요</h2>
          <ul>{giftItems.map((item) => <li key={item.id}>{item.name}<span>{item.id === 'corporate-gift' ? '대량 주문 문의' : '구성 상담'}</span></li>)}</ul>
          <div className="gift-feature__actions">
            <Link to="/gift" className="btn btn--ivory">선물세트 보기</Link>
            <a href={store.telLink} className="btn btn--outline-light"><Phone aria-hidden="true" size={18} /> 전화 주문 문의</a>
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container reviews-layout">
          <div className="reviews-heading">
            <p className="section-kicker">GUEST VOICES</p>
            <h2>다녀가신 분들이<br />기억하는 하늘땅</h2>
            <p>방문 후기에서 자주 전해지는 이야기를 짧게 정리했습니다.</p>
            {store.naverReviewUrl ? (
              <a className="text-link" href={store.naverReviewUrl} target="_blank" rel="noreferrer">네이버에서 더 많은 후기 보기 <ArrowRight aria-hidden="true" size={17} /></a>
            ) : (
              <span className="text-link text-link--disabled" aria-disabled="true">네이버 후기 링크 준비 중</span>
            )}
          </div>
          <div className="review-list">
            {reviewSummaries.map((review) => (
              <blockquote key={review}><Quote aria-hidden="true" size={21} /><p>{review}</p></blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading eyebrow="LOCATION" title="오시는 길" description="진해 경화동, 스타벅스와 탑텐 사이에서 우회전하세요." />
          <div className="location-home">
            <div className="map-embed">
              <iframe src={store.mapEmbedUrl} title="백년가업 하늘땅 본점 위치 지도" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div className="location-home__info">
              <p className="location-home__eyebrow">{store.storeName}</p>
              <h2>{store.address}</h2>
              <p>{store.lotAddress}</p>
              <dl>
                <div><dt><Clock3 aria-hidden="true" size={18} /> 영업</dt><dd>매일 11:00-21:30<br />브레이크타임 15:00-17:00<br />라스트오더 20:00</dd></div>
                <div><dt><CarFront aria-hidden="true" size={18} /> 주차</dt><dd>{store.parking}</dd></div>
                <div><dt><CalendarCheck aria-hidden="true" size={18} /> 안내</dt><dd>{store.visitNote}</dd></div>
              </dl>
              <div className="location-home__actions">
                <a href={store.naverMapUrl} target="_blank" rel="noreferrer" className="btn btn--brown">네이버지도</a>
                <a href={store.kakaoMapUrl} target="_blank" rel="noreferrer" className="btn btn--outline-brown">카카오맵</a>
                <a href={store.telLink} className="btn btn--wine"><Phone aria-hidden="true" size={18} /> 전화하기</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
