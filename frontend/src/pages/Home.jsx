import React from 'react';
import Navbar from '../components/Navbar';
import MyCarousel from '../components/Carousel';

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <MyCarousel/>
    </div>
  );
}

export default Home;
