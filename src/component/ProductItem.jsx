import React from 'react';
import "../style/product.css"
import { popularProducts } from '../Data';

export default function ProductItem() {
  return (
    <>
 
      {popularProducts.map((el)=> {
           return(
            <div className='product_card'>
                <div className="circle">
                    <img src={el.img} alt="Error" srcset="" />
                </div>
                <div className="info">
                <i class="fa fa-search"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-heart"></i>
                </div>
                
            </div>
           )
            
      })}
      </>
  )
}
