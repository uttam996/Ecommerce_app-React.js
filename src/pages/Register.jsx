import React, { useState } from 'react';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom';
import "../style/Register.css";
import { publicRequest } from '../request';
import { Toast } from '../component/toast';



export default function Register() {

 let navigate=useNavigate()
  const [newUser,setnewuser]=useState({
    username:"",
     email:"",
     password:"",
  })

  const creteuser=(event)=>{
    setnewuser({
      ...newUser,
      [event.target.name]:event.target.value
    })
  }

  const handlecreate= async()=>{
    try {
      const res = await publicRequest.post("/auth/register", newUser);
      Toast.fire({
        icon: "success",
        title: "Accout created Succesfully",
      });

      navigate('/');
    } catch (error) {
      console.log()
      Toast.fire({
        icon: "success",
        title: error,
      });
    }
  
    
  
  }
  return (
   
    <>
    <Navbar/>
 <div className="register_main">
    <div className='register_cont'>
      <h2>Crete an account</h2>
      <div className="register_form">
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder="Last name"/>
        <input onChange={creteuser} type="text"  name='username'  placeholder='Username'/>
        <input onChange={creteuser} type="email"  name='email' placeholder='Email'/>
        <input onChange={creteuser} type="password" name='password'  placeholder='Password'/>
      
     
      </div>
        <p>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></p>
        <button onClick={handlecreate} className="crete_btn">
            CREATE
        </button>
    </div>
    </div>
    <Footer/>
    </>
  )
}
