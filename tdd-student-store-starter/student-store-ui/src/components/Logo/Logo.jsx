import React from 'react'
import { Link } from 'react-router-dom'
import "./Logo.css"
import myLogo from "./myLogo.png"


function Logo () {
  return (
    <div className="logo">
        <img className="myLogo" src={myLogo} alt="Store logo"></img>
    </div>
  )
}

export default Logo