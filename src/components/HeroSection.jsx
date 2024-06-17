import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex justify-content-end align-items-end text-right">
      <div className="hero-text">
        <h3 className="display-4">Harnessing the sun's potential for brighter tomorrow.</h3>
        <button className="hero-button">Know More</button>
      </div>
    </section>
  );
}

export default HeroSection;



