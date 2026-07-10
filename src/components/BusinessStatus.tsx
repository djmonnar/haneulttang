import { useEffect, useState } from 'react'
import { Clock3 } from 'lucide-react'
import { store } from '../data/store'

type StatusKind = 'open' | 'break' | 'last-order' | 'closed'

interface BusinessState {
  kind: StatusKind
  label: string
  detail: string
}

const timeToMinutes = (value: string) => {
  const [hour, minute] = value.split(':').map(Number)
  return hour * 60 + minute
}

const getKoreaMinutes = () => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())

  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0)
  return hour * 60 + minute
}

const getBusinessState = (): BusinessState => {
  const now = getKoreaMinutes()
  const { open, close, breakStart, breakEnd, lastOrder } = store.openingHours

  if (now < timeToMinutes(open) || now >= timeToMinutes(close)) {
    return { kind: 'closed', label: '영업 종료', detail: `오늘 ${open}에 문을 엽니다` }
  }
  if (now >= timeToMinutes(breakStart) && now < timeToMinutes(breakEnd)) {
    return { kind: 'break', label: '브레이크타임', detail: `${breakEnd}부터 다시 영업합니다` }
  }
  if (now >= timeToMinutes(lastOrder)) {
    return { kind: 'last-order', label: '라스트오더 마감', detail: `매장은 ${close}까지 운영합니다` }
  }
  return { kind: 'open', label: '영업 중', detail: `${lastOrder} 라스트오더` }
}

export default function BusinessStatus() {
  const [state, setState] = useState(getBusinessState)

  useEffect(() => {
    const timer = window.setInterval(() => setState(getBusinessState()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className={`business-status business-status--${state.kind}`} aria-live="polite">
      <Clock3 aria-hidden="true" size={18} />
      <span className="business-status__label">{state.label}</span>
      <span className="business-status__detail">{state.detail}</span>
    </div>
  )
}
