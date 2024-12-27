import React from "react";
import { Routes, Route } from "react-router-dom";

//public routes
import Home from "../screen/HomePage.jsx";
import Login from "../screen/SIgnIn";
import SignUp from "../screen/SignUp";
import About from "../screen/about.jsx";
import Error from "../screen/ErrorPage.jsx";
import UserProvider from "../contexts/userContext";
import FreeUser from "../screen/FreeUser.jsx";
import Product from "../screen/Product.jsx";
import ParticularProduct from "../screen/ParticularProduct.jsx";

//private routes

import Dashboard from "../protectedscreen/Dashboard.jsx";
import Auth from "../protectedscreen/auth.jsx";
import AddProduct from "../protectedscreen/AddProduct.jsx";
import UpdateProduct from "../protectedscreen/updateProduct.jsx";
import WishlistProduct from "../protectedscreen/wishlistProduct.jsx";
import CartProduct from "../protectedscreen/cart.jsx";
import Checkout from "../protectedscreen/Checkout.jsx";
import Order from "../protectedscreen/Order.jsx";
import AdminOrder from "../protectedscreen/AdminOrder.jsx";
import Profile from "../protectedscreen/Profile.jsx";

export default function routes() {
  return (
    <React.Fragment>
      {/* customhooks and contextapi  */}
      <UserProvider>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/free-users" element={<FreeUser />}></Route>

          {/* private routes */}
         
          <Route path="/" element={ <Auth/>}>
          <Route path="/add-product" element={<AddProduct />}></Route>
          <Route path="/update-product/:id" element={<UpdateProduct />}></Route>
          <Route path="/wishlist" element={<WishlistProduct />}></Route>
          <Route path="/cart" element={<CartProduct />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/admin/order" element={<AdminOrder />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:id" element={<ParticularProduct />}></Route>
          </Route>
          
          {/*if any routes not found */}
          <Route path="*" element={<Error />} />

        </Routes>
      </UserProvider>
    </React.Fragment>
  );
}
