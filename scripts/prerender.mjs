import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse, parseFragment, serialize } from 'parse5'
import { render, sitePages, store } from '../dist-ssr/entry-server.js'
import { appendHtml, attribute, elements, escapeHtml, replaceChildren, safeJson } from './html.mjs'

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const outputDir = resolve(rootDir, 'dist')
const template = await readFile(resolve(outputDir, 'index.html'), 'utf8')

for (const path of [...sitePages.map((page) => page.path), '/404']) {
  const { html, page, structuredData } = await render(path)
  const document = parse(template)
  const head = elements(document, (node) => node.tagName === 'head')[0]
  const app = elements(document, (node) => attribute(node, 'id') === 'root')[0]
  replaceChildren(app, parseFragment(html).childNodes)

  // Replace only route-specific metadata; preserve fonts, assets and share images.
  head.childNodes = head.childNodes.filter((node) => {
    if (node.tagName === 'title') return false
    if (node.tagName === 'link' && attribute(node, 'rel') === 'canonical') return false
    if (node.tagName !== 'meta') return true
    const key = attribute(node, 'name') ?? attribute(node, 'property')
    return !['description', 'robots', 'og:title', 'og:description', 'og:url', 'twitter:title', 'twitter:description'].includes(key)
  })
  const canonical = `${store.canonicalOrigin}${page.canonicalPath}`
  appendHtml(head, `<title>${escapeHtml(page.title)}</title>`)
  for (const [key, content] of [
    ['description', page.description],
    ['robots', page.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'],
    ['og:title', page.title],
    ['og:description', page.description],
    ['og:url', canonical],
    ['twitter:title', page.title],
    ['twitter:description', page.description],
  ]) {
    appendHtml(head, `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escapeHtml(content)}">`)
  }
  appendHtml(head, `<link rel="canonical" href="${escapeHtml(canonical)}">`)
  for (const [id, data] of structuredData) {
    appendHtml(head, `<script type="application/ld+json" data-structured-data="${escapeHtml(id)}">${safeJson(data)}</script>`)
  }
  const destination = resolve(outputDir, path === '/' ? 'index.html' : `${path.slice(1)}.html`)
  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, serialize(document), 'utf8')
  console.log(`Prerendered ${path}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitePages.map(({ path, priority }) => `  <url><loc>${store.canonicalOrigin}${path}</loc><priority>${priority}</priority></url>`).join('\n')}
</urlset>
`
await writeFile(resolve(outputDir, 'sitemap.xml'), sitemap, 'utf8')
