import React from 'react';
import { categories } from '../Data';
import CategoriesItem  from './CategoriesItem';

export default function Categories() {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-around",
        marginTop:"20px",
    }} className='Categories_container'>
     {categories.map((el) => {
       return <CategoriesItem key={el.id} img={el.img} tittle={el.title} cat={el.cat}/>
     })}
    </div>
  )
}
