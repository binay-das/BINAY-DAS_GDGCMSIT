import ThemeProvider from './components/context/ThemeContext'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/common/NavBar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Stats from './components/Stats'
import Destinations from './components/Destinations'
import TourPackages from './components/TourPackages'
import Events from './components/Events'
import Hotels from './components/Hotels'
import Support from './components/Support'
import PackagingList from './components/PackagingList'
import TravelBooks from './components/TravelBooks'
import HealthSafety from './components/HealthSafety'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Scroll from './components/common/Scroll'
import ChatAssist from './components/common/ChatAssist'
import CustomCursor from './components/common/CustomCursor'
import ProgressBar from './components/common/ProgressBar'

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <CustomCursor />
      <ProgressBar />
      <Scroll />
      <ChatAssist />
      {/* <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />        
      </Routes>  */}
      <HeroSection />
      <About />
      <Stats />
      <Destinations />
      <TourPackages />
      <Events />
      <Hotels />
      <PackagingList />
      <TravelBooks />
      <HealthSafety />
      <Support />
      <Testimonials />
      <FAQ />
      <Footer />
    </ThemeProvider>
  )
}

export default App
