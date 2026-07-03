import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import { store } from '../data/store'

const infoRows = [
  { label: '주소', value: store.address },
  { label: '영업시간', value: store.hours },
  { label: '전화번호', value: store.phone },
  { label: '주차 안내', value: store.parking },
]

export default function Location() {
  usePageMeta(
    '오시는 길 | 백년가업 하늘땅 본점',
    '경남 창원시 진해구 병암로 49 백년가업 하늘땅 본점. 영업시간, 주차 안내, 네이버지도·카카오맵 길찾기를 안내합니다.',
  )

  return (
    <>
      <PageHero
        eyebrow="LOCATION"
        title="오시는 길"
        description="백년가업 하늘땅 본점으로 오시는 길을 안내해 드립니다."
      />

      <section className="section">
        <div className="container">
          <div className="location-page">
            <div className="map-embed map-embed--tall">
              <iframe
                src={store.mapEmbedUrl}
                title="백년가업 하늘땅 본점 위치 지도"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="location-page__info">
              <h2 className="location-page__name">{store.storeName}</h2>
              <dl className="info-table">
                {infoRows.map((row) => (
                  <div className="info-table__row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="location-page__actions">
                <a
                  className="btn btn--brown"
                  href={store.naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버지도 보기
                </a>
                <a
                  className="btn btn--brown"
                  href={store.kakaoMapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  카카오맵 보기
                </a>
                <a className="btn btn--gold" href={`tel:${store.phone}`}>
                  전화하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container container--narrow">
          <SectionHeading eyebrow="GUIDE" title="주변 안내" />
          <ul className="check-list check-list--center">
            {store.directions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="방문 전 예약을 권장드립니다"
        description="가족 외식, 단체 방문 시 미리 연락 주시면 편안하게 준비해 드립니다."
      />
    </>
  )
}
