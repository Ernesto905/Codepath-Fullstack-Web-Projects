import React from 'react'

function CheckoutForm(props) {
  return (
    <div className='checkout-form'>

        <input 
        type="email" 
        name="email" 
        placeholder="student@codepath.org" 
        value={props.checkoutForm.email} 
        onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name, event.target.value)}} 
        />

        <input 
        type="text" 
        name="name" 
        placeholder="Student Name" 
        value={props.checkoutForm.name} 
        onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name, event.target.value)}} 
        />

      <button className='checkout-button' onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
    </div>
  )
}

export default CheckoutForm