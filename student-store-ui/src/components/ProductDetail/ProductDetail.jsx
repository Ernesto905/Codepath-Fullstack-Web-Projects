import * as React from "react"
import "./ProductDetail.css"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail(props) {
    
    //state vars
    const [product, setProduct] = useState([])
    
    
    let { productId } = useParams();


    //Connect to API  
    try{
        const getData = async () => {

        const response  = await axios.get(`http://localhost:3002/store/${productId}`);
        
        setProduct(response.data)

        };

        useEffect(() => {
        getData();
        }, []);
        
    } catch (error) {
        console.log(error)
    }

    
    

    return (
        <div className="product-detail">
            <h1 className="detail-title">
                Product Details Page 
                Product ID: {productId}
            </h1>
                {product ? <ProductView 
                product={product}
                productId={productId - 1 }
                quantity={1}
                shoppingCart={props.shoppingCart}
                showDescription={false}
                handleAddItemToCart = {props.handleAddItemToCart} 
                handleRemoveItemToCart = {props.handleRemoveItemToCart}
                /> : <NotFound/>}
        </div>
    )
} 