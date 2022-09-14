import React from "react";
import { useState } from "react";
import { sliderItems } from "../Data";
import "../style/Slider.css"

export default function Slider() {
  const [slideIndex, setSlideIndex] =useState(0)
  function slideshow(){
     setInterval(function(){ 
      slideIndex===2?setSlideIndex(0):setSlideIndex(slideIndex+1);
      
     
    },5000)
  }
  slideshow()
  return (
 
   <div className="container">
   
         <div key={sliderItems[slideIndex].id}
      className="slider_cont"
      style={{
        backgroundColor: `${sliderItems[slideIndex].bg}`,
        transition:"all 0.5s ease in out",
      }}
    >
      <div className="offer_img" alt-text="error">
        <img src={sliderItems[slideIndex].img} alt="error" />
      </div>

      <div className="sale_des">
        <h1>{sliderItems[slideIndex].title}</h1>
        <p>{sliderItems[slideIndex].desc}</p>
        <div>SHOP NOW</div>
      </div>
    </div>
      
    
   </div>
  );
}
