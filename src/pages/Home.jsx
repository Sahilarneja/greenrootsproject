import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import ProjectPage from "../components/ProjectPage";
import ContactUs from "../components/ContactUs";
import TotalSavings from "../components/TotalSaving";
import Footer from "../components/Footer";
import CustomerCarousel from "../components/CustomerCarousel";
import '../styles/home.css'; // Add your styles here

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <ProjectPage />
      <TotalSavings />
      <ContactUs />
      <CustomerCarousel />
      <Footer />

      {/* Fixed Green Button */}
      <ScrollLink to="navbar" smooth={true} duration={500} className="fixed-button">
      ↑
      </ScrollLink>
    </div>
  );
}

export default Home;
