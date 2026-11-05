/// <reference types="node" />
import { text } from 'node:stream/consumers'
import { PassThrough } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { RenderMetadataContext } from './seo/RenderMetadata'
import type { RenderMetadata } from './seo/RenderMetadata'

export { sitePages } from './data/seo'
export { store } from './data/store'
export { menuItems } from './data/menu'
export { faqItems } from './data/faqs'
export { photos } from './data/photos'

export async function render(path: string) {
  const metadata: RenderMetadata = { structuredData: new Map() }
  const html = await new Promise<string>((resolve, reject) => {
    const output = new PassThrough()
    void text(output).then(resolve, reject)
    const { pipe } = renderToPipeableStream(
      <RenderMetadataContext.Provider value={metadata}>
        <StaticRouter location={path}>
          <App />
        </StaticRouter>
      </RenderMetadataContext.Provider>,
      {
        // Static files must not split a large boundary into a JS-only reveal.
        progressiveChunkSize: Number.MAX_SAFE_INTEGER,
        onAllReady() { pipe(output) },
        onError(error) { output.destroy(error instanceof Error ? error : new Error(String(error))) },
      },
    )
  })
  if (!metadata.page) throw new Error(`Missing page metadata: ${path}`)
  return { html, page: metadata.page, structuredData: [...metadata.structuredData.entries()] }
}
