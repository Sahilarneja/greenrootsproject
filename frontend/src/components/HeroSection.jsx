import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex justify-content-end align-items-end text-right">
      <div className="hero-text">
        <h4 className="display-4">Harness the Power of the Sun </h4>
        <h5 className="display-4">  Embrace a Greener Lifestyle with Our Cutting-Edge Solar Installation Services. </h5>
        <h5>Join Us in Creating a Brighter, More Sustainable Tomorrow.. </h5>
       
        <br/>
        <button className="hero-button">Contact us</button>
      </div>
    </section>
  );
}

export default HeroSection;



