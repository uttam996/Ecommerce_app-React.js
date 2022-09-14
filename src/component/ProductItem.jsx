import React from "react";
import "../style/product.css";
import { popularProducts } from "../Data";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { publicRequest } from "../request";
import { useSelector } from "react-redux";


export default function ProductItem(path, filter, sort) {
  let arr=[];
  let [product, setproduct] = useState(popularProducts);
  let [Filterproduct, SetFilterproduct] = useState(popularProducts);

  let cat = path.cat.cat;

  const Filter = useSelector((state) => state.filters.filter);
 

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let url = `/product?category=${cat}`;
        if (cat === undefined) {
          url = "/product";
        }
        const res = await publicRequest.get(url);
     
        if (cat === undefined) {
          setproduct(res.data.slice(0, 8));
          SetFilterproduct(res.data.slice(0, 8));
        } else {
          
          setproduct(res.data);
          SetFilterproduct(res.data);
          console.log(res.data)
        }
      } catch (error) {}
    };

    fetchdata();
  }, [cat]);

  useEffect(() => {
    if (Filter.color) {
      SetFilterproduct(
        product.filter((el) => {
          return el.color == Filter.color ;
        })
      );
      
    }
    if (Filter.size) {
      SetFilterproduct(
        product.filter((el) => {
          return el.size.includes(Filter.size);
        })
      );
    }
  }, [Filter.color,Filter.size,product]);

  // useEffect(()=>{
  //   SetFilterproduct(Filterproduct.filter((el)=>{
  //           return el.size.includes(Filter.size)
  //   }))
  // },[])
  return (
    <>
      {Filterproduct.map((el) => {
        return (
          <div key={el._id} className="product_card">
            <div className="circle">
              <img src={el.img} alt="Error" />
            </div>
            <div className="info">
              <Link to={`/Product/${el._id}`}>
                <i className="fa fa-search"></i>{" "}
              </Link>
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
        );
      })}
    </>
  );
}
