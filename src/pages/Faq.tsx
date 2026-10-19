import { CalendarCheck, Clock3, ExternalLink, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import { faqItems } from '../data/faqs'
import { store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStructuredData } from '../hooks/useStructuredData'

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${store.canonicalOrigin}/faq#faq`,
      url: `${store.canonicalOrigin}/faq`,
      name: `자주 묻는 질문 | ${store.storeName}`,
      inLanguage: 'ko-KR',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${store.canonicalOrigin}/faq#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: `${store.canonicalOrigin}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '자주 묻는 질문',
          item: `${store.canonicalOrigin}/faq`,
        },
      ],
    },
  ],
}

const quickFacts = [
  { icon: Clock3, label: '영업시간', value: '매일 11:00-21:30' },
  { icon: Clock3, label: '브레이크타임', value: '15:00-17:00' },
  { icon: MapPin, label: '주소', value: store.address },
  { icon: Phone, label: '전화 문의', value: store.phone },
] as const

export default function Faq() {
  usePageMeta(
    '자주 묻는 질문 | 백년가업 하늘땅 본점',
    '하늘땅 본점의 영업시간, 브레이크타임, 위치와 주차, 네이버 예약, 전화 문의, 대표 메뉴와 단체 모임 정보를 확인하세요.',
    '/faq',
  )
  useStructuredData('faq-page', faqStructuredData)

  return (
    <>
      <PageHero eyebrow="FAQ" title="자주 묻는 질문" description="방문 전 궁금한 내용을 빠르게 확인하세요" />

      <section className="faq-summary" aria-labelledby="faq-summary-title">
        <div className="container">
          <p className="section-kicker">QUICK ANSWERS</p>
          <h2 id="faq-summary-title">방문 전 핵심 안내</h2>
          <dl className="faq-summary__grid">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <dt><Icon aria-hidden="true" size={18} /> {label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="faq-summary__actions">
            <a className="btn btn--naver" href={store.naverBookingUrl} target="_blank" rel="noreferrer">
              <CalendarCheck aria-hidden="true" size={18} /> 네이버 예약 <ExternalLink aria-hidden="true" size={16} />
            </a>
            <a className="btn btn--outline-brown" href={store.telLink}>
              <Phone aria-hidden="true" size={18} /> 전화 문의
            </a>
          </div>
        </div>
      </section>

      <section className="section faq-page" aria-labelledby="faq-list-title">
        <div className="container container--narrow">
          <div className="faq-page__heading">
            <p className="section-kicker">HELP</p>
            <h2 id="faq-list-title">하늘땅 이용 안내</h2>
            <p>예약, 영업시간, 주차와 식사 공간에 대한 답변입니다.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span className="faq-item__category">{item.category}</span>
                  <strong>{item.question}</strong>
                  <span className="faq-item__toggle" aria-hidden="true" />
                </summary>
                <div className="faq-item__answer">
                  <span aria-hidden="true">A</span>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="faq-page__contact">
            <p>찾는 답변이 없으신가요?</p>
            <a href={store.telLink}><Phone aria-hidden="true" size={18} /> {store.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
