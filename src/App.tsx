import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileBottomBar from './components/MobileBottomBar'
import ScrollToTop from './components/ScrollToTop'
import ScrollReveal from './components/ScrollReveal'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Greeting from './pages/Greeting'
import MenuPage from './pages/MenuPage'
import Space from './pages/Space'
import Butchery from './pages/Butchery'
import Gift from './pages/Gift'
import Reservation from './pages/Reservation'
import Business from './pages/Business'
import Location from './pages/Location'
import News from './pages/News'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/brand/greeting" element={<Greeting />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/space" element={<Space />} />
          <Route path="/butchery" element={<Butchery />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/business" element={<Business />} />
          <Route path="/location" element={<Location />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
