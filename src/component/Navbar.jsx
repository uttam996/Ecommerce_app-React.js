import React from "react";
import "../style/navebar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="search_input">
        <div>
          <input type="search" placeholder="Search"></input>
        </div>
        <div>
          <button>
            
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="logo">Mega</div>
      <div className="corner_link">
        <a href="/">Register</a>
        <a href="/">Login</a>
        <a href="/"> <i class="fa-solid fa-cart-shopping"></i></a>
       
      </div>
    </div>
  );
}
