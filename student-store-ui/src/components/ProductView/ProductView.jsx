import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductView(props) {
    let {product} = props.product
    let {productId} = props.productId
    let {quantity} = props.quantity
    let {handleAddItemToCart} = props.handleAddItemToCart 
    let {handleRemoveItemToCart} = props.handleRemoveItemToCart 

    return (
        <div className="product-view">
            <h1 className="product-id">Product # {productId}</h1> 
            <ProductCard 
            product ={props.product}
            productId = {props.productId}
            quantity ={props.quantity}
            handleAddItemToCart = {props.handleAddItemToCart}
            handleRemoveItemToCart = {props.handleRemoveItemToCart}
            showDescription={true}
            />
        </div>
    )
}

export default ProductView