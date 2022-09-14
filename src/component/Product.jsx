import React from 'react';
import ProductItem from "./ProductItem";
import "../style/product.css";

export default function product(path,filter,sort) {

  return (
    <div className='products'>
      <ProductItem cat={path} filter={filter} sort={sort}/>
    </div>
  )
}
