import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Slider from '../component/Slider'
import Categories from '../component/Categories'
import Product from '../component/Product'
import Newsletter from '../component/Newsletter'
import Topbar from '../component/Topbar'



export default function home() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
    

     
      
      <Slider/>
      <Categories/>
      
      <Product/>
      <Newsletter/>
     
      <Footer/>
      
      
    </div>
  )
}
