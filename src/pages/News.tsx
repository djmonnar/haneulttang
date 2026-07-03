import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import { newsPosts } from '../data/news'

export default function News() {
  usePageMeta(
    '소식·공지 | 백년가업 하늘땅 본점',
    '백년가업 하늘땅의 공지사항, 신메뉴 소식, 선물세트 안내, 명절·단체 예약 안내, 브랜드 소식을 전해드립니다.',
  )

  const [openId, setOpenId] = useState<string | null>(newsPosts[0]?.id ?? null)

  return (
    <>
      <PageHero
        eyebrow="NEWS"
        title="소식 · 공지"
        description="하늘땅의 새로운 소식과 안내사항을 전해드립니다."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="NOTICE"
            title="하늘땅 소식"
            description="공지사항 · 신메뉴 소식 · 선물세트 안내 · 명절 예약 안내 · 단체 예약 안내 · 브랜드 소식"
          />
          <ul className="news-list">
            {newsPosts.map((post) => {
              const open = openId === post.id
              return (
                <li className="news-item" key={post.id}>
                  <button
                    type="button"
                    className="news-item__head"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : post.id)}
                  >
                    <span className="news-item__category">{post.category}</span>
                    <span className="news-item__title">{post.title}</span>
                    <span className="news-item__date">{post.date}</span>
                    <span className={`news-item__arrow ${open ? 'is-open' : ''}`} aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  {open && (
                    <div className="news-item__body">
                      {post.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
