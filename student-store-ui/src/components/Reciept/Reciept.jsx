import React from 'react'

function Reciept(props) {


    //math 
    let total = 0
    let taxes = 0
    let final = 0
    //find product 
    
    //for each ID in shopping cart find the first product that matches the id. Then push that product into the products array
    let products = [];
    props.reciept.forEach(element => {

        products.push(props.products.find(item => item.id == element.id))

    });
    

    return (
        <div className='reciept'>
            <h3>Thank you for your purchase! Here is your Reciept: </h3>
            {props.reciept.map((item) => {
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

        </div>
    )
}

export default Reciept