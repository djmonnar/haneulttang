import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { runInNewContext } from 'node:vm'
import { attribute, elements, textContent } from './html.mjs'
import { parse } from 'parse5'
import { sitePages, store } from '../dist-ssr/entry-server.js'

const script = await readFile(new URL('../public/naver-tracking.js', import.meta.url), 'utf8')

function fixture(href = `${store.canonicalOrigin}/`, blocked = false) {
  const calls = []
  const documentEvents = new Map()
  const windowEvents = new Map()
  const scripts = []
  const document = {
    currentScript: { getAttribute: (name) => ({ 'data-account': 's_5032dd1a481d', 'data-domain': 'xn--wh1bu4c029b.com' })[name] },
    addEventListener: (name, handler) => documentEvents.set(name, handler),
    createElement: () => ({ dataset: {} }),
    head: { appendChild: (element) => scripts.push(element) },
  }
  const window = {
    location: new URL(href),
    addEventListener: (name, handler) => windowEvents.set(name, handler),
  }
  const context = { window, document, URL }
  runInNewContext(script, context)
  return {
    calls, scripts, window,
    rerun: () => runInNewContext(script, context),
    load: () => {
      window.wcs = {
        inflow: (domain) => calls.push({ type: 'inflow', domain }),
        trans: (conversion) => {
          if (blocked) throw new Error('Blocked')
          calls.push({ type: conversion.type, path: window.location.pathname })
        },
      }
      window.wcs_do = () => {
        if (blocked) throw new Error('Blocked')
        calls.push({ type: 'pv', path: window.location.pathname })
      }
      scripts[0]?.onload()
    },
    visit: (path) => {
      window.location = new URL(path, store.canonicalOrigin)
      windowEvents.get('haneulttang:pageview')?.()
    },
    click: (href, extra = {}) => {
      const event = { type: 'click', button: 0, defaultPrevented: false, target: { closest: () => ({ getAttribute: () => href }) }, ...extra }
      documentEvents.get(event.type)?.(event)
    },
  }
}

test('NAVER: one nonblocking loader and the supplied account on every generated page', async () => {
  for (const { path } of sitePages) {
    const filename = path === '/' ? 'index.html' : `${path.slice(1)}.html`
    const html = parse(await readFile(new URL(`../dist/${filename}`, import.meta.url), 'utf8'))
    const loaders = elements(html, (node) => node.tagName === 'script' && attribute(node, 'src') === '/naver-tracking.js')
    assert.equal(loaders.length, 1)
    assert.equal(attribute(loaders[0], 'data-account'), 's_5032dd1a481d')
    assert.equal(attribute(loaders[0], 'data-domain'), new URL(store.canonicalOrigin).hostname)
    assert.notEqual(attribute(loaders[0], 'defer'), undefined)
  }
  const f = fixture()
  f.rerun()
  assert.equal(f.scripts.length, 1)
  assert.equal(f.scripts[0].src, 'https://wcs.naver.net/wcslog.js')
  assert.equal(f.scripts[0].async, true)
  assert.equal(f.window.wcs_add.wa, 's_5032dd1a481d')
})

test('NAVER: local development and unrelated preview hosts never send production data', () => {
  for (const href of ['http://127.0.0.1:5179/', 'https://preview.vercel.app/', 'https://xn--wh1bu4c029b.com.evil.example/']) {
    const f = fixture(href)
    assert.equal(f.scripts.length, 0)
    assert.equal(f.calls.length, 0)
  }
  assert.equal(fixture('https://www.xn--wh1bu4c029b.com/').scripts.length, 1)
})

test('NAVER: initial/StrictMode duplicate page views are suppressed, SPA visits are counted', () => {
  const f = fixture()
  f.load()
  f.visit('/')
  f.visit('/')
  assert.equal(f.calls.filter((event) => event.type === 'pv').length, 1)
  f.visit('/menu')
  f.visit('/menu')
  f.visit('/space')
  f.visit('/location')
  f.visit('/menu')
  assert.deepEqual(f.calls.filter((event) => event.type === 'pv').map((event) => event.path), ['/', '/menu', '/space', '/location', '/menu'])
  assert.equal(f.calls.filter((event) => event.type === 'view_content').length, 4)
  assert.ok(f.calls.filter((event) => event.type === 'inflow').every((event) => event.domain === 'xn--wh1bu4c029b.com'))
})

