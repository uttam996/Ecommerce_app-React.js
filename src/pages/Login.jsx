import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import "../style/Login.css";
import { CircularProgress } from '@chakra-ui/react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';




export default function Login() {
  const dispatch =useDispatch();
  const {error,isFetching} =useSelector(state =>state.user);
  
  const [Username,SetUsername] = useState("");
  const [password,SetPassword] = useState("");
  const User=useSelector(state=>state.user.currentUser)
  let navigate = useNavigate();

if(User){
  navigate('/');
}

  const handleLogin = (e)=>{
  e.preventDefault();
  login(dispatch,{
    "username":Username,
    "password":password
    })

  }
   
  return (
    <>
   
    <Navbar/>
    <div className='login_main'>


    <div className='Login_cont'>
    <h2>LOGIN</h2>
    <div className="Login_form">
      <input type="text" placeholder='Username' onChange={(e)=>{SetUsername(e.target.value)}}/>
      <input type="password" placeholder='Password' onChange={(e)=>{SetPassword(e.target.value)}}/>
      
   
    </div>
     {isFetching?  <CircularProgress isIndeterminate color='green.400' />: <button onClick={handleLogin} className="Login_btn">Login  
      </button>}
     
  </div>
  </div>
  <Footer/>
   </>
  )
}
