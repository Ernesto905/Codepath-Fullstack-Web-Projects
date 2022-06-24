
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"
import "./ProductGrid.css"


export default function ProductGrid(props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  let quantity = props.shoppingCart !== [] ? null : props.shoppingCart.find(prod => prod.id == props.product.id);

  

  //object manipulation 
  let ourProducts = (props.products !== '' ? Object.values(props.products) : null)
  

  return ( 
    <div className="product-grid">
      <div className="content">
        <h3>Best selling products</h3>
      </div>

      <input type="text" name="search" placeholder="Search" onChange={e => setQuery(e.target.value)}></input>  
            
            <div className='category-menu open'>
                <li>
                    <button onClick={() => setCategory('')}>All categories</button>
                </li>
                <li>
                    <button onClick={() => setCategory('clothing')}>Clothing</button>
                </li>
                <li>
                <button onClick={() => setCategory('food')}>Food</button>
                </li>
                <li>
                <button onClick={() =>setCategory('accessories')}>Accessories</button>
                </li>
                <li>
                <button onClick={() =>setCategory('tech')}>Tech</button>
                </li>
            </div>
      
      
      {ourProducts !== null ? 
        ourProducts.
        filter(product=>product.name.toLowerCase().includes(query)).
        filter(product=>product.category.includes(category)).
        map(
          (product, index) =>

          <ProductCard 
          key={product + '-' + index}
          shoppingCart={props.shoppingCart}
          product={product} 
          showDescription={false}
          productId={props.productId}
          quantity = {quantity}
          handleAddItemToCart = {props.handleAddItemToCart} 
          handleRemoveItemToCart = {props.handleRemoveItemToCart}
          />
        ) : null}

    </div>
  )
}



