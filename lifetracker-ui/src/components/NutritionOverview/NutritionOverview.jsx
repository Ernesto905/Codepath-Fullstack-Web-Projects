import React from 'react'
import { Link } from 'react-router-dom'

//styling
import "./NutritionOverview.css"

function NutritionOverview(props) {
  return (
    <div className='nutrition-overview'>
        <Link to='/nutrition/create'><button>Record Nutrition</button></Link>
    </div>
  )
}

export default NutritionOverview