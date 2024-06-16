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

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false); // Close the nav menu on link click
    }
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
            <li>
              <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="active">Home</a>
            </li>
            <li>
              <a href="#aboutus" onClick={(e) => handleNavLinkClick(e, 'aboutus')}>About Us</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
            </li>
            <li>
              <a href="#partners" onClick={(e) => handleNavLinkClick(e, 'partners')}>Partners</a>
            </li>
            <li>
              <a href="#calculator" onClick={(e) => handleNavLinkClick(e, 'calculator')}>Calculator</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
