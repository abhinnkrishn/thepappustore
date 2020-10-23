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
      document.querySelector(".container").style.boxShadow = "none";
  }
  function hamHide() {
    //Hide NAV
      document.querySelector(".main-navbar").style.display = "none";
      document.querySelector(".main-menu").style.display = "none";
      document.querySelector(".ham-hide").style.display = "none";
      document.querySelector(".hamburger").style.display = "block";
      document.querySelector(".container").style.boxShadow = "0px 1px #00000020";
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
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 text-center ml-auto">
            <div className="nav-img-name text-center" >
           {/* logo  */}
            <Link to={"/"} >
              <img 
              src={brandLogo} 
              alt="logo" 
              style={{width: "10vh" , height: "10vh"}}
              className="nav-logo pb-2"
              />
            </Link>
            <h1 className="nav-brand-name">the<strong>dukaandar</strong></h1>
            </div>
              <div className="hamburger" onClick={hamShow} > <img src={hamburger} width="35px" /> </div>
              <div className="ham-hide" onClick={hamHide} > <img src={cross} width="30px" /> </div>

          </div>
          <div className="col-xl-7 col-lg-7 col-md-10 col-sm-10 mr-auto">
            <div className="header-search-form">
              <input id="search-input" onKeyPress={onKeyPress} type="text" placeholder="Search on thepappustore ...." />
              <button id="search-btn" onClick={searchClick} > <img src={searchIcon} width="25px  " /> </button>
            </div>
          </div>
          <div className="ml-auto col-xl-4 col-lg-5">
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
                <Link to={"/"} className="shopping-cart" >Shopping Cart</Link>
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
          <li> <Link to={"/womens"}>Womens</Link> </li>
          <li><Link>Mens</Link></li>
          <li><Link>Kids</Link></li>
          <li>
            <Link>Jewelry
              <span className="new">New</span>
            </Link>
          </li>
          <li>
            <Link>Shoes</Link>
            <ul className="sub-menu">
              <li><Link>Sneakers</Link></li>
              <li><Link>Sandals</Link></li>
              <li><Link>Formal Shoes</Link></li>
              <li><Link>Boots</Link></li>
              <li><Link>Flip Flops</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#">Grocery</Link>
            <ul className="sub-menu">
              <li><Link>Flour</Link></li>
              <li><Link>Staples</Link></li>
              <li><Link>Veegetables</Link></li>
              <li><Link>Fruits</Link></li>
              <li><Link>Confectionery</Link></li>
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
