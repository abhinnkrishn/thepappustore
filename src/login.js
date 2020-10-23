import React from 'react'
import './components/css/login.css'
import googleLogo from "./components/svg/google.svg"
import brandLogo from "./components/img/logo1.png"
import googleSignin from './firebase/googleLogin'
import "./components/Navbar"
import {Link} from "react-router-dom"

function login() {
        
        return (
            <div className="background-div" >
                <nav className="login-nav" >
                    <img src={brandLogo} alt="logo"/>
                    <h2>the<strong>Dukaandar</strong></h2>
                </nav>
                <form action="" className="login-form">
                    <h3><strong>Login into your account</strong></h3>
                    <h5 className="login-email" >Email</h5>
                    <input type="text" className="login-email-input" placeholder="Enter your email" />
                    <h5 className="login-password">Password</h5>
                    <input type="password" className="login-password-input" placeholder="Enter your password" />
                        <br />
                    <button className="login-button">Login</button>
                     <Link className="login-forgot-password">forgot password?</Link>
                         <hr />
                    <button className="google-login" onClick={googleSignin()} > <span className="google-image"><img src={googleLogo} alt=""/> </span> Login with Google</button>
                    <Link to={"/"}>Back to Home</Link>
                </form>
            </div>
            )
        
}

export default login
