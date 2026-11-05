import { createContext } from 'react'

export interface PageMetadata {
  title: string
  description: string
  canonicalPath: string
  noIndex: boolean
}

export interface RenderMetadata {
  page?: PageMetadata
  structuredData: Map<string, object>
}

// Each build-time render owns its collector; nothing is shared between routes.
export const RenderMetadataContext = createContext<RenderMetadata | null>(null)
