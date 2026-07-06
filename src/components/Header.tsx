import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import BrandSeal from './BrandSeal'
import { store } from '../data/store'

const navItems = [
  { to: '/brand', label: '하늘땅 이야기' },
  { to: '/menu', label: '메뉴 안내' },
  { to: '/space', label: '공간 안내' },
  { to: '/butchery', label: '정육·육가공' },
  { to: '/gift', label: '선물세트' },
  { to: '/reservation', label: '단체예약' },
  { to: '/business', label: '브랜드 문의' },
  { to: '/location', label: '오시는 길' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 라우트 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="백년가업 하늘땅 홈으로">
          <BrandSeal className="header__seal" />
          <span className="header__logo-text">
            <span className="header__logo-top">백년가업</span>
            <span className="header__logo-main">하늘땅</span>
          </span>
        </Link>

        <nav className="header__nav" aria-label="주 메뉴">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'header__link header__link--active' : 'header__link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__right">
          <Link to="/reservation" className="btn btn--gold btn--sm header__cta">
            예약 문의
          </Link>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`header__burger-bar ${open ? 'is-open' : ''}`} />
          </button>
        </div>
      </div>

      {/* 모바일 드로어 */}
      <nav
        className={`header__drawer ${open ? 'header__drawer--open' : ''}`}
        aria-label="모바일 메뉴"
        aria-hidden={!open}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'header__drawer-link header__drawer-link--active'
                    : 'header__drawer-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a className="header__drawer-link" href={`tel:${store.phone}`}>
              전화 예약
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
