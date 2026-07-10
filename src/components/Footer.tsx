import { Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandSeal from './BrandSeal'
import { store } from '../data/store'

const corporateLinks = [
  { to: '/business', label: '기업·브랜드 문의' },
  { to: '/news', label: '소식·공지' },
] as const

export default function Footer() {
  const socialLinks = Object.entries(store.socialLinks).filter(([, href]) => href)

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <BrandSeal className="footer__seal" />
            <p className="footer__logo">
              <span>백년가업</span> 하늘땅
            </p>
          </div>
          <p className="footer__slogan">{store.slogan}</p>
          {socialLinks.length > 0 && (
            <div className="footer__sns" aria-label="SNS 링크">
              {socialLinks.map(([name, href]) => (
                <a key={name} href={href ?? undefined} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer__contact">
          <h2>{store.storeName}</h2>
          <p><MapPin aria-hidden="true" size={17} /> {store.address}</p>
          <p><Phone aria-hidden="true" size={17} /> <a href={store.telLink}>{store.phone}</a></p>
          <p><Clock3 aria-hidden="true" size={17} /> 매일 11:00-21:30</p>
          <p className="footer__hours-detail">브레이크타임 15:00-17:00 · 라스트오더 20:00</p>
          <p>{store.parking}</p>
        </div>

        <div className="footer__links">
          {corporateLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          <Link to="/privacy">개인정보처리방침</Link>
          <Link to="/terms">이용약관</Link>
          <span>대표 {store.owner}</span>
          <span>사업자등록번호 {store.bizNumber}</span>
        </div>
      </div>
      <div className="footer__copy">
        <div className="container">
          <p>© {new Date().getFullYear()} {store.brandName}. All rights reserved.</p>
          <p>공식 홈페이지 하늘땅.com</p>
        </div>
      </div>
    </footer>
  )
}
