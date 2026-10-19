import { ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { store } from '../data/store'

interface NaverMapInstance {
  destroy?: () => void
}

interface NaverMarkerInstance {
  setMap: (map: NaverMapInstance | null) => void
}

interface NaverMapsNamespace {
  maps: {
    LatLng: new (latitude: number, longitude: number) => unknown
    Map: new (element: HTMLElement, options: Record<string, unknown>) => NaverMapInstance
    Marker: new (options: Record<string, unknown>) => NaverMarkerInstance
  }
}

declare global {
  interface Window {
    naver?: NaverMapsNamespace
    navermap_authFailure?: () => void
  }
}

let naverMapsPromise: Promise<NaverMapsNamespace> | null = null

function loadNaverMaps() {
  if (window.naver?.maps) return Promise.resolve(window.naver)
  if (naverMapsPromise) return naverMapsPromise

  naverMapsPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('#naver-maps-sdk')
    const script = existing ?? document.createElement('script')

    const handleLoad = () => {
      if (window.naver?.maps) resolve(window.naver)
      else reject(new Error('NAVER Maps SDK did not initialize.'))
    }
    const handleError = () => reject(new Error('NAVER Maps SDK failed to load.'))

    script.addEventListener('load', handleLoad, { once: true })
    script.addEventListener('error', handleError, { once: true })

    if (!existing) {
      script.id = 'naver-maps-sdk'
      script.async = true
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${store.naverMapClientId}`
      document.head.appendChild(script)
    }
  })

  return naverMapsPromise
}

interface NaverMapProps {
  tall?: boolean
}

export default function NaverMap({ tall = false }: NaverMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let active = true
    let map: NaverMapInstance | null = null
    let marker: NaverMarkerInstance | null = null
    const previousAuthFailure = window.navermap_authFailure

    window.navermap_authFailure = () => {
      if (active) setStatus('error')
    }

    loadNaverMaps()
      .then((naver) => {
        if (!active || !containerRef.current) return

        const center = new naver.maps.LatLng(store.coordinates.latitude, store.coordinates.longitude)
        map = new naver.maps.Map(containerRef.current, {
          center,
          zoom: 17,
          minZoom: 9,
          scrollWheel: false,
          scaleControl: true,
          mapDataControl: false,
        })
        marker = new naver.maps.Marker({
          position: center,
          map,
          title: store.storeName,
        })
        setStatus('ready')
      })
      .catch(() => {
        if (active) setStatus('error')
      })

    return () => {
      active = false
      marker?.setMap(null)
      map?.destroy?.()
      window.navermap_authFailure = previousAuthFailure
    }
  }, [])

  return (
    <div className={`map-embed naver-map${tall ? ' map-embed--tall' : ''}`}>
      <div
        className="naver-map__canvas"
        ref={containerRef}
        role="region"
        aria-label={`${store.storeName} 네이버 지도`}
      />
      {status === 'loading' && <p className="naver-map__status">네이버 지도를 불러오는 중입니다.</p>}
      {status === 'error' && (
        <p className="naver-map__status naver-map__status--error">
          지도를 표시하지 못했습니다. 아래 버튼으로 위치를 확인해 주세요.
        </p>
      )}
      <a className="naver-map__link" href={store.naverMapUrl} target="_blank" rel="noreferrer">
        네이버지도에서 크게 보기 <ExternalLink aria-hidden="true" size={14} />
      </a>
    </div>
  )
}
