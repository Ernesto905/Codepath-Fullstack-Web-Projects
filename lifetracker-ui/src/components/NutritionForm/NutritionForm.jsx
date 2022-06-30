import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

//styling
import "./NutritionForm.css"

function NutritionForm() {

    const [form, setForm] = useState([{
        name: '',
        category: '',
        quantity: 1,
        calories: 1,
        imageUrl: '',}])
 

    const handleOnInputChange = (event) => {
      setForm((f) => ({...f, [event.target.name] : event.target.value}))
    }

    const handleOnSubmit = async () => {
      
      //set up axios post request
      try {
        const res = await axios.post("http://localhost:3001/nutrition", {
          name: form.name,
          category: form.category,
          img_url: form.imageUrl,
          calories: form.calories,
          user_id: "I am a user id... trust me ",
        }) 
        
      } catch (err) {
        console.log("error: ", err)
      }

    }
    
    
    return (
    <div className='nutrition-form'>
        <h3>Name</h3>
        <input className='form-input' name="name" type="text" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange}></input>
        <h3>Category</h3>
        <input className='form-input' name="category" type="text" placeholder="Nutrition category" value={form.category} onChange={handleOnInputChange}></input>
        
        <div className='food-details'>
            <h3>quantity</h3>
            <input className='form-input' name="quantity" placeholder="1" type="number" value={form.quantity} onChange={handleOnInputChange}></input>
            <h3>calories</h3>
            <input className='form-input' name="calories" type="number" placeholder="1" value={form.calories} onChange={handleOnInputChange}></input>
        </div>
        
        <h3>Image URL</h3>
        <input className='form-input' name="imageUrl" type="text" placeholder="http://www.food-image.com/1" value={form.imageUrl} onChange={handleOnInputChange}></input>

        <Link to="/nutrition">
          <button className='submit-nutrition' onClick={handleOnSubmit}>Save</button>
        </Link>


    </div>
  )
}

export default NutritionForm