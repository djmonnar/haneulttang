import { parseFragment } from 'parse5'

export function elements(node, predicate) {
  const result = []
  function visit(current) {
    if (current.tagName && predicate(current)) result.push(current)
    for (const child of current.childNodes ?? []) visit(child)
  }
  visit(node)
  return result
}

export function attribute(node, name) {
  return node.attrs?.find((attr) => attr.name === name)?.value
}

export function textContent(node) {
  if (node.nodeName === '#text') return node.value
  return (node.childNodes ?? []).map(textContent).join('')
}

export function replaceChildren(parent, children) {
  parent.childNodes = children
  for (const child of children) child.parentNode = parent
}

export function appendHtml(parent, html) {
  const fragment = parseFragment(html)
  for (const child of fragment.childNodes) {
    child.parentNode = parent
    parent.childNodes.push(child)
  }
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char])
}

export function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}
