import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'
import Slider from '../component/Slider'
import Categories from '../component/Categories'

export default function home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      
      <Footer/>
      
    </div>
  )
}
