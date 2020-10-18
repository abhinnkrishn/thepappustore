import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import b1 from "./components/img/womenProduct/1.jpg"


export default function Women() {
    return (
        <div>
            <Navbar />
            <div>
                <img src={b1} alt=""/>
            <div>
                <h5></h5>
                <p>2,999</p>
                <button>Add to Cart</button>
            </div>
            </div>
            <Footer />
        </div>
    )
}
