import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Map'; // Import the Map component
import '../styles/footer.css';
import logo from '../assets/main/logo.png';
import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Business Logo" />
            </Link>
            <p>Greenroots Renewable Energy Pvt. Ltd. is a premier solar design and installation company with 7 years of experience and over 100 successful projects. We specialize in creating tailored solar solutions that enhance efficiency and sustainability for our clients. Our expertise ensures high-quality installations, helping you reduce energy costs and environmental impact.</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.facebook.com/p/Greenroots-Renewable-Energy-Pvt-Ltd-100064178910649/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@greenrootsrenewable9846" target="_blank" rel="noopener noreferrer">
                  <FaYoutube /> YouTube
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/examplehttps://www.youtube.com/@greenrootsrenewable9846" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/GreenrootsL" target="_blank" rel="noopener noreferrer">
                  <FaTwitter /> Twitter
                </a>
              </li>
              
            </ul>
          </div>
          <div className="footer-column">
            <h4>Location</h4>
            <Map /> {/* Include the Map component */}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Greenroots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

