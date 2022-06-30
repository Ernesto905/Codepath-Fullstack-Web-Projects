import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

//styling
import "./NutritionForm.css"

function NutritionForm() {

    //query state variables
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [calories, setCalories] = useState(1)
    const [imageUrl, setImageUrl] = useState('')

    function handleSave() {
      console.log('clicked!')
      //todo: create new nutrition entry
    }

  return (
    <div className='nutrition-form'>
        <h3>Name</h3>
        <input className='form-input' name="name" type="text" placeholder="Nutrition name" value={name} onChange={e => setName(e.target.value)}></input>
        <h3>Category</h3>
        <input className='form-input' name="category" type="text" placeholder="Nutrition category" value={category} onChange={e => setCategory(e.target.value)}></input>
        
        <div className='food-details'>
            <h3>quantity</h3>
            <input className='form-input' name="quantity" placeholder="1" type="number" value={quantity} onChange={e => setQuantity(e.target.value)}></input>
            <h3>calories</h3>
            <input className='form-input' name="calories" type="number" placeholder="1" value={calories} onChange={e => setCalories(e.target.value)}></input>
        </div>
        
        <h3>Image URL</h3>
        <input className='form-input' name="imageUrl" type="text" placeholder="http://www.food-image.com/1" value={imageUrl} onChange={e => setImageUrl(e.target.value)}></input>

        <Link to="/nutrition">
          <button className='submit-nutrition' onClick={async () => handleSave()}>Save</button>
        </Link>


    </div>
  )
}

export default NutritionForm