import React from 'react'
import {Link} from "react-router-dom"
import {googleLogin, googleSignout, storeUser} from "./firebase/googleLogin"
// import Navbar from "./components/Navbar" 
import './components/css/login.css'
import googleLogo from "./components/svg/google.svg"
import brandLogo from "./components/img/logo1.png"
// import { MyContext } from './Context/Context'

// var Context = React.useContext(MyContext)

function login() {

    function handleClick(e) {
        e.preventDefault();
        googleLogin();
        
    }
    function handleClick1(e) {
        e.preventDefault();
        googleSignout();
    }
    
        return (
        <div>
            {/* <Navbar /> */}
            <div className="background-div" >
                <form action="" className="login-form">
                    <h3><strong>Login into your account</strong></h3>
                    <h5 className="login-email" >Email</h5>
                    <input type="text" className="login-email-input" placeholder="Enter your email" />
                    <h5 className="login-password">Password</h5>
                    <input type="password" className="login-password-input" placeholder="Enter your password" />
                        <br />
                    <button className="login-button">Login</button>
                     <Link to="" className="login-forgot-password">forgot password?</Link>
                         <hr />

                                    <button className="google-login" 
                                        onClick={handleClick} > 
                                        <span className="google-image"><img src={googleLogo} alt=""/></span>
                                        Sign in with Google
                                    </button>
                               
                    <Link to="/" onClick={handleClick1}>Signout</Link>
                    <Link to="/" >Home</Link>

                </form>
            </div>
        </div>
        )
        
}

export default login
