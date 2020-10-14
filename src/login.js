import React from 'react'
import './components/css/login.css'
import googleLogo from "./components/svg/google.svg"
import brandLogo from "./components/img/logo1.png"
import {googleSignin} from './firebase/googleLogin'

function login() {

    

        return (
            <div className="background-div" >
                <nav className="login-nav" >
                    <img src={brandLogo} alt="logo"/>
                    <h2>thepappustore</h2>
                </nav>
                <form action="" className="login-form">
                    <h3>Login into your account</h3>
                    <h5 className="login-email" >Email</h5>
                    <input type="text" className="login-email-input" placeholder="Enter your email" />
                    <h5 className="login-password">Password</h5>
                    <input type="password" className="login-password-input" placeholder="Enter your password" />
                        <br />
                    <button className="login-button"  >Login</button>
                     <a href="" className="login-forgot-password">forgot password?</a>
                         <hr />
                    <button className="google-login" onClick={googleSignin()} > <span className="google-image"><img src={googleLogo} alt=""/> </span> Login with Google</button>
                </form>
            </div>
            )
        
}

export default login
