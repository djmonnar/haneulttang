import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaBanner from '../components/CtaBanner'
import { giftItems } from '../data/gifts'
import { formatPrice } from '../data/menu'

export default function Gift() {
  usePageMeta(
    '선물세트 | 백년가업 하늘땅 본점',
    '정성을 담은 갈비 선물세트. 양념갈비 세트, 가족 포장세트, 명절 선물세트, 기업 단체 선물까지 하늘땅의 정육 기반 선물 상품을 문의하세요.',
  )

  return (
    <>
      <PageHero
        eyebrow="GIFT"
        title="선물세트"
        description="정성을 담은 갈비 선물세트"
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="PREMIUM GIFT"
            title="마음을 전하는 하늘땅의 선물"
          />
          <p className="lead-text">
            하늘땅의 양념갈비와 정육 상품을 소중한 분께 선물하세요. 가족 선물,
            명절 선물, 기업 단체 선물까지 문의 가능합니다.
          </p>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <div className="grid grid--2 gift-grid">
            {giftItems.map((gift) => (
              <article className="gift-card" key={gift.id}>
                <ImagePlaceholder src={gift.image} label={gift.imageLabel} ratio="4 / 3" />
                <div className="gift-card__body">
                  <div className="gift-card__tags">
                    {gift.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{gift.name}</h3>
                  <p className="gift-card__desc">{gift.description}</p>
                  <p className="gift-card__price">{formatPrice(gift.price)}</p>
                  <Link to="/reservation" className="btn btn--brown btn--sm">
                    문의하기
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="menu-board__note">
            선물세트는 문의형 상품으로 운영됩니다. 구성·수량·가격은 매장 또는
            문의 양식을 통해 안내해 드립니다.
          </p>
        </div>
      </section>

      <CtaBanner
        title="선물세트 문의"
        description="명절 시즌과 기업 단체 주문은 사전 문의를 권장드립니다."
      />
    </>
  )
}
