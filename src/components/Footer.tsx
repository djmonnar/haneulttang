import { Link } from 'react-router-dom'
import BrandSeal from './BrandSeal'
import { store } from '../data/store'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <BrandSeal className="footer__seal" />
          <p className="footer__logo">
            <span>백년가업</span> 하늘땅
          </p>
          <p className="footer__slogan">{store.slogan}</p>
          <div className="footer__sns" aria-label="SNS 링크">
            {/* SNS 계정 개설 후 href 교체 */}
            <a href="#" aria-label="인스타그램">
              Instagram
            </a>
            <a href="#" aria-label="네이버 블로그">
              Blog
            </a>
            <a href="#" aria-label="유튜브">
              YouTube
            </a>
          </div>
        </div>

        <div className="footer__info">
          <dl>
            <div>
              <dt>상호</dt>
              <dd>{store.storeName}</dd>
            </div>
            <div>
              <dt>주소</dt>
              <dd>경남 창원시 진해구 병암로 49</dd>
            </div>
            <div>
              <dt>전화번호</dt>
              <dd>{store.phone}</dd>
            </div>
            <div>
              <dt>대표자</dt>
              <dd>{store.owner}</dd>
            </div>
            <div>
              <dt>사업자등록번호</dt>
              <dd>{store.bizNumber}</dd>
            </div>
            <div>
              <dt>영업시간</dt>
              <dd>{store.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="footer__links">
          <Link to="/news">소식/공지</Link>
          <a href="#">개인정보처리방침</a>
          <a href="#">이용약관</a>
        </div>
      </div>
      <div className="footer__copy">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {store.brandName}. All rights reserved.
          </p>
          <p className="footer__credit">제작 : 짓마케팅 대표 서효승</p>
        </div>
      </div>
    </footer>
  )
}
