import React from 'react'

//node modules
import { useParams } from 'react-router-dom'

//styling
import "./NutritionDetail.css"

function NutritionDetail() {

  let { nutritionId } = useParams()

  return (
    <div className='nutrition-detail'>
      <h1>Nutrition Details</h1>
      <h2>Nutrition ID: {nutritionId}</h2>  
    
    </div>
  )
}

export default NutritionDetail