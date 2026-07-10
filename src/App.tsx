import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileBottomBar from './components/MobileBottomBar'
import ScrollToTop from './components/ScrollToTop'
import ScrollReveal from './components/ScrollReveal'
import Home from './pages/Home'

const Brand = lazy(() => import('./pages/Brand'))
const Greeting = lazy(() => import('./pages/Greeting'))
const MenuPage = lazy(() => import('./pages/MenuPage'))
const Space = lazy(() => import('./pages/Space'))
const Butchery = lazy(() => import('./pages/Butchery'))
const Gift = lazy(() => import('./pages/Gift'))
const Reservation = lazy(() => import('./pages/Reservation'))
const Business = lazy(() => import('./pages/Business'))
const Location = lazy(() => import('./pages/Location'))
const News = lazy(() => import('./pages/News'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Legal = lazy(() => import('./pages/Legal'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Header />
      <main>
        <Suspense fallback={<div className="route-loading" role="status">페이지를 준비하고 있습니다.</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/brand/greeting" element={<Greeting />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/space" element={<Space />} />
            <Route path="/butchery" element={<Butchery />} />
            <Route path="/standards" element={<Butchery />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/business" element={<Business />} />
            <Route path="/location" element={<Location />} />
            <Route path="/news" element={<News />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
