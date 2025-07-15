import React from 'react';
import '../styles/map.css';

const Map = () => {
  return (
    <div className="map-wrapper">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0486059384552!2d76.81095267559604!3d28.20583580332931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4802d0000001%3A0x48162296a5280624!2sGreenroots%20Renewable%20Energy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1720597354245!5m2!1sen!2sin"
          width="400" /* Reduced width */
          height="250" /* Reduced height */
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
