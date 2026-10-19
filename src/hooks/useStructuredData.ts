import { useEffect } from 'react'

export function useStructuredData(id: string, data: object) {
  useEffect(() => {
    const selector = `script[data-structured-data="${id}"]`
    let script = document.querySelector<HTMLScriptElement>(selector)

    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.structuredData = id
      document.head.appendChild(script)
    }

    script.text = JSON.stringify(data)

    return () => {
      script?.remove()
    }
  }, [data, id])
}
