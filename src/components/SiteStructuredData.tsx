import { siteStructuredData } from '../data/seo'
import { useStructuredData } from '../hooks/useStructuredData'

export default function SiteStructuredData() {
  useStructuredData('site', siteStructuredData)
  return null
}
