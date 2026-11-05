import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { parse } from 'parse5'
import { faqItems, menuItems, sitePages, store } from '../dist-ssr/entry-server.js'
import { attribute, elements, escapeHtml, safeJson, textContent } from './html.mjs'

async function readPage(path) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  return parse(await readFile(new URL(`../dist/${file}`, import.meta.url), 'utf8'))
}

function structuredData(document) {
  return elements(document, (node) => attribute(node, 'type') === 'application/ld+json')
    .flatMap((node) => {
      const data = JSON.parse(textContent(node))
      return data['@graph'] ?? [data]
    })
}

for (const { path } of sitePages) {
  test(`${path}: static content, unique metadata and restaurant identity`, async () => {
    const document = await readPage(path)
    const title = elements(document, (node) => node.tagName === 'title')
    assert.equal(title.length, 1)
    assert.ok(textContent(title[0]).includes('하늘땅'))
    const canonical = elements(document, (node) => attribute(node, 'rel') === 'canonical')
    assert.equal(canonical.length, 1)
    assert.equal(attribute(canonical[0], 'href'), `${store.canonicalOrigin}${path}`)
    const main = elements(document, (node) => node.tagName === 'main')[0]
    assert.ok(textContent(main).trim().length > 60)
    assert.equal(elements(main, (node) => node.tagName === 'h1').length, 1)
    assert.ok(!textContent(main).includes('페이지를 준비하고 있습니다.'))
    assert.ok(!textContent(main).includes('페이지를 찾을 수 없습니다'))
    assert.equal(elements(document, (node) => attribute(node, 'name') === 'robots').length, 1)
    const restaurant = structuredData(document).filter((node) => node['@type'] === 'Restaurant')
    assert.equal(restaurant.length, 1)
    assert.ok(restaurant[0].alternateName.includes('하늘땅 숯불갈비'))
    assert.equal(restaurant[0].telephone, '+82-55-541-5252')
    assert.equal(restaurant[0].sameAs[0], store.naverPlaceUrl)
    assert.deepEqual(restaurant[0].openingHoursSpecification.map(({ opens, closes }) => [opens, closes]), [['11:00', '15:00'], ['17:00', '21:30']])
  })
}

test('Home: search name is visible, not just hidden metadata', async () => {
  const document = await readPage('/')
  assert.ok(textContent(elements(document, (node) => node.tagName === 'main')[0]).includes('하늘땅 숯불갈비'))
  assert.ok(textContent(elements(document, (node) => node.tagName === 'title')[0]).startsWith('하늘땅 숯불갈비'))
})

test('Menu: offers and portions match the visible menu data', async () => {
  const document = await readPage('/menu')
  const menu = structuredData(document).find((node) => node['@type'] === 'Menu')
  const items = menu.hasMenuSection.flatMap((section) => section.hasMenuItem)
  assert.equal(items.length, menuItems.length)
  for (const item of menuItems) {
    const entry = items.find((candidate) => candidate.name === item.name)
    assert.equal(entry.offers.price, item.price)
    assert.equal(entry.offers.priceCurrency, 'KRW')
    if (item.portion) assert.ok(entry.description.includes(item.portion))
    assert.equal(elements(document, (node) => attribute(node, 'id') === item.id).length, 1)
  }
})

test('FAQ: every schema answer is present in the non-JavaScript HTML', async () => {
  const document = await readPage('/faq')
  const faq = structuredData(document).find((node) => node['@type'] === 'FAQPage')
  const answers = elements(document, (node) => node.tagName === 'details').map(textContent)
  assert.equal(faq.mainEntity.length, faqItems.length)
  for (const item of faqItems) {
    assert.ok(answers.some((text) => text.includes(item.question) && text.includes(item.answer)))
    assert.ok(faq.mainEntity.some((question) => question.name === item.question && question.acceptedAnswer.text === item.answer))
  }
})

test('404 is noindex and hosting does not rewrite unknown paths to the homepage', async () => {
  const document = await readPage('/404')
  const robots = elements(document, (node) => attribute(node, 'name') === 'robots')[0]
  assert.equal(attribute(robots, 'content'), 'noindex, nofollow')
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'))
  assert.ok(!config.cleanUrls, 'Keep verification .html files at their original URLs')
  assert.ok(!config.rewrites?.some((rule) => rule.destination === '/index.html'))
  for (const { path } of sitePages.filter((page) => page.path !== '/')) {
    assert.ok(config.rewrites.some((rule) => rule.source === path && rule.destination === `${path}.html`))
  }
})

test('HTML metadata and JSON-LD cannot terminate their containers', () => {
  assert.equal(escapeHtml('<a title="&">'), '&lt;a title=&quot;&amp;&quot;&gt;')
  const input = { text: '</script><script>alert(1)</script>' }
  assert.ok(!safeJson(input).includes('<'))
  assert.deepEqual(JSON.parse(safeJson(input)), input)
})
