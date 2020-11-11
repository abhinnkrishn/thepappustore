import React from 'react'
import { Link } from "react-router-dom"
import Logo from "./components/img/logo1.png"
import Card from "./components/Card"
import"./components/css/cart.css"
import "./javascript/cart.js"

export default function Cart() {
    
    var data = [
        {
    name: "iPhone 12 Space Black",
    price: "1,12,322" ,
    description: "",
    rating: 4.8 ,
    stock: "in stock",
    image: ""
    },
    {
    name: "iPhone 12 Space Black",
    price: "1,12,322" ,
    description: "",
    rating: 4.8 ,
    stock: "in stock",
    image: ""
    },
    {
    name: "iPhone 12 Space Black",
    price: "1,12,322" ,
    description: "",
    rating: 4.8 ,
    stock: "in stock",
    image: ""
    }
    ]
  
    return (
        <div>
            <div className="cart-navbar">
                <Link to={"/"}>
                <img src={Logo} alt="Home" className="cart-image" width="50px" />
                </Link>
                <h1 className="cart-name">the<strong>Dukaandar</strong></h1>
                <h1 className="cart-cart-text" >Cart</h1>
            </div>
            <div className="cart-container">
                <div className="cart-cards">
                    {
                        data.map((data, index) => 
                            <Card data={data} index={index} />
                            )
                    }
                </div>
                <div className="cart-info">
                    <h5 className="" ><strong>Subtotal(3 Items): 949</strong></h5>
                    <input type="text" placeholder="APPLY COUPON"/>
                    <p id="select-coupon">Select</p>
                    <br/>
                    <button>Checkout</button>
                </div>
            </div>
           {/* Modal */}
            <div id="myModal" class="modal"> 
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p><strong>DIWALI10</strong> Get 10% on shopping for &#x20B9;1000 or more.</p>
                    <p><strong>WELCOME5</strong> Get 5% on shopping for the firs time.</p>
                    <p><strong>XYZKDN</strong> Get upto 30% off on paying with any online method.</p>
                </div>
            </div>
        </div>
       
    )
}
