import React from 'react';
import '../styles/about.css'; // Ensure this path is correct based on your project structure
import companyImage from '../assets/company.png'; // Correct import path for the company image
import founderImage from '../assets/founder.jpg'; // Ensure you have this image and path is correct

const AboutUs = () => {
  return (
    <div id="aboutus" className="aboutus">
      <div className="aboutus_box">
        <div className="aboutus_box_hero">
          <div className="aboutus_box_hero_left">
            <h1>About Us</h1>
            <p>Welcome to Greenroots Renewable Energy Pvt. Ltd., your trusted partner for high-quality, affordable solar panel installations. We empower homes and businesses with sustainable energy solutions, reducing costs and environmental impact. Committed to innovation, we lead in renewable energy technology.
              At Greenroots Renewable Energy Pvt. Ltd., we envision every home and business harnessing clean, renewable energy for a healthier planet. Join us in paving the way towards a sustainable future.
            </p>
          </div>
          <div className="aboutus_box_hero_right">
            <img src={companyImage} alt="Company" />
          </div>
        </div>
      </div>
      <div className="founder_section">
        <div className="founder_image">
          <img src={founderImage} alt="Anup Arora" />
        </div>
        <div className="founder_details">
          <h2>Anup Arora</h2>
          <h3>Founder & Director</h3>
          <p>PGDM-SCM (Symbiosis, Pune)<br />
            B.E. (Kota Engineering College, University of Rajasthan)
          </p>
          <p>Experience:<br />
            Over 28 Years of work experience in Manufacturing, Design, Supply chain, Solar power.<br />
            Worked with Asahi India Glass Limited, ACME Tele Power Limited & ACME Solar Energy Limited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
