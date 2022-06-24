import React from 'react'
import "./Hero.css"
import heroLogo from "./heroLogo.svg"


function Hero() {
  return (
    <div className="hero">
        <div className="hero-text"> 
        <h1 > Welcome! </h1>
        <h2 >We have all kinds of goodies.<br></br>Click on any of the items to start filling up your shopping cart. <br></br>Checkout whenever you're ready.</h2>

        </div>
        <img id='hero-img' className='image hero-image' src={heroLogo} ></img>
    </div>
  )
}

export default Hero