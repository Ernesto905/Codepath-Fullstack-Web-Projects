import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiClient from '../../services/apiClient'

//styling
import "./NutritionOverview.css"



function NutritionOverview(props) {

  async function getNutritionItems() {
    const {data, err} = await apiClient.fetchNutrition()
    if(data){
      props.setNutritionItems(data.nutrition)
    }
  }

  useEffect(() => {
    getNutritionItems()
  }, [])

  
  return (
    <div className='nutrition-overview'>
        <div className='nutrition-header'>
          <h1 className='nutrition-title'>Overview</h1>
          <Link to='/nutrition/create'><button>Record Nutrition</button></Link>
        </div>

        <div className='nutrition-content'>
          <div className='nutrition-items'>

            {props.nutritionItems.map((item) =>{
              return(
                <div className='individual-nutrition'>
                  <div className='card-header'>
                    <img className="nutrition-img" src={item.imageUrl} alt='img'></img>
                    <p>{item.name}</p>
                  </div>
                  <div className='card-body'>
                    <div className='card-calories'>
                      <h5>Calories</h5>
                      <p>{item.calories}</p>
                    </div>

                    <div className='card-quantity'>
                      <h5>quantity</h5>
                      <p>{item.quantity}</p>
                    </div>

                  </div>
                    


                </div>
              )
            })}
          </div>


          



        </div>

    </div>
  )
}

export default NutritionOverview