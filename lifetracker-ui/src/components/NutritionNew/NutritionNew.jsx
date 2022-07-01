import React from 'react'

//components  
import NutritionForm from 'components/NutritionForm/NutritionForm'

//styling
import "./NutritionNew.css"

function NutritionNew(props) {
  return (
    <div className='nutrition-new'>
      <div className='cart'>
        <h1 className='nutrition-message'>Record Nutrition</h1>
        <NutritionForm nutritionItems={props.nutritionItems} setNutritionItems={props.setNutritionItems}/>
      </div>
    </div>
  )
}

export default NutritionNew