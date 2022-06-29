import React from 'react'


//styling
import "./LandingPage.css"
import smartWatch from '../../../images/smartWatch.svg'


function LandingPage() {
  return (
    <div className='landing-page'>
      <div className='hero'>
        <img className='hero-img' src={smartWatch}></img>
        <div className='cta'>
          <h1>Life tracker</h1>
          <h3>Take back control of your health!</h3>
        </div>
      </div>

    </div>
  )
}

export default LandingPage