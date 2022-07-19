import React from 'react';
import  '../style/navebar.css';


export default function Navbar() {
  return (
    <div className='nav'>
        <div className="search_input">
            <input type="search" placeholder='Search'></input>
        </div>
        <div className="logo">
            Mega
        </div>
        <div className="corner_link">
            <a href='/'>Register</a>
            <a href='/'>Login</a>
            <a href='/'>Cart</a>
        </div>
    </div>
  )
}
