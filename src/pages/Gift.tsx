import { Building2, Gift as GiftIcon, PackageCheck, Phone } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { giftItems } from '../data/gifts'
import { store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'

const icons = [GiftIcon, PackageCheck, GiftIcon, Building2]

export default function Gift() {
  usePageMeta(
    '하늘땅 선물세트 | 양념갈비·단체 주문 문의',
    '하늘땅 양념돼지갈비 세트, 가족 포장세트, 명절 선물세트와 기업 단체 주문 구성을 전화로 상담해 드립니다.',
  )

  return (
    <>
      <PageHero eyebrow="GIFT SET" title="하늘땅 선물세트" description="하늘땅의 정성을 소중한 분께 전하세요" />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="OUR GIFT" title="마음에 맞춰 준비하는 구성" description="구성과 수량은 주문 목적에 맞춰 전화로 상담해 드립니다." />
          <div className="gift-grid">
            {giftItems.map((item, index) => {
              const Icon = icons[index]
              return (
                <article className="gift-card" key={item.id}>
                  <ImagePlaceholder src={item.image} label={item.imageLabel} ratio="4 / 3" />
                  <div className="gift-card__body">
                    <Icon aria-hidden="true" size={22} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <strong>{item.id === 'corporate-gift' ? '대량 주문 문의' : '구성 상담'}</strong>
                    <a href={store.telLink}><Phone aria-hidden="true" size={17} /> 주문 문의</a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section section--ivory gift-guide">
        <div className="container container--narrow">
          <SectionHeading eyebrow="ORDER GUIDE" title="주문 안내" />
          <ol><li><span>01</span><div><h3>용도와 수량 상담</h3><p>가정용, 명절 선물, 기업 단체 주문 등 목적과 수량을 알려주세요.</p></div></li><li><span>02</span><div><h3>구성과 일정 확인</h3><p>가능한 구성과 포장, 수령 일정을 전화로 안내해 드립니다.</p></div></li><li><span>03</span><div><h3>주문 확정</h3><p>상담한 내용에 따라 정성껏 준비해 드립니다.</p></div></li></ol>
          <a className="btn btn--wine btn--full" href={store.telLink}><Phone aria-hidden="true" size={18} /> 선물세트 전화 문의 {store.phone}</a>
        </div>
      </section>
      <CtaBanner title="선물의 용도와 수량을 알려주세요" description="구성과 가격은 전화 상담 후 정확하게 안내해 드립니다." />
    </>
  )
}
