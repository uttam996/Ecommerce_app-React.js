import React from "react";
import "../style/Newsletter.css";

export default function Newsletter() {
  return (
    <div className="Newsletter_cont">
      <div>
        <h1>Newsletter</h1>
        <p>Get timely updates from your favorite products.</p>
        <div className="Newsletter_input">
          <input type="email" />
         
          <i class="fa-regular fa-envelope"></i>
 
        </div>
      </div>
    </div>
  );
}
