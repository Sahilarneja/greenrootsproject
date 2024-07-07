import React from 'react';
import '../styles/roles.css';
import card from '../assets/Services/Anup Arora.png'; // Ensure the path is correct

function Roles() {
  const services = [
    {
      icon: 'cctv_icon.svg', // Replace with actual path or icon component
      title: 'Commercial CCTV System',
      description: 'Secure your business with our state-of-the-art CCTV solutions.'
    },
    {
      icon: 'fingerprint_icon.svg',
      title: 'Finger Print Access',
      description: 'Control access with biometric technology for enhanced security.'
    },
    {
      icon: 'fire_alarm_icon.svg',
      title: 'Fire Detection And Safety',
      description: 'Protect your property with our reliable fire detection systems.'
    },
    {
      icon: 'smart_home_icon.svg',
      title: 'Smart Home Security',
      description: 'Automate and secure your home with our smart solutions.'
    }
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-content">
        <img src={card} alt="Card" className="card-image" />
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-box" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <div className="service-content">
                <h3 className="service-heading">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">Explore More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roles;
