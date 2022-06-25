import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"
import CodePathLogo from "./CodepathLogo.svg"
import happy from "./happy.svg"

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
        <h1 className="about">About</h1>
        <div className="about-content"> 
        <h3 className="text">The codepath student store offers great products at 
            great prices from a great team and for a great cause.
            We've searched far and wide for items that perk 
            the interests of even the most eccentric students and 
            decided to offer them all here in one place.
            All proceeds go towards bringing high quality CS education 
            to college students around the country.</h3>
        <img src={CodePathLogo} alt="codepath logo"></img>
          
        </div>
      </section>

      <section id="Contact">
        <h1 className="contact">Contact</h1>
          <div className="contact-content">
            <div className="contact-text">
              <h2>Email: code@path.org</h2>
              <h2>Phone: 1-800-CODEPATH</h2>
              <h2>Address: 123 Fake Street, San Francisco, CA</h2>
            </div>
            <img className="happy-woman-img" src={happy} alt="happy woman"></img>
          </div>
      </section>

      <Footer/>

      

      

    </div>
  )
}
