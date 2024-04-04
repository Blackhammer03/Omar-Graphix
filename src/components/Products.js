import React from "react"
import web from "../images/web.png"

function Products(){
  return (
    <div className="products">
      <div className="product-header">
        <h1>Your Graphic<br/>Design In<br/>Market</h1>
        <p>Where Print and Design Comes To Life</p>
      </div>
      <div className="product-image">
        <img className="p-image" src={web} />
      </div>
      <div className="buttons">
        <button className="productsoetscmeia-button">Products</button>
        <button className="learnMore-button">
          Learn More
        </button>
      </div>
      
    </div>
  )
}

export default Products