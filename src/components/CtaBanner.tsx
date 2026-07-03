import { Link } from 'react-router-dom'
import { store } from '../data/store'

interface Props {
  title?: string
  description?: string
}

/** 페이지 하단 공통 예약 CTA 배너 */
export default function CtaBanner({
  title = '예약 및 문의',
  description = '가족 모임과 단체 회식, 방문 전 미리 문의해 주시면 편안하게 준비해 드립니다.',
}: Props) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2 className="cta-banner__title">{title}</h2>
          <p className="cta-banner__desc">{description}</p>
        </div>
        <div className="cta-banner__actions">
          <a className="btn btn--gold" href={`tel:${store.phone}`}>
            전화 예약
          </a>
          <Link className="btn btn--outline-light" to="/reservation">
            단체 문의
          </Link>
          <a
            className="btn btn--outline-light"
            href={store.kakaoChannelUrl}
            target="_blank"
            rel="noreferrer"
          >
            카카오톡 문의
          </a>
        </div>
      </div>
    </section>
  )
}
