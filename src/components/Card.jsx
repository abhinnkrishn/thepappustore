import React from 'react'
import "./css/card.css"
import productImage from "./img/productDisplay.png"
import star from "./svg/star.svg"
// import { matchedData } from "../javascript/productSearch"

function card(props) {
    return (
        <div>
            <div key={props.index} className="card-container">
                <div className="card-image">
                    <img src={productImage} alt="Product Display" width="200px" />
                </div>
                <div className="card-info">
                    <h5 className="card-title"><strong>{props.data.name}</strong></h5>
                    <p className="card-price">{props.data.price}</p>
                    <p className="card-rating">{props.data.rating}</p>
                    <p className="card-stock"><strong>Stock: </strong><span>{props.data.stock}</span></p>
                    <h6 className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae excepturi doloribus quis debitis consequuntur, quaerat amet impedit. Non, corporis.</h6>
                    <button className="cart-add-to-cart">Add to Cart</button>
                    <img src={star} alt="Favrouite" className="card-fav-star" width="15px"/>
                    <span className="card-fav" >Favoruite</span>
                </div>
            </div> 
        </div>
    
    )
    
}

export default card
