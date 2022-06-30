import React from 'react'

//components  
import NutritionForm from 'components/NutritionForm/NutritionForm'

//styling
import "./NutritionNew.css"

function NutritionNew() {
  return (
    <div className='nutrition-new'>
      <div className='cart'>
        <h1 className='nutrition-message'>Record Nutrition</h1>
        <NutritionForm/>
      </div>
    </div>
  )
}

export default NutritionNew