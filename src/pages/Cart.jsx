import React from "react";
import "../style/Cart.css";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";


export default function Cart() {
  const Cart =useSelector(state=>state.cart)
 
  return (
    <>
    <Navbar/>
  
    <div className="cart_container">
      <h1>Your Bag</h1>
      <div className="checkout_option">
        <button className="continue_shop">Continue Shoping</button>
        <div>
          <a href="/">Shopping Bag</a>
          <a href="/">Your Whistlist</a>
        </div>
        <button className="Checkout">Checkout</button>
      </div>

      <div className="order_details">
        <div className="prdoucts_detals">
          {Cart.products.map((el)=>{
            return (
              <div key={el._id} className="product_OnCart">
              <img
                src={el.img}
                alt=""
              
              />
              <div>
              <p>
                <b>Product : </b>{el.title}
              </p>
              <p>
                <b>Product ID : </b>{el._id}
              </p>
              <p>
                <b>Size : </b>{el.size}
              </p>
              <p>
                <b>Colour : </b>

                <div 
                  style={{
                    backgroundColor: `${el.color}`,
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display:"inline-block",
                 
                    border: "1px solid grey",
                  }}
                ></div>
              </p>
              </div>
              <div>
              
                <h1>{el.price}RS</h1>
              </div>
              
            </div>
            )
          })}
     
        
       
        </div>
        <div className="order_summary">
            <h2>Order Summary</h2>
            <div>
                <p>Subtotal</p>
                <p>{Cart.total}Rs</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <div>
                <p>Disscount</p>
                <p>150Rs</p>
            </div>
            <div>
                <b>Total</b>
                <b>{Cart.total-150} Rs</b>
            </div>
            <button className="ck_btn">Checkout</button>
        </div>
      </div>
    </div>
    </>
  );
}
