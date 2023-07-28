import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import "./Navbar.css"

export default function Navbar({ navLinks }) {
  return (
    <nav>
      <div className="navbar-container">
        <NavLinks navLinks={navLinks}/>
        <TwitterIcon />
        <SearchBar />
        <TweetButton />
      </div>
    </nav>
  )
}

export function NavLinks({ navLinks }) {
  return <ul className="nav-links">

    {navLinks.map((navLink, index) => 
      <NavLink
        key={navLink + '-' + index}
        navLink={navLink}
      />)}

  </ul>
}

export function NavLink({ navLink }) {
  return (
    <li className={navLink.className}>
      <i className={navLink.icon}></i>
      <span className={navLink.label}>{navLink.label}</span>
    </li>
  )
}

export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-twitter"></i>
    </div>
  )
}

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search"></i>
    </div>
  )
}

export function TweetButton() {
  return (
    <div className="tweet-button">
      <AvatarIcon />

      <button>Tweet</button>
    </div>
  )
}
