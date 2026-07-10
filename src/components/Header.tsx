import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import BrandSeal from './BrandSeal'
import { store } from '../data/store'

const navItems = [
  { to: '/brand', label: '하늘땅 이야기' },
  { to: '/menu', label: '메뉴' },
  { to: '/space', label: '공간' },
  { to: '/standards', label: '하늘땅의 기준' },
  { to: '/gift', label: '선물세트' },
  { to: '/location', label: '오시는 길' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className={`header ${scrolled || open || pathname !== '/' ? 'header--solid' : ''}`}>
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
          <Link to="/reservation" className="btn btn--wine btn--sm header__cta">
            예약 문의
          </Link>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`header__drawer ${open ? 'header__drawer--open' : ''}`}
        aria-label="모바일 메뉴"
        aria-hidden={!open}
      >
        <div className="container header__drawer-inner">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  tabIndex={open ? 0 : -1}
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
          </ul>
          <a className="header__drawer-call" href={store.telLink} tabIndex={open ? 0 : -1}>
            <Phone aria-hidden="true" size={19} />
            전화 예약 {store.phone}
          </a>
        </div>
      </nav>
    </header>
  )
}
