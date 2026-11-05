import { photos } from './photos'

export const HERO_INTERVAL_MS = 3500

export const heroSlides = [
  { id: 'table', photo: photos.charcoalTable, mobilePhoto: photos.porkGalbi, position: 'center 52%', mobilePosition: '50% 50%' },
  { id: 'pork', photo: photos.porkGalbi, mobilePhoto: photos.charcoalTable, position: 'center 58%', mobilePosition: '50% 50%' },
  { id: 'beef', photo: photos.beefGalbi, position: 'center 58%', mobilePosition: '44% 55%' },
  { id: 'bulgogi', photo: photos.bulgogi, position: 'center 52%', mobilePosition: '50% 50%' },
  { id: 'room', photo: photos.roomConnected, position: 'center 65%', mobilePosition: '65% 65%' },
] as const

export function heroSlideIndex(index: number) {
  return ((index % heroSlides.length) + heroSlides.length) % heroSlides.length
}
