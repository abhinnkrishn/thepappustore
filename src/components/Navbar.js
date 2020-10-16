import React from 'react'
import { Link } from 'react-router-dom'
import {searchClick} from "../javascript/productSearch.js"
// import {googleSignin} from '../firebase/googleLogin'
// Styles
import './css/style.css'
import './css/bootstrap.min.css'
// Images/SVG
import brandLogo from "./img/logo1.png"
import userProfile from "./svg/user-profile.svg"
import shoppingCart from "./svg/shopping-cart.svg"
import searchIcon from "./svg/search.svg"
import hamburger from "./svg/hamburger.svg"




function Navbar() {

     return (
  <div>   
    <header className="header-section">
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-center text-lg-left">
           {/* logo  */}
            <a href="./index.html" className="site-logo">
              <img src={brandLogo} alt="logo" style={{width: "10vh" , height: "10vh"}} />
            </a>
              <div className="hamburger"> <img src={hamburger} width="35px" /> </div>

          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="header-search-form">
              <input id="search-input" type="text" placeholder="Search on thepappustore ...." />
              <button id="search-btn" onClick={searchClick} > <img src={searchIcon} width="25px  " /> </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="user-panel">
              <div className="up-item">
                <img src={userProfile} className="user-profile-image" />
                <Link to={'/login'} className="signin" >Sign In</Link> 
              </div>
              <div className="up-item">
                <div className="shopping-card">
                  <img src={shoppingCart} className="shopping-cart-image" />
                  <span>0</span>
                </div>
                <a href="#">Shopping Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="main-navbar">
      <div className="container">
        {/* menu */}
        <ul className="main-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li>
            <a href="#">Jewelry
              <span className="new">New</span>
            </a>
          </li>
          <li>
            <a href="#">Shoes</a>
            <ul className="sub-menu">
              <li><a href="#">Sneakers</a></li>
              <li><a href="#">Sandals</a></li>
              <li><a href="#">Formal Shoes</a></li>
              <li><a href="#">Boots</a></li>
              <li><a href="#">Flip Flops</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li><a href="./product.html">Product Page</a></li>
              <li><a href="./category.html">Category Page</a></li>
              <li><a href="./cart.html">Cart Page</a></li>
              <li><a href="./checkout.html">Checkout Page</a></li>
              <li><a href="./contact.html">Contact Page</a></li>
            </ul>
          </li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
    </nav>
  </header>
  {/* Header section end  */}
        </div>
    )
}

export default Navbar
