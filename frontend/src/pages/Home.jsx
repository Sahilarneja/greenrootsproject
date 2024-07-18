import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import ProjectPage from "../components/ProjectPage";
import ContactUs from "../components/ContactUs";
import TotalSavings from "../components/TotalSaving";
// import Map from "../components/Map";
import Footer from "../components/Footer";
import CustomerCarousel from "../components/CustomerCarousel";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <Services />
      {/* <CountUpComponent /> */}
      <About />
      <ProjectPage/>
      <TotalSavings/>
      <ContactUs/>
      {/* <Map/> */}
      <CustomerCarousel/>
      <Footer/>

    </div>
  );
}

export default Home;
