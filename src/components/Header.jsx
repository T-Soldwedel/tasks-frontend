import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
    <header>

      <img src={logo} alt="Company Logo" />



      <div className="header-icons">

        <FontAwesomeIcon icon={faUser} className="header-icons"/>
        <FontAwesomeIcon icon={faRightFromBracket} className="header-icons"/>
        

      </div>
    </header>
  );
};

export default Header;
