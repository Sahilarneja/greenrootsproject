import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CountUpComponent from '../components/CountUp';

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection/>
      <CountUpComponent/>
      
    </div>
  );
}

export default Home;
