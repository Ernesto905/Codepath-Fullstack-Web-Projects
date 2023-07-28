import * as React from "react"
import "./Navbar.css"
import { useNavigate, Link } from "react-router-dom"
import Logo from "../../components/Logo/Logo"
import Filter from "../Filter/Filter"


export default function Navbar(props) {

  let open = props.isOpen ? " open" : ""

  return (
    <nav className={`navbar` + open}>
      <div className="content">
        <h1 className="store-name">.d</h1>
        <Link to="/"> <Logo /> </Link>
        
        <div className="socials"></div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>  

            </li>
            <li>
              <a href="/#About">About</a>

            </li>
            <li>
              <a href="/#Contact">Contact</a>
            </li>
            <li>
              <Link to="/Filter">Filter</Link>  
            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  )
}
