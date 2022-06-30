import React from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom'

//components
import NotFound from 'components/NotFound/NotFound'
import NutritionOverview from 'components/NutritionOverview/NutritionOverview'
import NutritionNew from 'components/NutritionNew/NutritionNew'
import NutritionDetail from 'components/NutritionDetail/NutritionDetail'


//styling
import "./Nutritionpage.css"

function NutritionPage() {
  return (

    <div className='nutrition-page'>
      <h1>Nutrition page</h1>
      
        <Routes>
            <Route path="/" element={<NutritionOverview/>}/>
            <Route path="/create" element={<NutritionNew/>}/>
            <Route path="/id/:nutritionId" element={<NutritionDetail/>}/>
            <Route path="/*" element={<NotFound/>}/> 
        </Routes>
      
    </div>
  )
}

export default NutritionPage