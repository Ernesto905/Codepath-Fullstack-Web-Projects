import React from 'react'
import "./NavLinks.css"

//import components

//import node modules
import { Link } from 'react-router-dom'


function NavLinks() {
  return (
    <div className="nav-links">
        <ul className='links'>
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
        
    </div>
  )
}

export default NavLinks