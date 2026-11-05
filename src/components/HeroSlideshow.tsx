import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { HERO_INTERVAL_MS, heroSlideIndex, heroSlides } from '../data/heroSlides'

function imageUrl(index: number) {
  const slide = heroSlides[index]
  return 'mobilePhoto' in slide && window.matchMedia('(max-width: 700px)').matches
    ? slide.mobilePhoto.src
    : slide.photo.src
}

function loadPhoto(url: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image()
    image.decoding = 'async'
    image.onload = () => resolve()
    image.onerror = () => reject(new Error('Photo unavailable'))
    image.src = url
  })
}

export default function HeroSlideshow({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(true)
  const [inView, setInView] = useState(true)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')
  const section = useRef<HTMLElement>(null)
  const navigation = useRef(0)

  const showPhoto = useCallback(async (requested: number) => {
    const index = heroSlideIndex(requested)
    const request = ++navigation.current
    try {
      // Keep the current photo visible until its replacement has loaded.
      await loadPhoto(imageUrl(index))
      if (navigation.current !== request) return
      setPrevious(active)
      setActive(index)
      setError('')
    } catch {
      if (navigation.current !== request) return
      setPlaying(false)
      setError('사진을 불러오지 못했습니다. 다른 사진을 선택해 주세요.')
    }
  }, [active])

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const respectMotion = () => {
      if (motion.matches) {
        navigation.current += 1
        setPlaying(false)
      }
    }
    const updateVisibility = () => {
      setVisible(!document.hidden)
      if (document.hidden) navigation.current += 1
    }
    respectMotion()
    updateVisibility()
    setReady(true)
    motion.addEventListener('change', respectMotion)
    document.addEventListener('visibilitychange', updateVisibility)
    const observer = new IntersectionObserver(([entry]) => {
      const onscreen = entry.isIntersecting && entry.intersectionRatio >= 0.2
      setInView(onscreen)
      if (!onscreen) navigation.current += 1
    }, { threshold: [0, 0.2] })
    if (section.current) observer.observe(section.current)
    return () => {
      navigation.current += 1
      observer.disconnect()
      motion.removeEventListener('change', respectMotion)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (!ready || !playing || hovered || !visible || !inView) return
    const timer = window.setTimeout(() => { void showPhoto(active + 1) }, HERO_INTERVAL_MS)
    return () => window.clearTimeout(timer)
  }, [active, ready, playing, hovered, visible, inView, showPhoto])

  const selectPhoto = (offset: number) => {
    setPlaying(false)
    void showPhoto(active + offset)
  }

  return (
    <section
      ref={section}
      className="home-hero"
      aria-labelledby="home-title"
      aria-roledescription="사진 슬라이드"
      onPointerEnter={(event) => {
        if (event.pointerType !== 'mouse') return
        navigation.current += 1
        setHovered(true)
      }}
      onPointerLeave={(event) => { if (event.pointerType === 'mouse') setHovered(false) }}
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest('[data-rotation-control]')) {
          navigation.current += 1
          setPlaying(false)
        }
      }}
    >
      <div className="home-hero__visual" aria-live={playing ? 'off' : 'polite'}>
        {[...new Set([previous, active])].filter((index): index is number => index !== null).map((index) => {
          const slide = heroSlides[index]
          return (
            <picture
              key={slide.id}
              className={`home-hero__slide ${index === active ? 'home-hero__slide--active' : ''} ${index === active && previous !== null ? 'home-hero__slide--incoming' : ''}`}
              aria-hidden={index !== active}
              style={{ '--photo-position': slide.position, '--photo-mobile-position': slide.mobilePosition } as CSSProperties}
            >
              {'mobilePhoto' in slide && <source media="(max-width: 700px)" srcSet={slide.mobilePhoto.src} />}
              <img className="home-hero__photo" {...slide.photo} alt={'mobilePhoto' in slide ? '하늘땅 숯불갈비와 참숯 상차림' : slide.photo.alt} fetchPriority={index === 0 ? 'high' : 'auto'} />
            </picture>
          )
        })}
      </div>
      {children}
      {ready && (
        <div className="home-hero__controls" role="group" aria-label="사진 전환">
          <span className="home-hero__counter" aria-hidden="true">{String(active + 1).padStart(2, '0')}<span> / {String(heroSlides.length).padStart(2, '0')}</span></span>
          <button type="button" title="이전 사진" aria-label="이전 사진" onClick={() => selectPhoto(-1)}><ChevronLeft aria-hidden="true" size={18} /></button>
          <button
            type="button"
            data-rotation-control
            title={playing ? '사진 자동 전환 일시정지' : '사진 자동 전환 재생'}
            aria-label={playing ? '사진 자동 전환 일시정지' : '사진 자동 전환 재생'}
            onClick={() => { navigation.current += 1; setPlaying(!playing) }}
          >
            {playing ? <Pause aria-hidden="true" size={15} /> : <Play aria-hidden="true" size={15} />}
          </button>
          <button type="button" title="다음 사진" aria-label="다음 사진" onClick={() => selectPhoto(1)}><ChevronRight aria-hidden="true" size={18} /></button>
        </div>
      )}
      {error && <p className="sr-only" role="status">{error}</p>}
    </section>
  )
}
