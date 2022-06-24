import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Reciept from "../Reciept/Reciept"



export default function Sidebar(props) {
  
  let open = props.isOpen ? " open" : ""
  let btn = props.isOpen ? "<" : ">"

  return (
    <section className={"sidebar" + open}>
      <button className="toggle-button" onClick={props.handleOnToggle}>
        {btn}
      </button>
      {props.isOpen ? 
        <ShoppingCart
          isOpen={props.isOpen}
          products={props.products}
          shoppingCart={props.shoppingCart}
          setShoppingCart={props.setShoppingCart}
        />
        
      : null}
      {props.isOpen ? <CheckoutForm 
        isOpen={props.isOpen}
        shoppingCart={props.shoppingCart}
        checkoutForm={props.checkoutForm}
        handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        /> : null}

        {
          props.reciept !== '' && props.isOpen ? <Reciept products={props.products} reciept={props.reciept}/>: null
        }
    </section>
  )
}