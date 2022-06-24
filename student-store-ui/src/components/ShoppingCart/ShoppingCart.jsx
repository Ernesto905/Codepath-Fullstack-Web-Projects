import React from 'react'

export default function ShoppingCart(props) {
    //math 

    //find product 
    
    //for each ID in shopping cart find the first product that matches the id. Then push that product into the products array
    let products = [];
    props.shoppingCart.forEach(element => {
        products.push(props.products.find(item => item.id == element.id))
    });
    
    

    //find product details
    //for each products, find the shopping card id tht matches, then return that qty
    
    
    return (
        <div className="shopping-cart">
            <div className='cart-product-name'>
                { products.map((prod) => 
                    <p>{prod.name}</p>) 
                }
            </div>
            <div className='cart-product-quantity'>
            {/* { products.map((prod) => 
                    <p>{props.shoppingCart.find(item => item.id == prod.id)}</p>) 
                } */}
            </div>
        </div>

    )
}

