import * as React from "react"
import "./Navbar.css"
import { useNavigate, Link } from "react-router-dom"
import Logo from "../../components/Logo/Logo"


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <h1 className="store-name">I am the Header/Navbar</h1>
        <Link to="/"> <Logo /> </Link>
        
        <div className="socials"></div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
      </div>
    
    </nav>
  )
}
