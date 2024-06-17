import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex justify-content-end align-items-end text-right">
      <div className="hero-text">
        <h4 className="display-4">Harnessing the sun's potential for brighter tomorrow.</h4>
        <button className="hero-button">Contact us</button>
      </div>
    </section>
  );
}

export default HeroSection;



