import { Phone } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { formatPrice, lunchMenus, menuCategories, menuItems, signatureMenus } from '../data/menu'
import { store } from '../data/store'
import { usePageMeta } from '../hooks/usePageMeta'

export default function MenuPage() {
  usePageMeta(
    '하늘땅 메뉴 | 돼지갈비·소갈비·한우 불고기',
    '숯불 양념 돼지갈비 200g 15,000원, 소갈비, 서울식 한우 불고기와 점심특선까지 하늘땅의 메뉴와 가격을 안내합니다.',
  )

  return (
    <>
      <PageHero eyebrow="MENU" title="하늘땅 메뉴" description="엄선한 원육, 정성껏 만든 양념, 참숯의 깊은 향" />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="SIGNATURE" title="세 가지 시그니처" description="하늘땅을 처음 찾으셨다면 세 가지 대표 메뉴부터 만나보세요." />
          <div className="menu-detail-list">
            {signatureMenus.map((menu, index) => (
              <article className={`menu-detail ${index % 2 ? 'menu-detail--reverse' : ''}`} key={menu.id}>
                <img src={menu.image} alt={menu.imageLabel} width="1600" height="1067" loading={index === 0 ? 'eager' : 'lazy'} />
                <div className="menu-detail__copy">
                  <p className="menu-detail__index">SIGNATURE {String(index + 1).padStart(2, '0')}</p>
                  <h2>{menu.name}</h2>
                  <p className="menu-detail__meta"><span>{menu.portion}</span><strong>{formatPrice(menu.price)}</strong></p>
                  <p>{menu.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--charcoal lunch-section">
        <div className="container lunch-section__layout">
          <img src="/images/menu/lunch-bulgogi.jpg" alt="가운데가 솟은 서울식 불고기판의 한우 불고기 점심특선" width="1600" height="1067" loading="lazy" />
          <div>
            <p className="section-kicker">LUNCH SPECIAL</p>
            <span className="menu-badge">점심특선</span>
            <h2>점심에도 즐기는<br />하늘땅식 서울 불고기</h2>
            {lunchMenus.map((menu) => (
              <div className="lunch-section__menu" key={menu.id}>
                <h3>{menu.name}</h3>
                <p>{menu.description}</p>
                <strong>{menu.portion} · {formatPrice(menu.price)}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container container--narrow">
          <SectionHeading eyebrow="ALL MENU" title="전체 메뉴" description="가격과 중량은 매장 운영 상황에 따라 변경될 수 있습니다." />
          <div className="menu-board">
            {menuCategories.map((category) => (
              <div className="menu-board__group" key={category}>
                <h3 className="menu-board__category">{category}</h3>
                <ul>
                  {menuItems.filter((item) => item.category === category).map((item) => (
                    <li className="menu-board__row" key={item.id}>
                      <span className="menu-board__name">{item.name}{item.portion && <em className="menu-board__portion"> {item.portion}</em>}</span>
                      <span className="menu-board__dots" aria-hidden="true" />
                      <span className="menu-board__price">{formatPrice(item.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="menu-board__contact"><p>선물세트와 포장 구성은 전화로 안내해 드립니다.</p><a href={store.telLink}><Phone aria-hidden="true" size={18} /> {store.phone}</a></div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
