import { CalendarCheck, Clock3, MapPin, Phone, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import BusinessStatus from '../components/BusinessStatus'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'

const reservationTypes = ['가족 외식', '부모님 모임', '회사 회식', '친목 모임', '격식 있는 자리'] as const

export default function Reservation() {
  usePageMeta('예약 문의 | 백년가업 하늘땅 본점', '가족 외식과 단체 모임 예약은 하늘땅 본점 055-541-5252로 전화 문의해 주세요.')

  return (
    <>
      <PageHero eyebrow="RESERVATION" title="예약 문의" description="소중한 자리를 편안하게 준비해 드립니다" />
      <section className="section reservation-page">
        <div className="container container--narrow">
          <BusinessStatus />
          <SectionHeading eyebrow="PHONE RESERVATION" title="전화로 빠르게 예약하세요" description="인원, 날짜와 시간, 모임 성격을 알려주시면 알맞은 좌석을 안내해 드립니다." />
          <a className="reservation-call" href={store.telLink}><Phone aria-hidden="true" size={26} /><span>예약 전화</span><strong>{store.phone}</strong></a>
          <div className="reservation-guide">
            <article><CalendarCheck aria-hidden="true" /><h3>날짜와 시간</h3><p>방문하실 날짜와 시간을 알려주세요.</p></article>
            <article><UsersRound aria-hidden="true" /><h3>인원과 모임</h3><p>인원과 모임 성격을 알려주시면 자리를 준비합니다.</p></article>
            <article><Clock3 aria-hidden="true" /><h3>운영시간 확인</h3><p>브레이크타임 15:00-17:00, 라스트오더 20:00입니다.</p></article>
          </div>
          <div className="reservation-types">{reservationTypes.map((type) => <span key={type}>{type}</span>)}</div>
          <p className="reservation-note">가족 및 단체 방문은 원활한 자리 준비를 위해 사전 예약을 권장드립니다.</p>
          <Link className="btn btn--outline-brown btn--full" to="/location"><MapPin aria-hidden="true" size={18} /> 위치와 주차 확인</Link>
        </div>
      </section>
    </>
  )
}
