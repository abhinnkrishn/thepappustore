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
            title: "lorem ipsur",
            Price: "20,000",
            disc: 30,
            src : b1
        }, {
            title: "lorem ipsur",
            Price: "20,000",
            disc: 30,
            src : b2
        }, {
            title: "lorem ipsur",
            Price: "20,000",
            disc: 30,
            src : b3
        }, {
            title: "lorem ipsur",
            Price: "20,000",
            disc: 30,
            src : b4
        },
    ]

    var display = items.map(item =>
             <div id="slides">
                 <div className="slide">
                  <img src={item.src} alt="product-image" />
                  <div className="caro-info">
                    <h3>{item.title}</h3>
                    <p>price: {item.Price}</p>
                    <p>{item.disc}% OFF</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores? Dignissimos, consectetur, incidunt dolores temporibus minima tempora sint, beatae nisi sed tempore totam at officia quos architecto. Reprehenderit, ratione explicabo.</h5>
                    <button>Add to Cart</button>
                 </div>
                 </div>
            </div>
        )


    return (

        <div>
           {display}
        </div>
    )
}
