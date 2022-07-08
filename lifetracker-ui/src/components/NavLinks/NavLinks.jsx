import React from 'react'
import "./NavLinks.css"

//import node modules
import { Link } from 'react-router-dom'

//import api client
import apiClient from '../../services/apiClient'


function NavLinks(props) {
  let hideButton = props.isLoggedIn ? "hidden" : ""

  const handleLogout = async () => {
    await apiClient.logoutUser()
    props.setIsLoggedIn(false)
    props.setCurrentUser({})
  }
  
  return (
    <div className="nav-links">
        <div className='links'>
          <ul>
            <li><Link className="link" style={{textDecoration: 'none'}} to="/activity">Activity</Link></li>
            <li><Link className="link" style={{textDecoration: 'none'}} to="/nutrition">Nutrition</Link></li>
            <li className={hideButton}><Link className="link" style={{textDecoration: 'none'}} to="/login">Login</Link></li>
            <li className={hideButton}><Link className="link" style={{textDecoration: 'none'}} to="/register">Register</Link></li>
            
            {props.isLoggedIn ? <button className="navlink-btn" onClick={handleLogout}>SignOut</button> : null}
          </ul>

            
        </div>
        
    </div>
  )
}



export default NavLinks