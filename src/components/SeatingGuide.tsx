import { useId } from 'react'
import { seatingDetails, store } from '../data/store'

export default function SeatingGuide() {
  const id = useId()
  return (
    <section className="seating-guide" aria-labelledby={id}>
      <h2 id={id}>룸과 홀 인원 안내</h2>
      <dl>
        {seatingDetails.map(({ label, detail }) => (
          <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>
        ))}
      </dl>
      <p>룸 전체 개방이나 단체 예약은 <a href={store.telLink}>{store.phone}</a>로 문의해 주세요.</p>
    </section>
  )
}
