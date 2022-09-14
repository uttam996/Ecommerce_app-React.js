import React from "react";
import "../style/navebar.css";
import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userSlice"


export default function Navbar() {
  const dispatch=useDispatch()
  const Quantity =useSelector(state=>state.cart.quantity)
  const user =useSelector(state=>state.user.currentUser)

  const Handlelogout=()=>{
    dispatch(logout())
  }
 


  return (
    <div className="nav">
      <div className="search_input">
        <div>
          <input type="search" placeholder="Search"></input>
        </div>
        <div>
          <button>
            
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="logo">Mega</div>
      <div className="corner_link" style={{
        display:"flex",
        margin:"0px 10px"
      }}>
        {user?<p>{user.user.username}</p>: <Link to="/register">Register</Link>}
        {user?<p onClick={Handlelogout}>Logout</p>:    <Link to="/login">Login</Link>}
       
  
        <Link to="/Cart"> <i style={{position:"relative"}} className="fa-solid fa-cart-shopping"><span style={
          {
            backgroundColor:"black",
            color:"white",
           position:"absolute",
           top:"-5px",
           padding:"2px",
           fontSize:"12px",
           borderRadius:"50%"
          }
        }>{Quantity}</span></i></Link>
    
      </div>
    </div>
  );
}
