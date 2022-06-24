import * as React from "react"
import "./Navbar.css"
import { useNavigate, Link } from "react-router-dom"
import Logo from "../../components/Logo/Logo"


export default function Navbar(props) {

  let open = props.isOpen ? " open" : ""

  return (
    <nav className={`navbar` + open}>
      <div className="content">
        <h1 className="store-name">I am the Header/Navbar</h1>
        <Link to="/"> <Logo /> </Link>
        
        <div className="socials"></div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>  

            </li>
            <li>
              <Link to="/about">About</Link>

            </li>
            <li>
              <Link to="/products">Products</Link>

            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  )
}
