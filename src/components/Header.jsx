import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header>

      <img src={logo} alt="Company Logo" />



      <div className="header-icons">
      <Link to="/login"><FontAwesomeIcon icon={faUser} className="header-icons"></FontAwesomeIcon></Link>
        
        <FontAwesomeIcon icon={faRightFromBracket} className="header-icons"/>
        

      </div>
    </header>
  );
};

export default Header;
