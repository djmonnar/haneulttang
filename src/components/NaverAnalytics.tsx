import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function NaverAnalytics() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.dispatchEvent(new Event('haneulttang:pageview'))
  }, [pathname, search])

  return null
}
