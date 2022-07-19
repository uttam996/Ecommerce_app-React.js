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
    // <div
    //   className="slider_cont"
    //   style={{
    //     backgroundColor: `${sliderItems[slideIndex].bg}`,
    //   }}
    // >
    //   <div className="offer_img" alt-text="error">
    //     <img src={sliderItems[slideIndex].img} alt="error" srcset="" />
    //   </div>

    //   <div className="sale_des">
    //     <h1>{sliderItems[slideIndex].title}</h1>
    //     <p>{sliderItems[slideIndex].desc}</p>
    //     <div>SHOP NOW</div>
    //   </div>
    // </div>
   <div className="container">
    {sliderItems.map(function(el){
      return (
         <div
      className="slider_cont"
      style={{
        backgroundColor: `${sliderItems[slideIndex].bg}`,
        transform: `translateX(${slideIndex * -100}vw)`
      }}
    >
      <div className="offer_img" alt-text="error">
        <img src={el.img} alt="error" srcset="" />
      </div>

      <div className="sale_des">
        <h1>{el.title}</h1>
        <p>{el.desc}</p>
        <div>SHOP NOW</div>
      </div>
    </div>
      )
    })}
   </div>
  );
}
