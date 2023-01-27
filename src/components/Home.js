import React from 'react'
import HeroSection from './HomePage/HeroSection/HeroSection'
import HomeKitchen from './HomePage/HomeKitchen/HomeKitchen'
import OurBlog from './HomePage/OurBlog/OurBlog'
import Contact from './HomePage/ContectUs/Contact'

function Home() {
  return (
    <>
        <HeroSection />
        <HomeKitchen />
        <OurBlog />
        <Contact />
    </>
  )
}

export default Home