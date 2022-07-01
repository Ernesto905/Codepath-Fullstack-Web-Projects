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
          <ul>
            <li><Link className="link" style={{textDecoration: 'none'}} to="/activity">Activity</Link></li>
            <li><Link className="link" style={{textDecoration: 'none'}} to="/nutrition">Nutrition</Link></li>
            <li className={hideButton}><Link className="link" style={{textDecoration: 'none'}} to="/login">Login</Link></li>
            <li className={hideButton}><Link className="link" style={{textDecoration: 'none'}} to="/register">Register</Link></li>
            
            {props.isLoggedIn ? <button className="navlink-btn" onClick={async () => props.setIsLoggedIn(false)}>SignOut</button> : null}
          </ul>

            
        </div>
        
    </div>
  )
}



export default NavLinks