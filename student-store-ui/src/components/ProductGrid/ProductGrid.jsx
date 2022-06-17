
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
  //convert our object to an array 
  let ourProducts = (props.products !== '' ? Object.values(props.products) : null)
  return (
    <div className="product-grid">
      <div className="content">
        <h3>Best selling products</h3>
      </div>
     
      {ourProducts !== null ? 
        ourProducts.map((product, index) =>
        
        <ProductCard 
        key={product + '-' + index}
        product={product} 
        showDescription={false}/>



      ) : null}

    </div>
  )
}



