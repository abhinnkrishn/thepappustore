import React from 'react'
import "./css/bootstrap.min.css"
import productImage from "./img/productDisplay.png"


function card() {
    const name = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={productImage} className="card-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
    <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default card
