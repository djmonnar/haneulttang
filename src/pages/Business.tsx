import { useState, type FormEvent } from 'react'
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
    desc: '직영점 및 가맹 관련 문의를 받고 있으며, 내부 검토 후 협의 가능합니다.',
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
    '하늘땅과 함께할 브랜드 파트너를 기다립니다. 단체 선물세트, 기업 제휴, 직영점·가맹 관련, 식자재·육가공 공급, 브랜드 협업 문의를 안내합니다.',
  )

  const [submitted, setSubmitted] = useState(false)

  // 현재는 UI만 제공 — 추후 메일 발송 또는 폼 서비스 연동 지점
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="BUSINESS"
        title="브랜드 문의"
        description="하늘땅과 함께할 브랜드 파트너를 기다립니다"
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="ABOUT" title="정육 기반 브랜드의 가능성" />
          <p className="lead-text">
            하늘땅은 정육 기반 숯불갈비 브랜드로서, 매장 운영과 육가공,
            선물세트, 향후 직영점 및 브랜드 확장 가능성을 검토하고 있습니다.
            아래 유형의 문의를 협의 가능한 수준에서 열어두고 있습니다.
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
            eyebrow="FORM"
            title="브랜드 문의 남기기"
            description="문의 내용을 확인 후 담당자가 연락드립니다."
          />
          {submitted ? (
            <div className="form-done" role="status">
              <h3>문의가 접수되었습니다</h3>
              <p>내부 검토 후 담당자가 연락드리겠습니다. 감사합니다.</p>
              <p className="form-done__note">
                ※ 현재 데모 화면입니다. 실제 접수 기능은 추후 연동됩니다.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__row form__row--half">
                <div>
                  <label htmlFor="biz-company">회사명</label>
                  <input id="biz-company" name="company" type="text" required placeholder="회사명 또는 단체명" />
                </div>
                <div>
                  <label htmlFor="biz-name">담당자명</label>
                  <input id="biz-name" name="name" type="text" required placeholder="담당자 성함" />
                </div>
              </div>
              <div className="form__row">
                <label htmlFor="biz-phone">연락처</label>
                <input id="biz-phone" name="phone" type="tel" required placeholder="연락 가능한 번호 또는 이메일" />
              </div>
              <div className="form__row">
                <label htmlFor="biz-type">문의 유형</label>
                <select id="biz-type" name="type" required defaultValue="">
                  <option value="" disabled>
                    문의 유형을 선택해 주세요
                  </option>
                  {inquiryTypes.map((t) => (
                    <option key={t.title} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form__row">
                <label htmlFor="biz-message">문의 내용</label>
                <textarea
                  id="biz-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="제안 내용, 규모, 일정 등을 자유롭게 남겨주세요"
                />
              </div>
              <button type="submit" className="btn btn--gold btn--full">
                브랜드 문의 보내기
              </button>
            </form>
          )}
          <p className="menu-board__note">
            직영점·가맹 관련 문의는 현재 확정된 모집이 아닌, 협의 가능성을
            검토하는 단계로 진행됩니다. 문의처: {store.phone}
          </p>
        </div>
      </section>
    </>
  )
}
