import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import "../firebase/firebase";
// Styles
import "./css/style.css";
import "./css/bootstrap.min.css";
// Images/SVG
import brandLogo from "./img/logo1.png";
import userProfile from "./svg/user-profile.svg";
import shoppingCart from "./svg/shopping-cart.svg";
import searchIcon from "./svg/search.svg";
import hamburger from "./svg/hamburger.svg";
import cross from "./svg/hide.svg";

export default function Navbar() {
  // State Variables
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUSer] = useState("Signin");

  //User Auth State
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUSer(user.displayName);
    } else {
      setUSer("Signin");
    }
  });

  function hamShow() {
    // Show NAV
    document.querySelector(".main-navbar").style.display = "block";
    document.querySelector(".main-menu").style.display = "block";
    document.querySelector(".ham-hide").style.display = "block";
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector(".container").style.boxShadow = "none";
    document.querySelector(".container").style.paddingBottom = "0";
  }
  function hamHide() {
    //Hide NAV
    document.querySelector(".main-navbar").style.display = "none";
    document.querySelector(".main-menu").style.display = "none";
    document.querySelector(".ham-hide").style.display = "none";
    document.querySelector(".hamburger").style.display = "block";
    document.querySelector(".container").style.boxShadow = "0px 1px #00000020";
    document.querySelector(".container").style.paddingBottom = "10px";
  }

  const history = useHistory();
  function changeRoute() {
    history.push({
      pathname: "/product",
      search: `?search=${searchQuery}`, // query string
      state: {
        searchQuery: searchQuery,
      },
    });
  }

  function onKeyPress() {
    var input = document.getElementById("search-input");

    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        document.getElementById("search-btn").click();
        event.stopImmediatePropagation();
      }
    });
  }

  function search(event) {
    event.preventDefault();
    changeRoute();
  }
  const updateSearchQuery = () => {
    setSearchQuery(document.getElementById("search-input").value);
  };

  return (
    <div>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="nav-img-name">
                {/* logo  */}
                <Link to={"/"}>
                  <img
                    src={brandLogo}
                    alt="logo"
                    style={{ width: "8vh" }}
                    className="nav-logo pb-2"
                  />
                </Link>
                <h1 className="nav-brand-name">
                  the<strong>Dukaandar</strong>
                </h1>
                <div className="hamburger" onClick={hamShow}>
                  {" "}
                  <img src={hamburger} width="35px" />{" "}
                </div>
                <div className="ham-hide" onClick={hamHide}>
                  {" "}
                  <img src={cross} width="20px" />{" "}
                </div>
              </div>

              <div className="col-xl-7 col-lg-7 col-md-10 col-sm-10 ml-auto mr-auto">
                <div className="header-search-form">
                  <input
                    id="search-input"
                    onKeyPress={onKeyPress}
                    onChange={updateSearchQuery}
                    type="text"
                    placeholder="Search on thepappustore ...."
                  />
                  <button id="search-btn" onClick={search}>
                    <img src={searchIcon} width="25px" />
                  </button>
                </div>
              </div>
              <div className="nav-cart-signin col-xl-4 col-lg-5">
                <div className="user-panel">
                  <div className="up-item">
                    <img src={userProfile} className="user-profile-image" />
                    <Link to={"/login"} className="signin">
                      {user}
                    </Link>
                  </div>
                  <div className="up-item">
                    <div className="shopping-card">
                      <img src={shoppingCart} className="shopping-cart-image" />
                      <span>3</span>
                    </div>
                    <Link to={"/cart"} className="shopping-cart">
                      Shopping Cart
                    </Link>
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
              <li>
                {" "}
                <Link to={"/womens"}>Womens</Link>{" "}
              </li>
              <li>
                <Link>Mens</Link>
              </li>
              <li>
                <Link>Kids</Link>
              </li>
              <li>
                <Link>
                  Jewelry
                  <span className="new">New</span>
                </Link>
              </li>
              <li>
                <Link>Shoes</Link>
                <ul className="sub-menu">
                  <li>
                    <Link>Sneakers</Link>
                  </li>
                  <li>
                    <Link>Sandals</Link>
                  </li>
                  <li>
                    <Link>Formal Shoes</Link>
                  </li>
                  <li>
                    <Link>Boots</Link>
                  </li>
                  <li>
                    <Link>Flip Flops</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Grocery</Link>
                <ul className="sub-menu">
                  <li>
                    <Link>Flour</Link>
                  </li>
                  <li>
                    <Link>Staples</Link>
                  </li>
                  <li>
                    <Link>Veegetables</Link>
                  </li>
                  <li>
                    <Link>Fruits</Link>
                  </li>
                  <li>
                    <Link>Confectionery</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
