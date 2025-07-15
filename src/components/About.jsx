import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/about.css";
import founderImage from "../assets/about/founder.jpeg";
import awardImage1 from "../assets/about/award1.jpg";
import awardImage2 from "../assets/about/award2.jpg";
import awardImage3 from "../assets/about/award3.jpg";
import awardImage4 from "../assets/about/epc.jpg";
import solar from "../assets/about/solar-panel.webp";
import CountUp from "./CountUp";

const AboutUs = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");


  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await axios.get('/api/youtube-thumbnail');
        const thumbnailUrl = response.data.thumbnailUrl;
        setThumbnailUrl(thumbnailUrl);
      } catch (error) {
        console.error('Error fetching YouTube video thumbnail:', error);
      }
    };
  
    fetchThumbnail();
  }, []);
  


  return (
    <div id="aboutus" className="aboutus">
      <div className="aboutus_container">
        {/* About Us Section */}
        <div className="aboutus_section">
          <div className="aboutus_content_container">
            <img src={solar} alt="Solar Panels" className="aboutus_image" />
            <div className="aboutus_intro">
              <h2 className="aboutus_title">Welcome to Greenroots</h2>
              <h2 className="aboutus_title">Renewable Energy</h2>
              <p className="aboutus_short_description">
                We empower homes and businesses with sustainable energy solutions, 
                reducing costs and environmental impact. Committed to innovation, 
                we lead in renewable energy technology. At Greenroots Renewable Energy Pvt. Ltd., 
                we envision every home and business harnessing clean, renewable energy for a healthier planet. 
                Join us in paving the way towards a sustainable future.
              </p>
              <div className="aboutus_stats">
                <div className="aboutus_stat">
                  <div className="stat_icon">🌟</div>
                  <div className="stat_info">
                    <h3 className="stat_number">100+</h3>
                    <p className="stat_label">Projects Completed</p>
                  </div>
                </div>
                <div className="aboutus_stat">
                  <div className="stat_icon">👥</div>
                  <div className="stat_info">
                    <h3 className="stat_number">40+</h3>
                    <p className="stat_label">Employees Working</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Us Section */}

        {/* YouTube Video Section */}
        <div className="youtube_video">
          <div className="video_description">
            <h2>Why should we Switch to Solar?</h2>
            <p>
              Switching to solar energy is crucial for reducing our dependence on fossil fuels and mitigating climate change. 
              Solar power is renewable, abundant, and emits significantly fewer greenhouse gases compared to traditional energy sources. 
              Embracing solar energy not only lowers carbon footprints but also offers long-term cost savings and energy independence. 
              Greenroots can facilitate this transition by providing expert design & installation services tailored to individual needs. 
              With a commitment to quality and sustainability, Greenroots ensures seamless integration of solar systems, optimizing efficiency and reliability 
              while contributing to a cleaner environment and a brighter future.
            </p>
          </div>
          <div className="video_frame">
            {/* Display the thumbnail if available */}
            {thumbnailUrl ? (
              <img src={thumbnailUrl} alt="YouTube Video Thumbnail" />
            ) : (
              <iframe
                width="520"
                height="370"
                src="https://www.youtube.com/embed/KvWSCzrvSA0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        {/* End YouTube Video Section */}

        <CountUp />

        <section className="why_choose_us">
          <div className="container">
            <h2 className="section_title">Why Choose Us?</h2>
            <p className="section_text">
              At Greenroots Renewable Energy Pvt. Ltd., we stand at the forefront of solar technology, offering unparalleled expertise in solar panel system installations. 
              By choosing us, you're not just adopting a renewable energy solution—you're making a smart investment in your future. Our top-tier solar systems are designed to meet 
              your unique energy needs, delivering significant cost savings through reduced electricity bills and tax incentives. Embrace sustainability by decreasing your carbon footprint 
              and contributing to a healthier planet. Our comprehensive services include detailed site assessments, custom system designs with advanced technology, and professional installation 
              by certified technicians. We ensure your system operates at its best with ongoing maintenance and 24/7 support. With flexible financing options like solar loans, leasing, and Power 
              Purchase Agreements (PPAs), making the switch to solar energy has never been easier. Choose Greenroots for energy independence and a greener tomorrow.
            </p>
          </div>
        </section>

        {/* Awards and Achievements Section */}
        <div className="aboutus_section">
          <div className="section_title">Awards and Achievements</div>
          <div className="awards_grid">
            <div className="award_card">
              <img src={awardImage1} alt="Award 1" />
              <p className="award_title">Solar EPC Company of the Year 2024 - Residential [PLATINUM]</p>
            </div>
            <div className="award_card">
              <img src={awardImage2} alt="Award 2" />
              <p className="award_title">Solar EPC Company of the Year 2024 - Commercial [GOLD]</p>
            </div>
            <div className="award_card">
              <img src={awardImage3} alt="Award 3" />
              <p className="award_title">Solar EPC Company of the Year 2024 - Industrial [Silver]</p>
            </div>
            <div className="award_card">
              <img src={awardImage4} alt="Award 4" />
              <p className="award_title">Rooftop EPC Company of the Year 2023 - C&I [PLATINUM]</p>
            </div>
            
          </div>
        </div>
        {/* End Awards and Achievements Section */}

        {/* Founder Section */}
        <div className="aboutus_section">
          <div className="founder_box">
            <div className="founder_section">
              <div className="founder_image">
                <img src={founderImage} alt="Anup Arora" className="circular-image" />
              </div>
              <div className="founder_content">
                <h3>Anup Arora</h3>
                <h5>Founder & Director</h5>
                <p>
                  PGDM-SCM (Symbiosis, Pune)
                  <br />
                  B.E. (Kota Engineering College, University of Rajasthan)
                </p>
                <p>
                  Experience:
                  <br />
                  Over 28 Years of work experience in Manufacturing,
                  <br />
                  Design, Supply chain, Solar power.
                  <br />
                  Worked with Asahi India Glass Limited, ACME Tele
                  <br />
                  Power Limited & ACME Solar Energy Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Founder Section */}
      </div>
    </div>
  );
};

export default AboutUs;
