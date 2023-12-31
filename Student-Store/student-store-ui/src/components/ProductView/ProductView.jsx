import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./ProductView.css"

function ProductView(props) {
    
    let {productId} = props.productId
    let quantity = props.shoppingCart.length === 0 ? 0 : props.shoppingCart.find(prod => prod.id == props.product.id);
    

    

    return (
        <div className="product-view">
            
            <ProductCard 
            product ={props.product}
            productId = {props.productId}
            quantity ={quantity !== 0 ? quantity : 0}
            handleAddItemToCart = {props.handleAddItemToCart}
            handleRemoveItemToCart = {props.handleRemoveItemToCart}
            showDescription={true}
            shoppingCart={props.shoppingCart}
            />
        </div>
    )
}

export default ProductView