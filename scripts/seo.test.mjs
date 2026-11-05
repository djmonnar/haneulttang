import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'
import { parse } from 'parse5'
import { faqItems, heroSlides, heroSlideIndex, heroIntervalMs, menuItems, photos, sitePages, store } from '../dist-ssr/entry-server.js'
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
  test(`${path}: only supplied photos, no repeated main-content photos`, async () => {
    const document = await readPage(path)
    const main = elements(document, (node) => node.tagName === 'main')[0]
    const images = elements(main, (node) => node.tagName === 'img')
    const sources = images.map((node) => attribute(node, 'src'))
    const allowed = [...Object.values(photos).map((photo) => photo.src), '/images/hero/exterior.jpg']
    assert.equal(new Set(sources).size, sources.length)
    for (const image of images) {
      const source = attribute(image, 'src')
      assert.ok(allowed.includes(source), `Unverified photo: ${source}`)
      assert.ok(attribute(image, 'alt'))
      await access(new URL(`../dist${source}`, import.meta.url))
    }
  })

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

test('Confirmed seating limits are consistent without inventing a combined total', async () => {
  assert.deepEqual(store.seating, { roomMax: 23, combinedRoomsMax: 70, hall: 50 })
  for (const path of ['/', '/space', '/reservation', '/faq']) {
    const document = await readPage(path)
    const main = elements(document, (node) => node.tagName === 'main')[0]
    const text = textContent(main).replace(/\s/g, '')
    for (const phrase of ['룸당최대23명', '룸전체개방시최대70명', '홀50명']) {
      assert.ok(text.includes(phrase), `${path}: ${phrase}`)
    }
    assert.ok(!text.includes('120명'))
  }
})

test('Confirmed parking information appears in visitor pages and FAQ', async () => {
  assert.equal(store.parkingMinimumSpaces, 20)
  for (const path of ['/', '/space', '/location', '/faq']) {
    const document = await readPage(path)
    const main = elements(document, (node) => node.tagName === 'main')[0]
    const text = textContent(main)
    assert.ok(text.includes('20대 이상'))
    assert.ok(text.includes('흰 선 구간'))
  }
})

test('Home: search name is visible, not just hidden metadata', async () => {
  const document = await readPage('/')
  assert.ok(textContent(elements(document, (node) => node.tagName === 'main')[0]).includes('하늘땅 숯불갈비'))
  assert.ok(textContent(elements(document, (node) => node.tagName === 'title')[0]).startsWith('하늘땅 숯불갈비'))
})

test('Home: mobile hero uses the supplied pork-galbi photo and a matching preload', async () => {
  const document = await readPage('/')
  const source = elements(document, (node) => node.tagName === 'source')[0]
  assert.equal(attribute(source, 'media'), '(max-width: 700px)')
  assert.equal(attribute(source, 'srcset'), photos.porkGalbi.src)
  const preload = elements(document, (node) => node.tagName === 'link' && attribute(node, 'rel') === 'preload' && attribute(node, 'href') === photos.porkGalbi.src)[0]
  assert.equal(attribute(preload, 'media'), '(max-width: 700px)')
})

test('Home: slideshow keeps the first photo in static HTML and only uses supplied photos', async () => {
  const document = await readPage('/')
  const hero = elements(document, (node) => attribute(node, 'class')?.split(' ').includes('home-hero'))[0]
  const images = elements(hero, (node) => node.tagName === 'img')
  assert.equal(images.length, 1, 'Do not download the entire slideshow on first render')
  assert.equal(attribute(images[0], 'src'), photos.charcoalTable.src)
  assert.equal(attribute(images[0], 'fetchpriority'), 'high')
  const allowed = Object.values(photos).map((photo) => photo.src)
  assert.equal(new Set(heroSlides.map((slide) => slide.photo.src)).size, heroSlides.length)
  for (const slide of heroSlides) {
    assert.ok(allowed.includes(slide.photo.src))
    await access(new URL(`../dist${slide.photo.src}`, import.meta.url))
    if (slide.mobilePhoto) assert.ok(allowed.includes(slide.mobilePhoto.src))
  }
  assert.equal(heroIntervalMs, 6000)
  assert.equal(heroSlideIndex(-1), heroSlides.length - 1)
  assert.equal(heroSlideIndex(heroSlides.length), 0)
  assert.equal(heroSlideIndex(2 * heroSlides.length + 1), 1)
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

test('Kakao chat: real contact links preserve separate booking and phone actions', async () => {
  assert.equal(store.kakaoChannelUrl, 'https://pf.kakao.com/_wGfmX/chat')
  for (const path of ['/', '/menu', '/reservation', '/gift', '/business', '/faq']) {
    const document = await readPage(path)
    const links = elements(document, (node) => node.tagName === 'a')
    const chats = links.filter((node) => attribute(node, 'href') === store.kakaoChannelUrl)
    assert.ok(chats.length > 0, `${path}: missing chat link`)
    for (const link of chats) {
      assert.ok(textContent(link).includes('카카오톡'))
      assert.equal(attribute(link, 'target'), '_blank')
      assert.ok(attribute(link, 'rel').includes('noreferrer'))
    }
    assert.ok(links.some((node) => attribute(node, 'href') === store.telLink))
    assert.ok(links.some((node) => attribute(node, 'href') === store.naverBookingUrl))
  }
  const document = await readPage('/business')
  const main = elements(document, (node) => node.tagName === 'main')[0]
  assert.equal(elements(main, (node) => node.tagName === 'form').length, 0)
  assert.ok(!textContent(main).includes('문의가 접수되었습니다'))
  const restaurant = structuredData(document).find((node) => node['@type'] === 'Restaurant')
  assert.ok(restaurant.sameAs.includes('https://pf.kakao.com/_wGfmX'))
})

test('Copy: generic advertising slogans are absent from rendered visitor pages', async () => {
  for (const { path } of sitePages) {
    const document = await readPage(path)
    const main = elements(document, (node) => node.tagName === 'main')[0]
    const text = textContent(main)
    for (const phrase of ['세 가지 시그니처', '시간이 증명한 진짜', '공간의 품격', '새롭게 신축한', '정육 기반 브랜드의 가능성']) {
      assert.ok(!text.includes(phrase), `${path}: stale copy ${phrase}`)
    }
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
