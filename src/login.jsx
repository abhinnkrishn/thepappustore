import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./firebase/firebase.js";
import "./components/css/login.css";
import googleLogo from "./components/svg/google.svg";
import brandLogo from "./components/img/logo1.png";

function login() {

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("AUTH STATE: USER IS LOGGED IN");
      console.log(user);
    } else {
      console.log("AUTH STATE: USER IS LOGGED OUT");
    }
  });

  function googleLogin(event) {
    event.preventDefault();
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function (result) {
        var user = result.user;
        console.log(user);
      })
      .catch(function (error) {
        console.log("ERROR HAPPENED", error);
      });
  }

  function googleSignout(event) {
    event.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("USER SIGNED OUT");
      })
      .catch(function (error) {
        console.log("ERROR IN SIGNOUT", error);
      });
  }
  return (
    <div>
      <nav className="login-nav">
        <Link to="/">
          <img src={brandLogo} alt="Home" />
        </Link>
        <h2>
          the<strong>Dukaandar</strong>
        </h2>
      </nav>
      <div className="background-div">
        <form action="" className="login-form">
          <h3>
            <strong>Login into your account</strong>
          </h3>
          <h5 className="login-email">Email</h5>
          <input
            type="text"
            className="login-email-input"
            placeholder="Enter your email"
          />
          <h5 className="login-password">Password</h5>
          <input
            type="password"
            className="login-password-input"
            placeholder="Enter your password"
          />
          <br />
          <button className="login-button">Login</button>
          <Link className="login-forgot-password">forgot password?</Link>
          <hr />

          <button className="google-login" onClick={googleLogin}>
            <span className="google-image">
              <img src={googleLogo} alt="" />
            </span>
            Sign in with Google
          </button>

          <Link to="/" onClick={googleSignout}>
            Signout
          </Link>
        </form>
      </div>
    </div>
  );
}

export default login;
