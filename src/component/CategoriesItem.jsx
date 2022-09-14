import React from "react";
import {Link} from "react-router-dom"

export default function CategoriesItem(props) {
  return (
    <div
      style={{
        position: "relative",
        width:"31%"
      }}
    >
      <Link to={`/productlist/${props.cat}`}>
      
      <img
        style={{
          height: "80vh",
          width:"100%",
          opacity:"0.7",
       
        }}
        src={props.img} alt="error"
      />
      <div style={{
        position:"absolute",
  
        top:"50%",
        left:"50%",
        width:"100%",
        textAlign:"center",
        color:"white",
        
        transform:"translate(-50%,-50%)"
      }}>
        <h1>{props.tittle}</h1>
        <div style={{
            backgroundColor:"white",
            display:"inline-block",
            color:"black",
            marginTop:"20px",
            padding:"5px 10px 5px 10px",
            fontWeight:"600",
        }} className="shop_btn">SHOP</div>
      </div>
      </Link>
    </div>
  );
}
