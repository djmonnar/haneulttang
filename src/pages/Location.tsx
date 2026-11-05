import { CarFront, Clock3, MapPin, Navigation, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import BusinessStatus from '../components/BusinessStatus'
import NaverMap from '../components/NaverMap'
import { store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Location() {
  usePageMeta(
    '백년가업 하늘땅 위치·영업시간·주차',
    `${store.address} 백년가업 하늘땅 본점. 매일 11시부터 21시 30분까지 운영합니다. ${store.parking}.`,
  )

  return (
    <>
      <PageHero eyebrow="LOCATION" title="오시는 길" description="진해구 병암로 49, 전용 주차장을 갖춘 하늘땅 본점" />
      <section className="section">
        <div className="container location-page">
          <NaverMap tall />
          <div className="location-page__panel">
            <BusinessStatus />
            <p className="section-kicker">{store.storeName}</p>
            <h2>{store.address}</h2>
            <p className="location-page__lot">지번 {store.lotAddress}</p>
            <dl>
              <div><dt><Navigation aria-hidden="true" size={19} /> 위치 안내</dt><dd>{store.locationGuide}</dd></div>
              <div><dt><Clock3 aria-hidden="true" size={19} /> 영업시간</dt><dd>매일 11:00-21:30<br />브레이크타임 15:00-17:00<br />라스트오더 20:00</dd></div>
              <div><dt><CarFront aria-hidden="true" size={19} /> 주차</dt><dd>{store.parking}</dd></div>
              <div><dt><Phone aria-hidden="true" size={19} /> 전화</dt><dd><a href={store.telLink}>{store.phone}</a></dd></div>
            </dl>
            <p className="location-page__note">{store.visitNote}</p>
            <div className="location-page__actions"><a className="btn btn--brown" href={store.naverMapUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" size={18} /> 네이버지도</a><a className="btn btn--outline-brown" href={store.kakaoMapUrl} target="_blank" rel="noreferrer">카카오맵</a><a className="btn btn--wine" href={store.telLink}><Phone aria-hidden="true" size={18} /> 전화하기</a></div>
          </div>
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container">
          <SectionHeading eyebrow="PARKING" title={`전용 주차장 ${store.parkingMinimumSpaces}대 이상`} description="매장 앞 도로변 흰 선 구간에도 주차하실 수 있습니다." />
          <img className="parking-wide" src="/images/hero/exterior.jpg" alt="백년가업 하늘땅 본점 외관과 매장 앞 주차장" width="1920" height="1280" loading="lazy" />
        </div>
      </section>
    </>
  )
}
