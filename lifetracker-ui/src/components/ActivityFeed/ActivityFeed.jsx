import React from 'react'

//styling
import "./ActivityFeed.css"

function ActivityFeed() {
  return (
    <div className='activity-feed'>
        <h1>Activity feed</h1>

        <div className='per-category'>
            <h4>Average Calories Per Category</h4>
        </div>

        <div className='per-day'>
            <h4>Total Calories Per Day</h4>
        </div>
        
    </div>
  )
}

export default ActivityFeed