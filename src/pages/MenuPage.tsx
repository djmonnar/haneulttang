import { Phone } from 'lucide-react'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { formatPrice, lunchMenus, menuCategories, menuItems, signatureMenus } from '../data/menu'
import { store } from '../data/store'
import { menuStructuredData } from '../data/seo'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStructuredData } from '../hooks/useStructuredData'

export default function MenuPage() {
  usePageMeta(
    '하늘땅 숯불갈비 메뉴·가격 | 돼지갈비·소갈비·한우 불고기',
    `${signatureMenus.map((menu) => `${menu.name} ${menu.portion} ${formatPrice(menu.price)}`).join(', ')}. 하늘땅 숯불갈비 본점의 전체 메뉴와 점심특선을 안내합니다.`,
  )
  useStructuredData('menu', menuStructuredData)

  return (
    <>
      <PageHero eyebrow="MENU" title="하늘땅 메뉴" description="돼지갈비, 소갈비, 한우 불고기를 준비합니다." />
      <section className="section">
        <div className="container">
          <SectionHeading title="대표 메뉴" />
          <div className="menu-detail-list">
            {signatureMenus.map((menu, index) => (
              <article className={`menu-detail ${index % 2 ? 'menu-detail--reverse' : ''}`} key={menu.id} id={menu.id}>
                  <img src={menu.image} alt={menu.imageLabel} width="1920" height="1280" loading={index === 0 ? 'eager' : 'lazy'} />
                <div className="menu-detail__copy">
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
        <div className="container container--narrow lunch-section__layout lunch-section__layout--text">
          <div>
            <span className="menu-badge">점심특선</span>
            <h2>한우 불고기 점심특선</h2>
            {lunchMenus.map((menu) => (
              <div className="lunch-section__menu" key={menu.id}>
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
                    <li className="menu-board__row" key={item.id} id={item.signature ? undefined : item.id}>
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
