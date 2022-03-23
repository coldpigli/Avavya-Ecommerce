import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Home, Products, Wishlist, Cart, Login, Signup, ErrorPage, MockMan } from '../pages';

const RoutingPath = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Mockman" element={<MockMan/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  )
}

export default RoutingPath;