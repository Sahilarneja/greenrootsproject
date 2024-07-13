import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
// import CountUpComponent from "../components/CountUp";
import About from "../components/About";
// import Projects from "../components/Projects";
import Services from "../components/Services";
import ProjectPage from "../components/ProjectPage";
import Roles from "../components/Roles";
import ContactUs from "../components/ContactUs";
import TotalSavings from "../components/TotalSaving";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <Services />
      {/* <CountUpComponent /> */}
      <About />
      <ProjectPage/>
      {/* <Roles /> */}
      <TotalSavings/>
      <ContactUs/>

    </div>
  );
}

export default Home;
