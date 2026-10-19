import { ArrowRight, CalendarCheck, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import BusinessStatus from '../components/BusinessStatus'
import NaverMap from '../components/NaverMap'
import { homeFaqItems } from '../data/faqs'
import { formatPrice, lunchMenus, signatureMenus } from '../data/menu'
import { store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'
import './Home.css'

export default function Home() {
  usePageMeta(
    '백년가업 하늘땅 본점 | 진해 숯불갈비',
    '진해 경화동에서 2대째 이어온 숯불갈비집, 백년가업 하늘땅 본점입니다. 돼지갈비, 소갈비, 한우 불고기 메뉴와 가격, 예약, 영업시간, 주차를 안내합니다.',
    '/',
  )

  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="home-title">
        <img
          className="home-hero__photo"
          src="/images/hero/galbi-1.jpg"
          alt="하늘땅에서 반찬과 함께 차린 숯불 양념 돼지갈비"
          width="1280"
          height="853"
          fetchPriority="high"
        />
        <div className="container home-hero__content">
          <p className="home-hero__location">진해 경화동 · 숯불갈비</p>
          <h1 id="home-title"><span>백년가업</span>하늘땅</h1>
          <div className="home-hero__links">
            <Link to="/menu">메뉴 보기 <ArrowRight aria-hidden="true" size={20} /></Link>
            <a href={store.naverBookingUrl} target="_blank" rel="noreferrer">네이버 예약 <ArrowRight aria-hidden="true" size={20} /></a>
          </div>
        </div>
      </section>

      <div className="home-hours">
        <div className="container home-hours__inner">
          <BusinessStatus />
          <p>{store.hours}<span>브레이크타임 {store.openingHours.breakStart}-{store.openingHours.breakEnd}</span></p>
          <a href={store.telLink}><Phone aria-hidden="true" size={16} /> {store.phone}</a>
        </div>
      </div>

      <section className="home-section home-menu" aria-labelledby="home-menu-title">
        <div className="container">
          <div className="home-section__heading">
            <h2 id="home-menu-title">메뉴</h2>
            <Link className="home-link" to="/menu">전체 메뉴 <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
          <div className="home-menu__list">
            {signatureMenus.map((menu) => (
              <article className="home-menu__item" key={menu.id}>
                <Link to="/menu" className="home-menu__photo" aria-label={`${menu.name} 메뉴 안내`}>
                  <img src={menu.image} alt={menu.imageLabel} width="1280" height="853" loading="lazy" />
                </Link>
                <div className="home-menu__name">
                  <h3>{menu.name}</h3>
                  <p>{formatPrice(menu.price)}</p>
                </div>
                <p className="home-menu__portion">{menu.portion}</p>
              </article>
            ))}
          </div>
          {lunchMenus.map((menu) => (
            <Link className="home-menu__lunch" to="/menu" key={menu.id}>
              <strong>{menu.name}</strong>
              <span>{formatPrice(menu.price)}</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section home-place" aria-labelledby="home-place-title">
        <div className="container">
          <div className="home-section__heading">
            <h2 id="home-place-title">매장 안내</h2>
            <Link className="home-link" to="/space">사진 더 보기 <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
          <div className="home-place__photos">
            <figure>
              <img src="/images/space/main-hall.jpg" alt="테이블 좌석과 숯불 배기 시설이 있는 하늘땅 홀" width="1600" height="1067" loading="lazy" />
              <figcaption>매장 내부</figcaption>
            </figure>
            <figure>
              <img src="/images/hero/exterior.jpg" alt="백년가업 하늘땅 본점 외관과 매장 앞 주차장" width="1920" height="1280" loading="lazy" />
              <figcaption>매장 입구와 주차장</figcaption>
            </figure>
          </div>
          <div className="home-place__info">
            <div className="home-place__story">
              <h3>하늘땅 이야기</h3>
              <p>하늘땅은 부모님이 하시던 갈비집을 이어 2대째 운영하고 있습니다.</p>
              <Link className="home-link" to="/brand">하늘땅 이야기 <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
            <div className="home-place__visit">
              <dl>
                <div><dt>좌석</dt><dd>가족석 · 단체석 · 룸</dd></div>
                <div><dt>주차</dt><dd>매장 앞 전용 주차장</dd></div>
              </dl>
              <p>단체로 방문하실 때는 미리 연락해 주세요.</p>
              <a className="home-link" href={store.telLink}><Phone aria-hidden="true" size={16} /> {store.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-faq" aria-labelledby="home-faq-title">
        <div className="container">
          <div className="home-section__heading">
            <h2 id="home-faq-title">자주 묻는 질문</h2>
            <Link className="home-link" to="/faq">전체 보기 <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
          <div className="faq-list faq-list--preview">
            {homeFaqItems.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <strong>{item.question}</strong>
                  <span className="faq-item__toggle" aria-hidden="true" />
                </summary>
                <div className="faq-item__answer"><span aria-hidden="true">A</span><p>{item.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-location" aria-labelledby="home-location-title">
        <div className="container">
          <div className="home-section__heading">
            <h2 id="home-location-title">오시는 길</h2>
            <Link className="home-link" to="/location">자세히 보기 <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
          <div className="home-location__layout">
            <NaverMap />
            <div className="home-location__info">
              <h3>{store.storeName}</h3>
              <p className="home-location__address">{store.address}</p>
              <p className="home-location__guide">{store.locationGuide}하세요.</p>
              <dl>
                <div><dt>영업시간</dt><dd>{store.hours}</dd></div>
                <div><dt>브레이크타임</dt><dd>{store.openingHours.breakStart}-{store.openingHours.breakEnd}</dd></div>
                <div><dt>라스트오더</dt><dd>{store.openingHours.lastOrder}</dd></div>
                <div><dt>전화</dt><dd><a href={store.telLink}>{store.phone}</a></dd></div>
              </dl>
              <div className="home-location__actions">
                <a href={store.naverBookingUrl} className="home-button" target="_blank" rel="noreferrer"><CalendarCheck aria-hidden="true" size={18} /> 네이버 예약</a>
                <a href={store.telLink} className="home-button home-button--outline"><Phone aria-hidden="true" size={18} /> 전화 문의</a>
              </div>
              <div className="home-location__map-links">
                <a href={store.naverMapUrl} target="_blank" rel="noreferrer">네이버지도 <ArrowRight aria-hidden="true" size={16} /></a>
                <a href={store.kakaoMapUrl} target="_blank" rel="noreferrer">카카오맵 <ArrowRight aria-hidden="true" size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
