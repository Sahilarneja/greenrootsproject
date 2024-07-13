import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex justify-content-end align-items-end text-right">
      <div className="hero-text">
        <h4 className="display-4">Harness the Power of the Sun </h4>
        <h3 className="display-4">  Embrace a Greener Lifestyle with Our Cutting-Edge Solar Installation Services.Join Us in Creating a Brighter, More Sustainable Tomorrow.. </h3>
       
        <br/>
        <button className="hero-button">Contact us</button>
      </div>
    </section>
  );
}

export default HeroSection;



