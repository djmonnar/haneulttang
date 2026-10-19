import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import { store } from '../data/store'

interface LegalProps {
  type: 'privacy' | 'terms'
}

export default function Legal({ type }: LegalProps) {
  const privacy = type === 'privacy'
  const title = privacy ? '개인정보처리방침' : '이용약관'
  usePageMeta(`${title} | ${store.brandName}`, `${store.brandName} 공식 홈페이지 ${title} 안내입니다.`)

  return (
    <>
      <PageHero eyebrow="POLICY" title={title} description="공식 홈페이지 이용 안내" />
      <section className="section">
        <div className="container container--narrow legal-copy">
          {privacy ? (
            <>
              <h2>개인정보 안내</h2>
              <p>현재 이 홈페이지는 회원가입, 온라인 결제, 개인정보 수집 기능을 운영하지 않습니다.</p>
              <p>전화 문의 시 제공되는 정보는 방문 안내와 상담을 위해서만 사용됩니다.</p>
            </>
          ) : (
            <>
              <h2>홈페이지 이용 안내</h2>
              <p>홈페이지의 메뉴, 가격, 영업시간은 매장 운영 상황에 따라 변경될 수 있습니다.</p>
              <p>온라인 좌석 예약은 네이버 예약을 이용해 주세요. 단체 이용 상담은 매장 전화 {store.phone}로 문의하실 수 있습니다.</p>
            </>
          )}
          <p className="legal-copy__date">시행일: 2026년 7월 10일</p>
        </div>
      </section>
    </>
  )
}
