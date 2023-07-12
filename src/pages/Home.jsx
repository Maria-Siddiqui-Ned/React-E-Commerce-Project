import React from 'react'
// import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/CategoriesSection'
import ImageSlider from '../Components/ImageSlider'
import AboutUs from '../Components/AboutUs'

export default function Home() {
  return (
    <>
      <ImageSlider />
      <AboutUs />

      {/* <HeaderSection /> */}
      <CategoriesSection />
    </>
  )
}
