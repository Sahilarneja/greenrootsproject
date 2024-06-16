import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CountUpComponent from '../components/CountUp';
import AboutUs from '../components/about';


function Home() {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection/>
      <CountUpComponent/>
      <AboutUs/>
    
     
      
    </div>
  );
}

export default Home;
