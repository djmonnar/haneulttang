import { useContext, useEffect } from 'react'
import { RenderMetadataContext } from '../seo/RenderMetadata'

export function useStructuredData(id: string, data: object) {
  const metadata = useContext(RenderMetadataContext)
  if (metadata) metadata.structuredData.set(id, data)

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
