import { CalendarDays, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { store } from '../data/store'

interface Props {
  title?: string
  description?: string
}

export default function CtaBanner({
  title = '소중한 자리, 미리 준비해 드립니다',
  description = '가족 외식과 단체 회식은 방문 전 전화로 문의해 주세요.',
}: Props) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <p className="cta-banner__eyebrow">RESERVATION</p>
          <h2 className="cta-banner__title">{title}</h2>
          <p className="cta-banner__desc">{description}</p>
        </div>
        <div className="cta-banner__actions">
          <a className="btn btn--ivory" href={store.telLink}>
            <Phone aria-hidden="true" size={18} /> 전화 예약
          </a>
          <Link className="btn btn--outline-light" to="/reservation">
            <CalendarDays aria-hidden="true" size={18} /> 예약 안내
          </Link>
          <Link className="btn btn--outline-light" to="/location">
            <MapPin aria-hidden="true" size={18} /> 오시는 길
          </Link>
        </div>
      </div>
    </section>
  )
}
