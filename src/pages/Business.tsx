import { MessageCircle, Phone } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { store } from '../data/store'

const inquiryTypes = [
  {
    title: '단체 선물세트 문의',
    desc: '임직원 선물, 거래처 답례품 등 대량 주문 구성을 협의해 드립니다.',
  },
  {
    title: '기업 제휴 문의',
    desc: '기업 복지·제휴 프로그램 등 다양한 협력 방안을 검토할 수 있습니다.',
  },
  {
    title: '직영점·가맹 관련 문의',
    desc: '직영점 및 가맹 관련 제안은 내부 검토 후 협의 가능합니다.',
  },
  {
    title: '식자재·육가공 공급 문의',
    desc: '정육 기반 양념육·식자재 공급 관련 문의를 검토할 수 있습니다.',
  },
  {
    title: '브랜드 협업 문의',
    desc: '콘텐츠, 지역 행사, 공동 프로모션 등 브랜드 협업 제안을 환영합니다.',
  },
]

export default function Business() {
  usePageMeta(
    '브랜드 문의 | 백년가업 하늘땅',
    '단체 선물세트, 기업 제휴, 직영점·가맹 관련, 식자재·육가공 공급, 협업 제안은 전화나 카카오톡으로 문의해 주세요.',
  )

  return (
    <>
      <PageHero
        eyebrow="BUSINESS"
        title="브랜드 문의"
        description="단체 주문과 제휴 제안을 전화·카카오톡으로 받습니다."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading title="단체 주문·제휴 문의" />
          <p className="lead-text">
            하늘땅은 매장 운영과 육가공, 선물세트 관련 제안을 받고 있습니다.
            직영점·가맹을 포함한 브랜드 확장은 검토 중이며 관련 제안은 협의 가능합니다.
          </p>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <SectionHeading eyebrow="INQUIRY" title="문의 유형" />
          <div className="grid grid--3">
            {inquiryTypes.map((t) => (
              <article className="strength-card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            title="카카오톡·전화 문의"
            description="문의 내용과 수량, 일정을 알려주세요."
          />
          <div className="reservation-actions">
            {store.kakaoChannelUrl && <a className="btn btn--kakao btn--full" href={store.kakaoChannelUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={20} /> 카카오톡 상담</a>}
            <a className="btn btn--outline-brown btn--full" href={store.telLink}><Phone aria-hidden="true" size={20} /> 전화 문의 {store.phone}</a>
          </div>
          <p className="menu-board__note">
            직영점·가맹 관련 문의는 확정된 모집이 아니라 협의 가능성을 검토하는 단계입니다.
            문의처: {store.phone}
          </p>
        </div>
      </section>
    </>
  )
}
