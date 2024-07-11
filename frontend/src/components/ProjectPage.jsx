import React from 'react';
import '../styles/ProjectPage.css';
import niitImage from '../assets/projectPage/niit.jpg';
import indusImage from '../assets/projectPage/indus.jpg';
import ashirwaadImage from '../assets/projectPage/ashirwaad.jpg';
import rattanImage from '../assets/projectPage/rattan.jpg';
import skgimage from '../assets/projectPage/skg.jpg';
import mechimage from '../assets/projectPage/mechdoor.jpg';
import sttimage from '../assets/projectPage/sttcotex.jpg';
//import rooftopImage from '../assets/projectPage/rooftop.jpg'; // Add this line for the new project

const ProjectPage = () => {
  const projects = [
    {
      title: 'NIIT Learning Gurugram',
      image: niitImage,
    },
    {
      title: 'INDUS PHARMA-166 KWP GHILOTH, RAJ',
      image: indusImage,
    },
    {
      title: 'Ashirvad Pipes, Bikaner 5000 kwp EPC',
      image: ashirwaadImage,
    },
    {
      title: 'Rattan Engg 470 kwp, Kahrani Raj EPC',
      image: rattanImage,
    },
   
  ];

  const otherProjects = [
    {
      title: 'SKG TOWER Gurugram, 760kwp',
      image: skgimage,
    },
    {
      title: 'Mechdoor Hardware Bhiwadi 204 kwp EPC',
      image: mechimage,
    },
    {
      title: 'St Cotex Punjab, 5000kwp I&C',
      image: sttimage,
    },
    {
      title: 'Project D',
      image: rattanImage,
    },
    // Add more projects as needed
  ];

  return (
    <div className="project-page">
      <main className="main-content">
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">Our Work</h1>
            <p className="header-description">
            GreenRoots has successfully completed over 100 solar projects in the past seven years, demonstrating expertise in solar installation across various scales and settings. Each project reflects our commitment to quality, sustainability, and advancing renewable energy solutions.
            </p>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <p className="project-title">{project.title}</p>
            </div>
          ))}
        </div>
        <div className="other-projects-container">
          <div className="other-projects-slider">
            {otherProjects.map((project, index) => (
              <div key={index} className="other-project-card">
                <div className="other-project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <p className="other-project-title">{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
