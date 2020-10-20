import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import "./components/css/women.css"
import b1 from "./components/img/womenProduct/1.jpg"
import b2 from "./components/img/womenProduct/2.jpg"
import b3 from "./components/img/womenProduct/3.jpg"
import b4 from "./components/img/womenProduct/4.jpg"
import b5 from "./components/img/womenProduct/5.jpg"
import b6 from "./components/img/womenProduct/6.jpg"
import b7 from "./components/img/womenProduct/7.jpg"
import b8 from "./components/img/womenProduct/8.jpg"
import b9 from "./components/img/womenProduct/9.jpg"
import b10 from "./components/img/womenProduct/10.jpg"
import b11 from "./components/img/womenProduct/11.jpg"
import b12 from "./components/img/womenProduct/12.jpg"
import star from "./components/svg/star.svg"
// import "./javascript/women.js"

export default function Women() {

    var images = [b1, b10, b11, b4, b5, b6, b7, b8, b9, b2 , b3, b12];

    return (
        <div>
            <Navbar />
            
            {images.map(image =>
            <div className="women-product-card" >
                <div className="women-product-image">
                    <img src={image} alt="product-image" width="200px" />
                </div>
                 <div  className="women-product-detail">
                    <h5>Lorem Ipsum</h5>
                    <p className="women-product-price" >&#x20B9;2,999</p>
                    <p className="women-product-dis" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero officiis quidem excepturi dignissimos odio qui sint, iure quas, commodi quod ipsam, corrupti minima ullam delectus laborum! Sed, corporis illo!</p>
                    <button>Add to Cart</button>
                    <img src={star} width="20px" className="women-star" />
                </div>
                <hr />
            </div>
            )}
            <Footer />
        </div>
    )
}
