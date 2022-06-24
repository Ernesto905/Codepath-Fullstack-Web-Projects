import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />

      {/* search bar */}

      <SubNavbar />

      <ProductGrid 
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemToCart={props.handleRemoveItemToCart}
        findQuantityById={props.findQuantityById}
        shoppingCart={props.shoppingCart}
      />

      
      <section id="About">
        <h2>This is the about section</h2>
        <h3>About about about</h3>
      </section>

      <section id="Contact">
        <h2>This is the contact section</h2>
        <h3>1800411pain</h3>
      </section>

      

      

    </div>
  )
}
