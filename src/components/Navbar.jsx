import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"


const NavBar = () => {
  return (
    <nav>
      
  <Link to="/" className="link">Home</Link>
  <Link to="/feed" className="link">Feed</Link>
  <Link to="/profile" className="link">Profile</Link>
  <Link to="/dailythoughts" className="link">Daily Thoughts</Link>
  <Link to="/studyroom" className="link">Study Room</Link>


      </nav>
  )
}

export default NavBar