import { NavLink } from 'react-router-dom'

const brandLinks = [
  { to: '/brand', label: '브랜드 소개', end: true },
  { to: '/brand/greeting', label: '인사말' },
]

export default function BrandSubnav() {
  return (
    <nav className="subnav" aria-label="브랜드 소개 하위 메뉴">
      <div className="container subnav__inner">
        {brandLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'subnav__link subnav__link--active' : 'subnav__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
