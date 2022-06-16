import * as React from "react"
import "./ProductDetail.css"
import { useParams, useNavigate } from "react-router-dom"

export default function ProductDetail() {

    let { productId } = useParams();

    return (
        <div className="ProductDetail">
        <h1>
            Product Details Page 
            Product ID: {productId}
        </h1>
        </div>
    )
} 