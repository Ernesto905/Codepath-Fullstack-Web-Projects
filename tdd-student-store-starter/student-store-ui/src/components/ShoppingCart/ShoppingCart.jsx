import React from 'react'
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
    //math 
    let total = 0
    let taxes = 0
    let final = 0
    //find product 
    
    //for each ID in shopping cart find the first product that matches the id. Then push that product into the products array
    let products = [];
    props.shoppingCart.forEach(element => {

        products.push(props.products.find(item => item.id == element.id))

    });
    
    
    return props.shoppingCart.length !== 0 ? (

        <div className="shopping-cart">
            {props.shoppingCart.map((item, index) => {
                let productDetails = props.products.find(element => element.id === item.id);

                //mathy stuff
                total += productDetails.price*item.quantity;
                
                taxes = (total*0.0875)
                final += total
                final += (total*0.0875)

                return (
                    <div className='individual-product'>
                        <div className='cart-product-name'>{`Product name: ${productDetails.name} `}</div>
                        <div className='cart-product-quantity'>{`Quantity: ${item.quantity} `}</div>
                        <div className=' subtotal'>{`Subtotal $${total.toFixed(2)}`}</div>
                        
                    </div>
                )
                
            })}
            <div className='taxes'>{`Taxes: $${taxes.toFixed(2)}`}</div>
            <div className='total-price'>{`Total price: $${final.toFixed(2)}`}</div>
         </div>

    ) : (<p>No items added to cart yet. Start shopping now!</p>)
    
}

