import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css'; // Import custom styles

// Sample images (replace with actual images)
import projectImage1 from '../assets/company.jpeg';
import projectImage2 from '../assets/company.jpeg';
import projectImage3 from '../assets/company.jpeg';
import projectImage4 from '../assets/company.jpeg';
import projectImage5 from '../assets/company.jpeg';
import projectImage6 from '../assets/company.jpeg';
import projectImage7 from '../assets/company.jpeg';
import projectImage8 from '../assets/company.jpeg';
import projectImage9 from '../assets/company.jpeg';
import projectImage10 from '../assets/company.jpeg';

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const projects = [
    { image: projectImage1, title: 'Project 1: Cozy Cabin', description: 'A cozy cabin nestled in the woods' },
    { image: projectImage2, title: 'Project 2: Rustic Retreat', description: 'A rustic retreat with a warm fireplace' },
    { image: projectImage3, title: 'Project 3: Serene Sanctuary', description: 'A serene sanctuary with panoramic views' },
    { image: projectImage4, title: 'Project 4: Mountain Majesty', description: 'A mountain majesty with modern amenities' },
    { image: projectImage5, title: 'Project 5: Tranquil Timberline', description: 'A tranquil timberline escape' },
    { image: projectImage6, title: 'Project 6: Pinnacle Perch', description: 'A pinnacle perch with a bird\'s eye view' },
    { image: projectImage7, title: 'Project 7: Alpine Abode', description: 'An alpine abode with contemporary design' },
    { image: projectImage8, title: 'Project 8: Summit Style', description: 'Summit style for the ultimate mountain experience' },
    { image: projectImage9, title: 'Project 9: Elevated Elegance', description: 'Elevated elegance in every detail' },
    { image: projectImage10, title: 'Project 10: Vista Villa', description: 'A villa with stunning vistas of Twin Peaks' },
  ];

  return (
    <div className="project-carousel-container">
      <h5 className="project-carousel-heading">Major Projects</h5>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
