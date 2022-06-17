import * as React from "react"
import "./ProductDetail.css"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";

export default function ProductDetail(props) {
    
    //state vars
    const [product, setProduct] = useState()

    let { productId } = useParams();

    let {handleAddItemToCart} = props.handleAddItemToCart 
    let {handleRemoveItemToCart} = props.handleRemoveItemToCart

    return (
        <div className="product-detail">
        <h1>
            Product Details Page 
            Product ID: {productId}
        </h1>
        </div>
    )
} 