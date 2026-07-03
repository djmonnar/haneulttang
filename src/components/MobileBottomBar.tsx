import { Link } from 'react-router-dom'
import { store } from '../data/store'

/** 모바일 하단 고정 바: 전화예약 / 길찾기 / 메뉴보기 */
export default function MobileBottomBar() {
  return (
    <nav className="mobile-bar" aria-label="빠른 메뉴">
      <a href={`tel:${store.phone}`} className="mobile-bar__item mobile-bar__item--accent">
        전화예약
      </a>
      <a
        href={store.naverMapUrl}
        target="_blank"
        rel="noreferrer"
        className="mobile-bar__item"
      >
        길찾기
      </a>
      <Link to="/menu" className="mobile-bar__item">
        메뉴보기
      </Link>
    </nav>
  )
}
