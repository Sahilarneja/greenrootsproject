// import { NavLink } from 'react-router-dom'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'
import React, { useState } from 'react';
import Logo from '../assets/logo.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleNavToggle}>
          <span>&#9776;</span>
        </div>
        <div className={`nav-elements ${isNavOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;