import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CountUpComponent from "../components/CountUp";
import About from "../components/About";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <CountUpComponent />
      <About />
      <Projects />
    </div>
  );
}

export default Home;
