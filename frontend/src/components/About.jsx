import React from "react";
import "../styles/about.css";
import founderImage from "../assets/about/founder.jpeg";
import awardImage1 from "../assets/about/award1.png";
import awardImage2 from "../assets/about/award2.png";
import awardImage3 from "../assets/about/award3.png";
import awardImage4 from "../assets/about/epc.jpg";
import companyImage1 from "../assets/about/OPEN - ACCESS.png";
import companyImage2 from "../assets/about/SERVICES.png";
import companyImage3 from "../assets/about/location.png";
import solar from "../assets/about/solar-panel.webp";

import companyImage4 from "../assets/about/HOUSE.png";
import CountUp from "./CountUp";

const AboutUs = () => {
  const projectsCompleted = "100+";
  const employeesWorking = "40+";

  return (
    <div id="aboutus" className="aboutus">
      <div className="aboutus_container">
        {/* About Us Section */}
        <div className="aboutus_section">
          <div className="aboutus_welcome">
            Welcome to Greenroots Renewable Energy Pvt. Ltd., your trusted partner for high-quality, affordable solar panel installations.
          </div>
          <div className="aboutus_content_container">
            <img src={solar} alt="Solar Panels" className="aboutus_image" />
            <div className="aboutus_intro">
              <h2 className="aboutus_title">About Us</h2>
              <p className="aboutus_short_description">
                We empower homes and businesses with sustainable energy solutions, reducing costs and environmental impact. Committed to innovation, we lead in renewable energy technology. At Greenroots Renewable Energy Pvt. Ltd., we envision every home and business harnessing clean, renewable energy for a healthier planet. Join us in paving the way towards a sustainable future.
              </p>
              <div className="aboutus_content">
                <div className="aboutus_stats">
                  <div className="aboutus_stat">
                    <div className="stat_icon">🌟</div>
                    <div className="stat_info">
                      <h3 className="stat_number">{projectsCompleted}</h3>
                      <p className="stat_label">Projects Completed</p>
                    </div>
                  </div>
                  <div className="aboutus_stat">
                    <div className="stat_icon">👥</div>
                    <div className="stat_info">
                      <h3 className="stat_number">{employeesWorking}</h3>
                      <p className="stat_label">Employees Working</p>
                    </div>
                  </div>
                </div>
                {/* <button className="explore_more_button">Explore More</button> */}
              </div>
            </div>
          </div>
        </div>
        <CountUp />
        {/* Company Images Grid */}
        {/* <div className="aboutus_section">
          <div className="company-images-grid">
            <div className="company-image">
              <img src={companyImage1} alt="Company 1" />
            </div>
            <div className="company-image">
              <img src={companyImage2} alt="Company 2" />
            </div>
            <div className="company-image">
              <img src={companyImage3} alt="Company 3" />
            </div>
            <div className="company-image">
              <img src={companyImage4} alt="Company 4" />
            </div>
          </div>
        </div> */}
        {/* Awards and Achievements */}
        <div className="aboutus_section">
          <div className="section_title">Awards and Achievements</div>
          <div className="awards_grid">
            <div className="award_card">
              <img src={awardImage1} alt="Award 1" />
              <h4 className="award_title">Best Solar Installation</h4>
              <p>
                Received for the most efficient solar panel installation in 2023.
              </p>
            </div>
            <div className="award_card">
              <img src={awardImage2} alt="Award 2" />
              <h4 className="award_title">Innovation in Renewable Energy</h4>
              <p>
                Awarded for groundbreaking innovation in solar energy technology.
              </p>
            </div>
            <div className="award_card">
              <img src={awardImage3} alt="Award 3" />
              <h4 className="award_title">Sustainability Leader</h4>
              <p>
                Recognized for outstanding contributions to sustainable energy solutions.
              </p>
            </div>
            <div className="award_card">
              <img src={awardImage4} alt="Award 4" />
              <h4 className="award_title">Sustainability Leader</h4>
              <p>
                Recognized for outstanding contributions to sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
        {/* Founder Section */}
        <div className="aboutus_section">
          <div className="founder_box">
            <div className="founder_section">
              <div className="founder_image">
                <img src={founderImage} alt="Anup Arora" className="circular-image" />
              </div>
              <div className="founder_content">
                <h3>Anup Arora</h3>
                <p>
                  PGDM-SCM (Symbiosis, Pune)
                  <br />
                  B.E. (Kota Engineering College, University of Rajasthan)
                </p>
                <p>
                  Experience:
                  <br />
                  Over 28 Years of work experience in Manufacturing, Design, Supply chain, Solar power.
                  <br />
                  Worked with Asahi India Glass Limited, ACME Tele Power Limited & ACME Solar Energy Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

