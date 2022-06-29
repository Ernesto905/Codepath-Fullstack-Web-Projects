//React specific
import * as React from "react"
import "./App.css"

//import components
import Navbar from "../Navbar/Navbar"
import Login from "components/Login/Login"
import RegistrationPage from "components/RegistrationPage/RegistrationPage"
import LandingPage from "components/LandingPage/LandingPage"
import NutritionPage from "components/NutritionPage/NutritionPage"
import ActivityPage from "components/ActivityPage/ActivityPage"
import NotFound from "components/NotFound/NotFound"

//Required node modules
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from 'axios'


export default function App() {
  return (
    <div className="app">


      <React.Fragment>{
        
        <BrowserRouter>
        
        <Navbar/>

          <Routes>

            <Route path="/" element={<LandingPage/>}/>
            {/* Login page route goes here */}
            <Route path="/login" element={<Login/>}/>
            {/* Registration page route goes here */}
            <Route path="/register" element={<RegistrationPage/>}/>
            {/* Activity page route goes here */}
            <Route path="/activity" element={<ActivityPage/>}/>
            {/* Nutrition page route goes here */}
            <Route path="/nutrition" element={<NutritionPage/>}/>
            {/* Not found page route goes here */}
            <Route path="/*" element={<NotFound/>}/>

          </Routes>
        </BrowserRouter>
      
      }</React.Fragment>
    </div>
  )
}
