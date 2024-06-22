import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CountUpComponent from '../components/CountUp';
import About from '../components/About';
import ProjectCarousel from '../components/ProjectCarousel';

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection/>
      <CountUpComponent/>
      <About/>
      <ProjectCarousel/>
    </div>
  );
}

export default Home;
