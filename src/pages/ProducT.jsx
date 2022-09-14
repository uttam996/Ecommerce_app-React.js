import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Topbar from "../component/Topbar";
import "../style/productInfo.css";
import { publicRequest } from "../request";
import { useLocation } from "react-router-dom";
import Sppinner from "../component/Sppinner";
import { useDispatch } from 'react-redux';
import { addproduct } from "../redux/Cartredux";

const Swal = require("sweetalert2");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function ProducT() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch =useDispatch()

  const [qunatity, setquantity] = useState(1);
  const [loading, setloading] = useState(true);
  const [color,setcolor] =useState("")
  const [size,SetSize] =useState("")
  const [productdetail, setproductdetail] = useState({
    color: ["blue"],
    size: ["x"],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get("/product/" + id);
        console.log(res.data);
        setproductdetail(res.data);

        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);


  const handleCart =()=>{
   
    dispatch(
      addproduct({ ...productdetail, qunatity,color,size })
    )
    
    
    Toast.fire({
      icon: "success",
      title: "Added To Cart Suceesfully",
    });
  }
  return (
    <>
      <Navbar />
      <Topbar />
      <div className="product_cont">
        <div className="pro_img">
          {loading && <Sppinner />}
          <img src={productdetail.img} alt="eror" />
        </div>
        <div className="pro_des">
          <h2>{productdetail.title}</h2>
          <p>{productdetail.desc}</p>
          <span className="product_price">{productdetail.price}Rs</span>
          <div className="pro_sizeAndcoloe">
            <option>Color:</option>
            {productdetail.color.map((el) => {
              return (
                <div key={el}
                onClick={()=>{setcolor(el)}}
                  style={{
                    backgroundColor: `${el}`,
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    marginLeft: "-30px",
                    border: "1px solid grey",
                  }}
                ></div>
              );
            })}

            <span>
              Size :
              <select onChange={(e)=>{SetSize(e.target.value)}}>
                {productdetail.size.map((el) => {
                  return <option key={el} value={el}>{el}</option>;
                })}
              </select>
            </span>
          </div>
          <div className="inc_btn">
            <i
              onClick={() => setquantity(qunatity + 1)}
              className="fa-solid fa-plus"
            ></i>
            <span>{qunatity}</span>
            <i
              onClick={() => {
                qunatity === 1 ? setquantity(1) : setquantity(qunatity - 1);
              }}
              className="fa-solid fa-minus"
            ></i>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "skyblue",
                color: "White",
                border: "none",
                marginTop: "20px",
                padding: "10px",
                fontWeight: "600",
              }}
              onClick={handleCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
