import React from 'react'
import { Link } from 'react-router-dom'
import {searchClick} from "../javascript/productSearch.js"
// Styles
import './css/style.css'
import './css/bootstrap.min.css'
// Images/SVG
import brandLogo from "./img/logo1.png"
import userProfile from "./svg/user-profile.svg"
import shoppingCart from "./svg/shopping-cart.svg"
import searchIcon from "./svg/search.svg"
import hamburger from "./svg/hamburger.svg"
import cross from "./svg/hide.svg"


function Navbar() {

  function hamShow() {
      // Show NAV
      document.querySelector(".main-navbar").style.display = "block";
      document.querySelector(".main-menu").style.display = "block";
      document.querySelector(".ham-hide").style.display = "block";
      document.querySelector(".hamburger").style.display = "none";
  }
  function hamHide() {
    //Hide NAV
      document.querySelector(".main-navbar").style.display = "none";
      document.querySelector(".main-menu").style.display = "none";
      document.querySelector(".ham-hide").style.display = "none";
      document.querySelector(".hamburger").style.display = "block";
  }

function onKeyPress() {
  var input = document.getElementById("search-input");
  
  input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("search-btn").click();
      event.preventDefault();
    }
  });
}



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
              <div className="hamburger" onClick={hamShow} > <img src={hamburger} width="35px" /> </div>
              <div className="ham-hide" onClick={hamHide} > <img src={cross} width="30px" /> </div>

          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="header-search-form">
              <input id="search-input" onKeyPress={onKeyPress} type="text" placeholder="Search on thepappustore ...." />
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
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Kids</a></li>
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
            <a href="#">Grocery</a>
            <ul className="sub-menu">
              <li><a href="./product.html">Flour</a></li>
              <li><a href="./category.html">Staples</a></li>
              <li><a href="./cart.html">Veegetables</a></li>
              <li><a href="./checkout.html">Fruits</a></li>
              <li><a href="./contact.html">Confectionery</a></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </nav>
  </header>
  {/* Header section end  */}
        </div>
    )

}

export default Navbar
