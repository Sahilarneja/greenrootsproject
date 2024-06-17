import React from 'react';
import '../styles/about.css'; 
import companyImage from '../assets/company.jpeg'; 
import founderImage from '../assets/founder.jpeg'; 

const AboutUs = () => {
  return (
    <div id="aboutus" className="aboutus">
      {/* About Us Section */}
      <div className="aboutus_box">
        <div className="aboutus_box_content">
          <h1>About Us</h1>
          <p>Welcome to Greenroots Renewable Energy Pvt. Ltd., your trusted partner for high-quality, affordable solar panel installations. We empower homes and businesses with sustainable energy solutions, reducing costs and environmental impact. Committed to innovation, we lead in renewable energy technology. At Greenroots Renewable Energy Pvt. Ltd., we envision every home and business harnessing clean, renewable energy for a healthier planet. Join us in paving the way towards a sustainable future.</p>
        </div>
        <div className="aboutus_box_image">
          <img src={companyImage} alt="Company" />
        </div>
      </div>

      {/* Founder Section */}
      <div className="aboutus_box">
        <div className="aboutus_box_image circular-image-container">
          <img src={founderImage} alt="Anup Arora" className="circular-image" />
        </div>
        <div className="aboutus_box_content">
          <h1>Anup Arora</h1>
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
