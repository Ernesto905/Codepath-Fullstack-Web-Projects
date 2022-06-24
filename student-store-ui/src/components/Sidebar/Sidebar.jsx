import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"



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
      {props.isOpen ? <CheckoutForm /> : null}
    </section>
  )
}