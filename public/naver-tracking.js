/* NAVER WCS: page views and explicitly defined click intentions, not completed bookings. */
(function () {
  'use strict'

  var config = document.currentScript
  var account = config && config.getAttribute('data-account')
  var domain = config && config.getAttribute('data-domain')
  if (!account || !domain || window.haneulttangNaverInstalled) return
  if (window.location.protocol !== 'https:' || ![domain, 'www.' + domain].includes(window.location.hostname)) return
  window.haneulttangNaverInstalled = true
  window.wcs_add = window.wcs_add || {}
  window.wcs_add.wa = account
  window._nasa = window._nasa || {}

  var ready = false
  var failed = false
  var lastPage = null
  var pendingClicks = []
  var contentPaths = ['/menu', '/space', '/location']

  function sendConversion(type) {
    try { window.wcs.trans({ type: type }) } catch { /* Analytics must not interrupt navigation. */ }
  }

  function pageView() {
    if (!ready) return
    var key = window.location.pathname + window.location.search
    if (key === lastPage) return
    try {
      window.wcs_add.wa = account
      window.wcs.inflow(domain)
      window.wcs_do()
      lastPage = key
      if (contentPaths.includes(window.location.pathname)) sendConversion('view_content')
    } catch { /* A blocked SDK must not break the website. */ }
  }

  function conversionForLink(href) {
    try {
      var url = new URL(href, window.location.href)
      if (url.protocol === 'tel:') return 'custom001'
      if (url.protocol !== 'https:') return null
      if (url.hostname === 'map.naver.com' && /^\/p\/entry\/place\/38241126\/?$/.test(url.pathname) && /^\/booking(?:[?/#]|$)/.test(url.searchParams.get('placePath') || '')) return 'custom002'
      if (url.hostname === 'pf.kakao.com' && /^\/_wGfmX\/chat\/?$/.test(url.pathname)) return 'custom003'
    } catch { /* Ignore invalid or unrelated links. */ }
    return null
  }

  function trackClick(event) {
    if (failed || event.defaultPrevented) return
    if (event.type === 'auxclick' ? event.button !== 1 : event.button !== undefined && event.button !== 0) return
    var target = event.target
    var link = target && typeof target.closest === 'function' && target.closest('a[href]')
    if (!link) return
    var type = conversionForLink(link.getAttribute('href'))
    if (!type) return
    if (ready) sendConversion(type)
    else if (pendingClicks.length < 20) pendingClicks.push(type)
  }

  document.addEventListener('click', trackClick)
  document.addEventListener('auxclick', trackClick)
  window.addEventListener('haneulttang:pageview', pageView)

  var sdk = document.createElement('script')
  sdk.id = 'naver-wcs-sdk'
  sdk.src = 'https://wcs.naver.net/wcslog.js'
  sdk.async = true
  sdk.dataset.status = 'loading'
  sdk.onload = function () {
    if (!window.wcs || typeof window.wcs.trans !== 'function' || typeof window.wcs_do !== 'function') {
      failed = true
      pendingClicks = []
      sdk.dataset.status = 'failed'
      return
    }
    ready = true
    sdk.dataset.status = 'ready'
    // The SDK uses the current URL: coalesce early route changes rather than send stale page views.
    pageView()
    pendingClicks.splice(0).forEach(sendConversion)
  }
  sdk.onerror = function () {
    failed = true
    pendingClicks = []
    sdk.dataset.status = 'failed'
  }
  document.head.appendChild(sdk)
}())
