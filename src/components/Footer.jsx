import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Map from "./Map"; // Import the Map component
import "../styles/footer.css";
import logo from "../assets/main/logo.png";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="footer-logo"
            >
              <img src={logo} alt="Business Logo" />
            </ScrollLink>
            <p>
              Greenroots Renewable Energy Pvt. Ltd. offers expert solar design
              and installation with 7 years of experience and over 100 projects
              completed. We deliver custom solar solutions for optimal
              efficiency and reduced energy costs.
            </p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <ScrollLink to="aboutus" smooth={true} duration={500}>
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="calculator" smooth={true} duration={500}>
                  Calculator
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.facebook.com/p/Greenroots-Renewable-Energy-Pvt-Ltd-100064178910649/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@greenrootsrenewable9846"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/greenroots-renewable-energy-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/GreenrootsL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          <p>
            &copy; {new Date().getFullYear()} Greenroots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
