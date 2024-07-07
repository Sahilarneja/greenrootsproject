import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import '../styles/countup.css'; 

const CountUpComponent = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.7; // Adjust the offset as needed
      const element = document.querySelector('.countup-section');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        setIsInView(elementTop < offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`countup-section ${isInView ? 'countup-animate' : ''}`}>
      <div className="countup-cards">
        {/* Fixed Card */}
        <div className="countup-card fixed-card">
          <div className="countup-number fixed-number">#01</div>
          <p className="countup-description">Rajasthan Rooftop Solar EPC Company</p>
        </div>
        <div className="countup-card">
          <CountUp end={isInView ? 7 : 0} duration={4} className="countup-number" />
          <p className="countup-description">Years of Experience</p>
        </div>
        <div className="countup-card">
          <VisibilitySensor onChange={(isVisible) => setIsInView(isVisible)} partialVisibility>
            <div>
              <CountUp end={isInView ? 5 : 0} duration={4} className="countup-number" />
              <span className="countup-unit"> states</span>
            </div>
          </VisibilitySensor>
          <p className="countup-description">PAN India presence</p>
        </div>
        <div className="countup-card">
          <CountUp end={isInView ? 100 : 0} duration={4} className="countup-number" />
          <span className="countup-plus">+</span>
          <p className="countup-description">Solar Projects</p>
        </div>
        <div className="countup-card">
          <VisibilitySensor onChange={(isVisible) => setIsInView(isVisible)} partialVisibility>
            <div>
              <CountUp end={isInView ? 30 : 0} duration={4} className="countup-number" />
              <span className="countup-unit"> MW</span>
            </div>
          </VisibilitySensor>
          <p className="countup-description">Solar Projects Installed</p>
        </div>
        <div className="countup-card">
          <VisibilitySensor onChange={(isVisible) => setIsInView(isVisible)} partialVisibility>
            <div>
              <CountUp end={isInView ? 40 : 0} duration={4} className="countup-number" />
              <span className="countup-unit"> MW</span>
            </div>
          </VisibilitySensor>
          <p className="countup-description">EPC Solar Capacity</p>
        </div>
        <div className="countup-card">
          <VisibilitySensor onChange={(isVisible) => setIsInView(isVisible)} partialVisibility>
            <div>
              <CountUp end={isInView ? 13.5 : 0} duration={4} className="countup-number" />
              <span className="countup-unit"> MW</span>
            </div>
          </VisibilitySensor>
          <p className="countup-description">Open Access Capacity</p>
        </div>
        <div className="countup-card">
          <div className="countup-number">40+</div>
          <p className="countup-description">Team Size</p>
        </div>
      </div>
    </div>
  );
};

export default CountUpComponent;