test('NAVER: slow SDK loading coalesces early route changes into the actual current page', () => {
  const f = fixture()
  f.visit('/menu')
  f.visit('/location')
  f.load()
  assert.deepEqual(f.calls.filter((event) => event.type === 'pv'), [{ type: 'pv', path: '/location' }])
})

test('NAVER: phone, booking outbound and Kakao clicks are three distinct custom intentions', () => {
  const f = fixture()
  f.load()
  f.click(store.telLink)
  f.click(store.naverBookingUrl)
  f.click(store.kakaoChannelUrl)
  assert.deepEqual(f.calls.filter((event) => event.type.startsWith('custom')).map((event) => event.type), ['custom001', 'custom002', 'custom003'])
  assert.ok(!f.calls.some((event) => ['purchase', 'lead', 'schedule', 'inquiry'].includes(event.type)))
})

test('NAVER: delayed SDK preserves early clicks once and never prevents their native action', () => {
  const f = fixture()
  f.click(store.telLink, { preventDefault: () => assert.fail('Must not prevent phone navigation') })
  f.click(store.kakaoChannelUrl)
  assert.equal(f.calls.length, 0)
  f.load()
  f.visit('/')
  assert.equal(f.calls.filter((event) => event.type.startsWith('custom')).length, 2)
})

test('NAVER: keyboard activation and nested icon clicks contain no personal or form data', () => {
  const f = fixture()
  f.load()
  f.click(store.telLink, { button: undefined })
  f.click(store.kakaoChannelUrl, { target: { closest: (selector) => selector === 'a[href]' ? { getAttribute: () => store.kakaoChannelUrl } : null } })
  f.click(store.telLink, { target: null })
  assert.deepEqual(f.calls.filter((event) => event.type.startsWith('custom')).map((event) => event.type), ['custom001', 'custom003'])
  assert.ok(!script.includes('localStorage'))
  assert.ok(!script.includes('sessionStorage'))
})

test('NAVER: ordinary maps, wrong stores, invalid schemes and canceled/right clicks are ignored', () => {
  const f = fixture()
  f.load()
  for (const href of [store.naverMapUrl, store.naverPlaceUrl, store.kakaoMapUrl, '/menu', 'https://pf.kakao.com/_other/chat', 'https://map.naver.com/p/entry/place/999?placePath=%2Fbooking', 'javascript:alert(1)']) f.click(href)
  f.click(store.telLink, { defaultPrevented: true })
  f.click(store.telLink, { button: 2 })
  assert.equal(f.calls.filter((event) => event.type.startsWith('custom')).length, 0)
  f.click(store.kakaoChannelUrl, { type: 'auxclick', button: 1 })
  assert.equal(f.calls.filter((event) => event.type === 'custom003').length, 1)
})

test('NAVER: blocked SDK and analytics exceptions do not break page or contact navigation', () => {
  const f = fixture()
  f.scripts[0].onerror()
  assert.doesNotThrow(() => { f.visit('/menu'); f.click(store.telLink) })
  assert.equal(f.scripts[0].dataset.status, 'failed')
  const blocked = fixture(store.canonicalOrigin, true)
  assert.doesNotThrow(() => { blocked.load(); blocked.visit('/menu'); blocked.click(store.telLink) })
})

test('NAVER: privacy text acknowledges page/click measurement and does not promise completed bookings', async () => {
  const html = parse(await readFile(new URL('../dist/privacy.html', import.meta.url), 'utf8'))
  const text = textContent(elements(html, (node) => node.tagName === 'main')[0])
  assert.ok(text.includes('네이버 광고 성과 분석'))
  assert.ok(text.includes('버튼 클릭은 실제 통화나 상담, 예약의 완료를 뜻하지 않습니다.'))
  assert.ok(!text.includes('개인정보 수집 기능을 운영하지 않습니다.'))
})
