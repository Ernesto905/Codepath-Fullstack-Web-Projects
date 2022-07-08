import React from 'react'
import { useState, useEffect } from 'react'


//import routes and API
import { Link } from 'react-router-dom'
import apiClient from '../../services/apiClient'

//styling
import "./ActivityFeed.css"

function ActivityFeed(props) {

  const [categories, setCategories] = useState([])

  //calculate average calories per day
  

  let totalCals = 0; 
  props.nutritionItems.forEach((item, index) => {
    totalCals += Number(item.calories)
  })

  async function getActivity() {
    const {data, err} = await apiClient.fetchActivity()
    if(data){
      setCategories(data.dailyCalories)
    }
  }

  useEffect(() => {
    getActivity()
  }, [])

  return (
    <div className='activity-feed'>
        <div className='activity-content'>

          <h1>Activity feed</h1>

          <div className='buttons'>
            <Link to="/nutrition/create"><button className='btn'>Record nutrition</button></Link>
          </div>

        </div>

        <div className='per-category'>
          <div className='avg-daily'>
            <h4>Average Daily Calories</h4>
            <h1>{totalCals / props.nutritionItems?.length}</h1>
          </div>
          <div className='avg-per-category'>
            <h4>Average Calories per category</h4>
            {categories.map((category) => { return (

              //88888888888
              <div className='individual-category'>
                <div className='category-content'>
                  <h4>{category.category}</h4>
                  <h4>{category.avgCaloriesPerCategory}</h4>
                </div>
              </div>
              //88888888888

            )

            })}


          </div>
        </div>


        
        
    </div>
  )
}

export default ActivityFeed