import React from 'react';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const projects = [
    {
      title: 'Project 1 New construction',
      image: 'https://cdn.usegalileo.ai/sdxl10/4f16013d-f5e5-46b7-a305-95c1e1ea1f99.png'
    },
    {
      title: 'Project 2 Renovation',
      image: 'https://cdn.usegalileo.ai/sdxl10/88a754f4-56a1-4ed3-9e04-1c3725277ed1.png'
    },
    {
        title: 'Project 1 New construction',
        image: 'https://cdn.usegalileo.ai/sdxl10/4f16013d-f5e5-46b7-a305-95c1e1ea1f99.png'
      },
      {
        title: 'Project 2 Renovation',
        image: 'https://cdn.usegalileo.ai/sdxl10/88a754f4-56a1-4ed3-9e04-1c3725277ed1.png'
      },
    // Add other projects similarly
  ];

  return (
    <div className="project-page">
      <main className="main-content">
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">Our Work</h1>
            <p className="header-description">
              We are an environmentally friendly renewable energy company offering a broad portfolio of technologies, products, & solutions to our clients globally
            </p>
          </div>
        </div>
        {/* <div className="search-container">
          <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <input type="text" placeholder="Search for a project" />
          </div>
        </div> */}
        {/* <h2 className="section-title">Featured projects</h2> */}
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <p className="project-title">{project.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
