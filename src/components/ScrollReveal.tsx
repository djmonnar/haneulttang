import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 스크롤 리빌 효과.
 * 아래 목록의 요소들이 화면에 들어오면 `is-revealed` 클래스를 붙여
 * CSS 애니메이션(살짝 떠오르며 나타남)을 발동시킵니다.
 *
 * 페이지 컴포넌트를 하나도 수정하지 않아도 모든 페이지에 자동 적용됩니다.
 * (새 카드 스타일을 만들면 아래 SELECTOR에 클래스만 추가하면 됩니다)
 */
const SELECTOR = [
  '.section-heading',
  '.highlight-card',
  '.menu-card',
  '.space-preview__item',
  '.process__step',
  '.img-frame',
  '.cta-banner .container',
  '.location-preview',
  '.gift-card',
  '.news-card',
  '.info-card',
].join(', ')

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 사용자가 "동작 줄이기"를 켜둔 경우: 애니메이션 없이 바로 표시
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))

    if (reduced) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target) // 한 번 나타난 후에는 관찰 종료
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    els.forEach((el, i) => {
      el.classList.add('reveal')
      // 같은 부모 안의 형제들끼리 순차적으로 등장하도록 딜레이 부여
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).indexOf(el)
        : i
      el.style.setProperty('--reveal-delay', `${Math.min(siblings, 5) * 90}ms`)
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname]) // 페이지를 이동할 때마다 새 페이지 요소에 다시 적용

  return null
}
