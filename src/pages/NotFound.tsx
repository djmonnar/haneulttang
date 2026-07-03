import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta(
    '페이지를 찾을 수 없습니다 | 백년가업 하늘땅',
    '요청하신 페이지를 찾을 수 없습니다. 백년가업 하늘땅 홈으로 이동해 주세요.',
  )

  return (
    <section className="not-found">
      <div className="container">
        <p className="not-found__code">404</p>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p className="not-found__desc">
          주소가 잘못되었거나 삭제된 페이지입니다. 아래 버튼으로 이동해 주세요.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--gold">
            홈으로 가기
          </Link>
          <Link to="/menu" className="btn btn--outline-light">
            메뉴 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
