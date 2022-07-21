import React from "react";
import "../style/Cart.css";

export default function Cart() {
  return (
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
          <div className="product_OnCart">
            <img
              src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
              alt=""
              srcset=""
            />
            <div>
            <p>
              <b>Product : </b>JESSIE THUNDER SHOES
            </p>
            <p>
              <b>Product ID : </b>54422556543356
            </p>
            <p>
              <b>Size : </b>M
            </p>
            <p>
              <b>Colour : </b>REd
            </p>
            </div>
            <div>
              <p>+ 1 -</p>
              <h1>30$</h1>
            </div>
            
          </div>
          <div className="product_OnCart">
            <img
              src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
              alt=""
              srcset=""
            />
            <div>
            <p>
              <b>Product : </b>JESSIE THUNDER SHOES
            </p>
            <p>
              <b>Product ID : </b>54422556543356
            </p>
            <p>
              <b>Size : </b>M
            </p>
            <p>
              <b>Colour : </b>REd
            </p>
            </div>
            <div>
              <p>+ 1 -</p>
              <h1>30$</h1>
            </div>
            
          </div>
       
        </div>
        <div className="order_summary">
            <h2>Order Summary</h2>
            <div>
                <p>Subtotal</p>
                <p>50$</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>50$</p>
            </div>
            <div>
                <p>Disscount</p>
                <p>150$</p>
            </div>
            <div>
                <b>Total</b>
                <b>50$</b>
            </div>
            <button className="ck_btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
