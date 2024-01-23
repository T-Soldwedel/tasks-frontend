import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  return (
    <header>

        <Link to="/" className="link">FDM</Link>
        <Link to="/profile" className="link">Profile</Link>
        <Link to="/login" className="link">Login</Link>

        <a href='https://www.google.com' className="link">Google</a>

    </header>
  )
}

export default Header