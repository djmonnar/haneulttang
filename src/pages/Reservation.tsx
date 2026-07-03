import { useState, type FormEvent } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { store } from '../data/store'

const reservationTypes = [
  '가족 외식 예약',
  '단체 회식 예약',
  '프라이빗 룸 문의',
  '부모님 모임',
  '기업 회식',
  '선물세트 단체 문의',
]

const guideItems = [
  { title: '전화 예약', desc: `${store.phone}로 전화 주시면 가장 빠르게 예약하실 수 있습니다.` },
  { title: '카카오톡 문의', desc: '카카오톡 채널로 편하게 문의를 남겨주세요.' },
  { title: '단체 예약 문의', desc: '10인 이상 단체는 아래 문의 양식을 이용해 주세요.' },
  { title: '방문 전 문의 권장', desc: '주말·명절 등 방문객이 많은 시기에는 사전 문의를 권장드립니다.' },
]

export default function Reservation() {
  usePageMeta(
    '단체예약 | 백년가업 하늘땅 본점',
    '가족 모임과 단체 회식은 하늘땅에서 편안하게. 가족 외식, 단체 회식, 프라이빗 룸, 기업 회식 예약 문의를 안내합니다.',
  )

  const [submitted, setSubmitted] = useState(false)

  // 현재는 UI만 제공 — 추후 카카오톡 채널 링크 또는 네이버 예약 연동 지점
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="RESERVATION"
        title="단체예약"
        description="가족 모임과 단체 회식은 하늘땅에서 편안하게"
      />

      {/* 예약 유형 */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="TYPE"
            title="예약 유형"
            description="모임의 성격에 맞는 예약 유형을 선택해 문의해 주세요."
          />
          <ul className="occasion-list">
            {reservationTypes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 예약 안내 */}
      <section className="section section--beige">
        <div className="container">
          <SectionHeading eyebrow="GUIDE" title="예약 안내" />
          <div className="grid grid--4">
            {guideItems.map((g) => (
              <article className="guide-card" key={g.title}>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 예약 폼 */}
      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="FORM"
            title="예약 문의 남기기"
            description="문의를 남겨주시면 확인 후 연락드립니다. 급하신 경우 전화 예약을 이용해 주세요."
          />
          {submitted ? (
            <div className="form-done" role="status">
              <h3>문의가 접수되었습니다</h3>
              <p>
                빠른 시일 내에 연락드리겠습니다. 급하신 경우{' '}
                <a href={`tel:${store.phone}`}>{store.phone}</a>로 전화 주세요.
              </p>
              <p className="form-done__note">
                ※ 현재 데모 화면입니다. 실제 접수 기능은 카카오톡 채널 또는
                네이버 예약 연동 후 제공됩니다.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__row">
                <label htmlFor="rsv-name">이름</label>
                <input id="rsv-name" name="name" type="text" required placeholder="성함을 입력해 주세요" />
              </div>
              <div className="form__row">
                <label htmlFor="rsv-phone">연락처</label>
                <input id="rsv-phone" name="phone" type="tel" required placeholder="010-0000-0000" />
              </div>
              <div className="form__row form__row--half">
                <div>
                  <label htmlFor="rsv-date">예약 희망일</label>
                  <input id="rsv-date" name="date" type="date" required />
                </div>
                <div>
                  <label htmlFor="rsv-people">인원 수</label>
                  <input id="rsv-people" name="people" type="number" min="1" required placeholder="예: 12" />
                </div>
              </div>
              <div className="form__row">
                <label htmlFor="rsv-type">예약 유형</label>
                <select id="rsv-type" name="type" required defaultValue="">
                  <option value="" disabled>
                    예약 유형을 선택해 주세요
                  </option>
                  {reservationTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form__row">
                <label htmlFor="rsv-message">문의 내용</label>
                <textarea
                  id="rsv-message"
                  name="message"
                  rows={5}
                  placeholder="모임 성격, 요청사항 등을 자유롭게 남겨주세요"
                />
              </div>
              <button type="submit" className="btn btn--gold btn--full">
                예약 문의 보내기
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
