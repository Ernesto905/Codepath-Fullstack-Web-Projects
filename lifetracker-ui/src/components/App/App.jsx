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


//Required node modules and Backend requirements
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react"
import { useState } from "react"
import apiClient from "../../services/apiClient"

//import 


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [error, setError] = useState(null)

  //nutrition items
  const [nutritionItems, setNutritionItems] = useState([])
  
  
  useEffect(() => {
    const fetchUser = async () => {
      const { data, err } = await apiClient.fetchUserFromToken()
      if(data) {
        console.log("current user is: ", data.user)
        setCurrentUser(data.user)
        setIsLoggedIn(true)
      }
      if(err) {
        setError(err)
      }
    }

    const token = localStorage.getItem("my_token")
    if(token) {
      apiClient.setToken(token)
      fetchUser()
    }
   }, [])

   const handleSignout = async () => {
    await apiClient.logoutUser()
    setCurrentUser({})
    setError(null)
   }
  

  return (
    <div className="app">


      <React.Fragment>{
        
        <BrowserRouter>

        <Navbar setNutritionItems={setNutritionItems} setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>

          <Routes>

            <Route path="/" element={<LandingPage/>}/>
            {/* Login page route goes here */}
            <Route path="/login" element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} attempt={false} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            {/* Registration page route goes here */}
            <Route path="/register" element={<RegistrationPage currentUser={currentUser} setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn}/>}/>
            {/* Activity page route goes here */}
            {isLoggedIn ? <Route path="/activity" element={<ActivityPage nutritionItems={nutritionItems}/>}/> : <Route path="/activity" element={<LoginPage attempt={true} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>}
            {/* Nutrition page route goes here */}
            {isLoggedIn ? <Route path="/nutrition/*" element={<NutritionPage nutritionItems={nutritionItems} setNutritionItems={setNutritionItems}/>}/> : <Route path="/nutrition" element={<LoginPage attempt={true} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>}
            
            {/* Not found page route goes here */}
            <Route path="/*" element={<NotFound/>}/>

          </Routes>
        </BrowserRouter>
      
      }</React.Fragment>
    </div>
  )
}
