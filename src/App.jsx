
import './App.css';
import Home from "./pages/Home"

import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/Productlist';
import Cart from './pages/Cart';
import ProducT from './pages/ProducT';



function App() {
  return (
 <>


 
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/productlist/mens' element={<ProductList/>}/>
  <Route path='/productlist/women' element={<ProductList/>}/>
  <Route path='/productlist/kids' element={<ProductList/>}/>
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/Product/:id' element={<ProducT/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
 </Routes>

 </>
  );
}

export default App;
