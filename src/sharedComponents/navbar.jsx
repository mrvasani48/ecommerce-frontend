import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../assets/css/navbar.css'
export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cart?.length);
  const navigate = useNavigate();

  const islogin = localStorage.getItem("islogin");
  const userRole = localStorage.getItem("role");

  const logoutHandler = () => {
    localStorage.setItem("islogin", "false");
    localStorage.setItem("role", "none");
    localStorage.setItem("profile", "none");
    toast.success("logout successfully",{autoClose: 1000,})
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashbord
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/free-users">
                  Free-User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              {(islogin == "true"&& userRole=="admin" )&& (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/add-product">
                      Add Product
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/order">
                      Order
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                      profile
                    </NavLink>
                  </li>
                </>
              )}
              {(islogin == "true"&& userRole=="user" )&& (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/wishlist">
                      Wishlist
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/order">
                      Order
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                      profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                      <p className="cart">{cartItems?cartItems:0}</p>
                      <img height="40px" width="40px" src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"></img>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {islogin == "true" ?
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              Logout
            </button>
            : <>
              <NavLink className="nav-link" to="login">
                Sign-In
              </NavLink>
              <NavLink className="nav-link" to="sign-up">
                Sign-Up
              </NavLink>     
            </>
          }
        </div>
      </nav>
    </>
  );
}
