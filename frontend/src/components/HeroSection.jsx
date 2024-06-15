import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex justify-content-end align-items-end text-right">
      <div className="hero-text">
        <h3 className="display-4">Add Some Nice Line Here</h3>
        <button className="hero-button">Know More</button>
      </div>
    </section>
  );
}

export default HeroSection;



