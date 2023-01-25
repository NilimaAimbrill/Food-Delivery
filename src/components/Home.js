import React from 'react'
import Header from './HomePage/Header/Header'
import HeroSection from './HomePage/HeroSection/HeroSection'
import HomeKitchen from './HomePage/HomeKitchen/HomeKitchen'
import OurBlog from './HomePage/OurBlog/OurBlog'
import Contact from './HomePage/ContectUs/Contact'
import Footer from './HomePage/Footer/Footer'

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <HomeKitchen />
        <OurBlog />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home