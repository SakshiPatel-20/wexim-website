import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Work from '../components/Work'
import MobileApp from '../components/MobileApp'
import Teams from '../components/Teams'

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Teams />
      <Work />
      <Pricing />
      <MobileApp />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
