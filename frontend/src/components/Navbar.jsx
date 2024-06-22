import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import Logo from '../assets/logo.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleNavToggle}>
          <span>&#9776;</span>
        </div>
        <div className={`nav-elements ${isNavOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#projects">Partners</a></li>
            <li><a href="#projects">Calculator</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
