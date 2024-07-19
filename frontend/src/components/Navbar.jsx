import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/main/logo.png';
import '../styles/navbar.css';

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
    <nav id="navbar" className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu-icon" onClick={handleNavToggle}>
        <span>&#9776;</span>
      </div>
      <div className={`nav-elements ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="aboutus" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="calculator" smooth={true} duration={500}>
              Calculator
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
