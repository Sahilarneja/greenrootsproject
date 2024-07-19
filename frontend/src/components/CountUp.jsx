import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../styles/countup.css';

const CountUpComponent = () => {
  const [isInView, setIsInView] = useState(false);
  const countupSectionRef = useRef(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (countupSectionRef.current) {
        const rect = countupSectionRef.current.getBoundingClientRect();
        const offset = window.innerHeight * 0.7; // Adjust the offset as needed
        setIsInView(rect.top < offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`countup-section ${isInView ? 'countup-animate' : ''}`} ref={countupSectionRef}>
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
        <div className="countup-card" ref={inViewRef}>
          {inView && <CountUp end={5} duration={4} className="countup-number" />}
          <span className="countup-unit"> states</span>
          <p className="countup-description">PAN India presence</p>
        </div>
        <div className="countup-card">
          <CountUp end={isInView ? 100 : 0} duration={4} className="countup-number" />
          <span className="countup-plus">+</span>
          <p className="countup-description">Solar Projects</p>
        </div>
        <div className="countup-card" ref={inViewRef}>
          {inView && <CountUp end={30} duration={4} className="countup-number" />}
          <span className="countup-unit"> MW</span>
          <p className="countup-description">Solar Projects Installed</p>
        </div>
        <div className="countup-card" ref={inViewRef}>
          {inView && <CountUp end={40} duration={4} className="countup-number" />}
          <span className="countup-unit"> MW</span>
          <p className="countup-description">EPC Solar Capacity</p>
        </div>
        <div className="countup-card" ref={inViewRef}>
          {inView && <CountUp end={13.5} duration={4} className="countup-number" />}
          <span className="countup-unit"> MW</span>
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
