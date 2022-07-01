import React from 'react'

//import routes and API
import { Link } from 'react-router-dom'

//styling
import "./ActivityFeed.css"

function ActivityFeed(props) {

  //calculate average calories per day
  let totalCals = 0; 
  props.nutritionItems.forEach((item, index) => {
    totalCals += Number(item.calories)
  })

  


  return (
    <div className='activity-feed'>
        <div className='activity-content'>

          <h1>Activity feed</h1>

          <div className='buttons'>
            <Link to="/nutrition/create"><button className='btn'>Record nutrition</button></Link>
          </div>

        </div>

        <div className='per-category'>
          <div className='calories-cat'>
            <h4>Average Daily Calories</h4>
            <h1>{totalCals / props.nutritionItems.length}</h1>
          </div>
          <div className='sleep-cat'>
            <h4>Avg Sleep hours</h4>
            <h1>{totalCals / props.nutritionItems.length}</h1>
          </div>
          <div className='exercise-cat'>
            <h4>Total exercise minutes</h4>
            <h1>{totalCals / props.nutritionItems.length}</h1>
          </div>

        </div>
        
        
    </div>
  )
}

export default ActivityFeed