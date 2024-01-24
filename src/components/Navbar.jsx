import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const NavBar = () => {
  return (
    <nav>
      
  <Link to="/" className="link">Feed</Link>
  <Link to="/profile" className="link">Profile</Link>
  <Link to="/dailythoughts" className="link">Daily Thoughts</Link>


      </nav>
  )
}

export default NavBar