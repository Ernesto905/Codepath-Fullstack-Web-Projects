import React from 'react'
import "./NavLinks.css"

//import components

//import node modules
import { Link } from 'react-router-dom'


function NavLinks(props) {
  let hideButton = props.isLoggedIn ? "hidden" : ""
  
  return (
    <div className="nav-links">
        <div className='links'>
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li className={hideButton}><Link to="/login">Login</Link></li>
            <li className={hideButton}><Link to="/register">Register</Link></li>
            
            {props.isLoggedIn ? <button onClick={async () => props.setIsLoggedIn(false)}>SignOut</button> : null}

            
        </div>
        
    </div>
  )
}



export default NavLinks