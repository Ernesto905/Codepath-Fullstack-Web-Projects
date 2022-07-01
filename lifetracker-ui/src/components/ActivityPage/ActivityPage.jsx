import React from 'react'
import "./ActivityPage.css"

//import components
import ActivityFeed from 'components/ActivityFeed/ActivityFeed'

function ActivityPage(props) {
  return (
    <div className='activity-page'>
      <h1>Activities page</h1>

      <ActivityFeed nutritionItems={props.nutritionItems}/>

      
    </div>
    
  )
}

export default ActivityPage