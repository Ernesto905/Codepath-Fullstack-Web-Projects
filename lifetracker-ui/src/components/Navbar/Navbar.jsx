//React specific
import React from 'react'

//import components
import NavLinks from 'components/NavLinks/NavLinks'

//import node modules
import { useNavigate, Link } from 'react-router-dom'

//Pretty stuff
import "./Navbar.css"
import CPLogo from '../../../images/CPLogo.svg'

function Navbar() {
  return (
    <div className="Navbar">
        <div className="content">
            
        
          <Link to="/"> <Logo /> </Link>
            
          <NavLinks/>

        </div>
    </div>
  )
}

function Logo() {
  return (
    <img className='Logo' src={CPLogo} alt="codepath logo"></img>
  )
}

export default Navbar