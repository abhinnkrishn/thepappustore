import React from 'react'
import { Link } from 'react-router-dom'
// import './login'
// import firebase from 'firebase'
import './css/style.css'
import './css/bootstrap.min.css'
import './css/index.css'
import brandLogo from "./img/logo1.png"



function Navbar() {

  
     return (

       
       <div>
       
    <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 text-center text-lg-left">
           {/* logo  */}
            <a href="./index.html" class="site-logo">
              <img src={brandLogo} alt="logo" style={{width: "10vh" , height: "10vh"}} />
            </a>
          </div>
          <div class="col-xl-6 col-lg-5">
            <div class="header-search-form">
              <input id="search-input" type="text" placeholder="Search on thepappustore ...." />
              <button id="search-btn"><i class="flaticon-search"></i></button>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="user-panel">
              <div class="up-item">
                <i class="flaticon-profile"></i>
                <Link to={'/login'} >Sign In</Link>  or <a href="#">Create Account</a>
              </div>
              <div class="up-item">
                <div class="shopping-card">
                  <i class="flaticon-bag"></i>
                  <span>0</span>
                </div>
                <a href="#">Shopping Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-navbar">
      <div class="container">
        {/* menu */}
        <ul class="main-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li>
            <a href="#">Jewelry
              <span class="new">New</span>
            </a>
          </li>
          <li>
            <a href="#">Shoes</a>
            <ul class="sub-menu">
              <li><a href="#">Sneakers</a></li>
              <li><a href="#">Sandals</a></li>
              <li><a href="#">Formal Shoes</a></li>
              <li><a href="#">Boots</a></li>
              <li><a href="#">Flip Flops</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="sub-menu">
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
