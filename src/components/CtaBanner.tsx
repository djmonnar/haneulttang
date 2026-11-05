import { CalendarCheck, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { store } from '../data/store'

interface Props {
  title?: string
  description?: string
}

export default function CtaBanner({
  title = '예약·문의',
  description = '예약은 네이버에서, 상담은 전화나 카카오톡으로 하실 수 있습니다.',
}: Props) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2 className="cta-banner__title">{title}</h2>
          <p className="cta-banner__desc">{description}</p>
        </div>
        <div className="cta-banner__actions">
          <a className="btn btn--ivory" href={store.naverBookingUrl} target="_blank" rel="noreferrer">
            <CalendarCheck aria-hidden="true" size={18} /> 네이버 예약
          </a>
          <a className="btn btn--outline-light" href={store.telLink}>
            <Phone aria-hidden="true" size={18} /> 전화 문의
          </a>
          {store.kakaoChannelUrl && (
            <a className="btn btn--outline-light" href={store.kakaoChannelUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} /> 카카오톡 상담
            </a>
          )}
          <Link className="btn btn--outline-light" to="/location">
            <MapPin aria-hidden="true" size={18} /> 오시는 길
          </Link>
        </div>
      </div>
    </section>
  )
}
