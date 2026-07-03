import { useEffect } from 'react'

/** 페이지별 title / meta description을 설정하는 SEO 훅 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (meta) meta.content = description
  }, [title, description])
}
