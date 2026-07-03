import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'
import {
  menuItems,
  menuCategories,
  signatureMenus,
  formatPrice,
} from '../data/menu'

export default function MenuPage() {
  usePageMeta(
    '메뉴 안내 | 백년가업 하늘땅 본점',
    '숯불 양념 갈비, 숯불 양념 소갈비, 숯불 한우 불고기, 점심특선까지. 진해 숯불갈비 전문점 백년가업 하늘땅의 전체 메뉴를 안내합니다.',
  )

  return (
    <>
      <PageHero
        eyebrow="MENU"
        title="메뉴 안내"
        description="정육에서 시작해 숯불로 완성한 하늘땅의 메뉴를 소개합니다."
      />

      {/* 대표 메뉴 */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="SIGNATURE"
            title="대표 메뉴"
            description="하늘땅을 처음 찾으셨다면, 이 네 가지 메뉴부터 만나보세요."
          />
          <div className="signature-list">
            {signatureMenus.map((menu, i) => (
              <article
                className={`signature-item ${i % 2 === 1 ? 'signature-item--reverse' : ''}`}
                key={menu.id}
              >
                <ImagePlaceholder
                  src={menu.image}
                  label={menu.imageLabel ?? `${menu.name} 사진`}
                  ratio="4 / 3"
                  className="signature-item__img"
                />
                <div className="signature-item__body">
                  <p className="signature-item__badge">
                    {menu.category === '점심특선' ? '점심특선' : 'SIGNATURE'}
                  </p>
                  <h3>
                    {menu.name}
                    {menu.portion && (
                      <span className="signature-item__portion"> {menu.portion}</span>
                    )}
                  </h3>
                  <p className="signature-item__price">{formatPrice(menu.price)}</p>
                  <p className="signature-item__desc">{menu.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 전체 메뉴표 */}
      <section className="section section--beige">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="ALL MENU"
            title="전체 메뉴"
            description="가격은 매장 사정에 따라 변동될 수 있습니다."
          />
          <div className="menu-board">
            {menuCategories.map((category) => (
              <div className="menu-board__group" key={category}>
                <h3 className="menu-board__category">{category}</h3>
                <ul>
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <li className="menu-board__row" key={item.id}>
                        <span className="menu-board__name">
                          {item.name}
                          {item.portion && (
                            <em className="menu-board__portion"> {item.portion}</em>
                          )}
                        </span>
                        <span className="menu-board__dots" aria-hidden="true" />
                        <span className="menu-board__price">
                          {formatPrice(item.price)}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="menu-board__note">
            포장 및 선물세트 구성은 매장으로 문의해 주시면 자세히 안내해 드립니다.
          </p>
        </div>
      </section>

      {/* 점심특선 강조 */}
      <section className="section section--dark">
        <div className="container lunch-highlight">
          <div className="lunch-highlight__text">
            <SectionHeading
              eyebrow="LUNCH SPECIAL"
              title="점심에도 즐기는 하늘땅"
              align="left"
              onDark
            />
            <p>
              숯불 한우 불고기 점심특선은 하늘땅의 맛을 점심 시간에 부담 없이
              즐길 수 있는 실속 메뉴입니다.
            </p>
            <p className="lunch-highlight__price">
              숯불 한우 불고기 점심특선 120g <strong>15,000원</strong>
            </p>
          </div>
          <ImagePlaceholder
            src="/images/menu/lunch-bulgogi.jpg"
            label="점심특선 사진 자리"
            ratio="4 / 3"
          />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
