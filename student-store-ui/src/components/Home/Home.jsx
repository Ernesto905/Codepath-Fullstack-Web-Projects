import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import SubNavbar from "../SubNavbar/SubNavbar"

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
      />

      {/* TODO: Iterate over products*/}

      {/* {prodcuts.map((product) => 
        <ProductCard showDescription={false}/>
      )} */}

    </div>
  )
}
