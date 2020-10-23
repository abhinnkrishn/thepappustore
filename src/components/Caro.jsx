import React from 'react'
import "./css/caro.css"
// import "../javascript/caro.js"
import b1 from "./img/ft_images/banner-1.jpg"
import b2 from "./img/ft_images/banner-2.jpg"
import b3 from "./img/ft_images/banner-3.jpg"
import b4 from "./img/ft_images/banner-4.jpg"

export default function Caro() {

    var items = [
        {
            title: "Vivo x80",
            Price: "24,000",
            disc: 14,
            src : b1
        }, {
            title: "Godrej ultrakool d350",
            Price: "235,000",
            disc: 30,
            src : b2
        }, {
            title: "Samsung d8 pro",
            Price: "40,000",
            disc: 8,
            src : b3
        }, {
            title: "Livi Cotton",
            Price: "3,990",
            disc: 55,
            src : b4
        },
    ]

    var display = items.map(item =>
             <div id="slides">
                 <div className="slide">
                  <img src={item.src} alt=""/>
                  <div className="caro-info">
                    <h2><strong>{item.title}</strong></h2>
                    <p>price: &#x20B9;{item.Price}</p>
                    <p>{item.disc}% OFF</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores? Dignissimos, consectetur, incidunt dolores temporibus minima tempora sint, beatae nisi sed tempore totam at officia quos architecto. Reprehenderit, ratione explicabo.</h5>
                    <button>Add to Cart</button>
                 </div>
                 </div>
                 <hr />
            </div>
        )


    return (

        <div>
            <h3 style={{margin: "7px 15px", textDecoration: "underline"}} ><strong>Winter Clearence</strong></h3>
           {display}
        </div>
    )
}
