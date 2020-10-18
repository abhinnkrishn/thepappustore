import React from 'react'
import "./css/BestSeller.css"
import b1 from "./img/best_seller_images/banner-1.jpg"
import b2 from "./img/best_seller_images/banner-2.jpg"
import b3 from "./img/best_seller_images/banner-3.jpg"
import b4 from "./img/best_seller_images/banner-4.jpg"
import b5 from "./img/best_seller_images/banner-5.jpg"
import b6 from "./img/best_seller_images/banner-6.jpg"
import b7 from "./img/best_seller_images/banner-7.jpg"
import b8 from "./img/best_seller_images/banner-8.jpg"
// import "../javascript/bestSeller"

export default function BestSeller() {

    var items = [
        {
            src: b1,
            title: "Sony D3xYT",
            price: "45,000"
        },
        {
            src: b2,
            title: "Phillips xHm3",
            price: "2,999"
        },
        {
             src: b3,
            title: "Skullcandy 3 prox",
            price: "6,399"
        },
        {
             src: b4,
            title: "Phillips LED",
            price: "100"
        },
        {
             src: b5,
            title: "Bear Sweatshirt",
            price: "659"
        },
        {
             src: b6,
            title: "HP Officejet Dx30",
            price: "6,999"
        },
        {
             src: b7,
            title: "Alexa Dot",
            price: "3,999"
        },
        {
             src: b8,
            title: "Bass",
            price: "9,999"
        }
         
    ]
   
   const display = items.map((item) => 
    <div>
    <img src={item.src} alt="product-image"/>
    <span>
        <h5>{item.title}</h5>
        <p>Price: {item.price}</p>
        <button>Add to Cart</button>
    </span>
    </div>
    )
    return (
        <div className="bs-div">
                <h3>Best Sellers</h3>
            <div className="bs-container">
                {display}
            </div>
        </div>
    )
        
}
