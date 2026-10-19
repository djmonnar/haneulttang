import { CalendarCheck, MapPin, Phone, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'
import { store } from '../data/store'

export default function MobileBottomBar() {
  return (
    <nav className="mobile-bar" aria-label="빠른 메뉴">
      <a href={store.telLink} className="mobile-bar__item mobile-bar__item--accent">
        <Phone aria-hidden="true" size={19} />
        <span>전화문의</span>
      </a>
      <a href={store.naverBookingUrl} target="_blank" rel="noreferrer" className="mobile-bar__item mobile-bar__item--booking">
        <CalendarCheck aria-hidden="true" size={19} />
        <span>네이버예약</span>
      </a>
      <a href={store.naverMapUrl} target="_blank" rel="noreferrer" className="mobile-bar__item">
        <MapPin aria-hidden="true" size={19} />
        <span>길찾기</span>
      </a>
      <Link to="/menu" className="mobile-bar__item">
        <UtensilsCrossed aria-hidden="true" size={19} />
        <span>메뉴보기</span>
      </Link>
    </nav>
  )
}
