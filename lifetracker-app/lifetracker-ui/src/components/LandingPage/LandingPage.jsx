import React from 'react'


//styling
import "./LandingPage.css"
import smartWatch from '../../../images/smartWatch.svg'
import fitness from "../../../images/fitness.svg"
import food from "../../../images/food.svg"
import rest from "../../../images/rest.svg"
import planner from "../../../images/planner.svg"


function LandingPage() {
  return (
    <div className='landing-page'>
      <div className='hero'>
        <img className='hero-img' src={smartWatch}></img>
        <div className='cta'>
          <h1>Life tracker</h1>
          <h3>Take back control of your health!</h3>
        </div>

        <div className='bottom-section'>
          <div className='fit'>
            <p>Fitness</p>
            <img src={fitness} alt="" />
          </div>
          <div className='food'>
            <p>Food</p>
            <img src={food} alt="" />
          </div>
          <div className='rest'>
            <p>Rest</p>
            <img src={rest} alt="" />
          </div>
          <div className='plan'>
            <p>Planner</p>
            <img src={planner} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage