//React specific
import * as React from "react"
import "./App.css"

//import components
import Navbar from "../Navbar/Navbar"
import LoginPage from "components/Login/LoginPage"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import LandingPage from "components/LandingPage/LandingPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NotFound from "components/NotFound/NotFound"


//Required node modules
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  //nutrition items
  const [nutritionItems, setNutritionItems] = useState([])
  
  

  

  return (
    <div className="app">


      <React.Fragment>{
        
        <BrowserRouter>

        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>

          <Routes>

            <Route path="/" element={<LandingPage/>}/>
            {/* Login page route goes here */}
            <Route path="/login" element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} attempt={false} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            {/* Registration page route goes here */}
            <Route path="/register" element={<RegistrationPage currentUser={currentUser} setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn}/>}/>
            {/* Activity page route goes here */}
            {isLoggedIn ? <Route path="/activity" element={<ActivityPage nutritionItems={nutritionItems}/>}/> : <Route path="/activity" element={<LoginPage attempt={true} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>}
            {/* Nutrition page route goes here */}
            {isLoggedIn ? <Route path="/nutrition/*" element={<NutritionPage nutritionItems={nutritionItems} setNutritionItems={setNutritionItems}/>}/> : <Route path="/nutrition" element={<LoginPage attempt={true} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>}
            
            {/* Not found page route goes here */}
            <Route path="/*" element={<NotFound/>}/>

          </Routes>
        </BrowserRouter>
      
      }</React.Fragment>
    </div>
  )
}
