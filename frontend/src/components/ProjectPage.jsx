import React from "react";
import Slider from "react-slick";
import "../styles/ProjectPage.css";
import ask from "../assets/projectPage/ask1.jpg";
import ashirwaadImage from "../assets/projectPage/ashirwaad.jpg";
import rattanImage from "../assets/projectPage/rattan.jpg";
import indusImage from "../assets/projectPage/indus.jpg";
import skgimage from "../assets/projectPage/skg.jpg";
import mechimage from "../assets/projectPage/mechdoor.jpg";
import sttimage from "../assets/projectPage/sttcotex.jpg";
import shree from "../assets/projectPage/shree.jpg";
import exide from "../assets/projectPage/exide.jpg";
import niit from "../assets/projectPage/niit.jpg";
import coxwell from "../assets/projectPage/coxwell.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectPage = () => {
  const projects = [
    {
      title: "ASK Automobiles , Karoli Rajasthan",
      image: ask,
      capacity: "2500 KWP",
      completionDate: "June 2024",
    },
    {
      title: "Ashirvad Pipes, Bikaner ",
      image: ashirwaadImage,
      capacity: "5000 KWP",
      completionDate: "October 2022",
    },
    {
      title: "Rattan Engg , Kahrani Rajasthan",
      image: rattanImage,
      capacity: "470 KWP",
      completionDate: "July 2020",
    },
    {
      title: "SKG TOWER Gurugram",
      image: skgimage,
      capacity: "760 KWP",
      completionDate: "March 2024",
    },
  ];

  const otherProjects = [
    {
      title: "Exide , Bawal",
      image: exide,
      capacity: "900 KWP",
    },
    {
      title: "ShreeJi Coatfab",
      image: shree,
      capacity: "900 KWP",
    },
    {
      title: "Niit Learning , Gurugram ",
      image: niit,
      capacity: "400KWP",
    },
    {
      title: "Mechdoor Hardware ,Bhiwadi Rajasthan ",
      image: mechimage,
      capacity: "204 KWP",
    },
    {
      title: "Coxwel Doms Khushkera , Haryana ",
      image: coxwell,
      capacity: "240 KWP",
    },
    {
      title: "Indus Pharma, Ghiloth Rajasthan",
      image: indusImage,
      capacity: "166 KWP",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 2000, // Time between slides in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="project-page">
      <main className="main-content">
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">Our Work</h1>
            <p className="header-description">
              Greenroots has proudly completed over 100 solar projects in the
              past seven years, showcasing our expertise in solar installation
              across a diverse range of scales and environments. Each project
              underscores our unwavering commitment to quality, sustainability,
              and the advancement of renewable energy solutions.
            </p>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="project-overlay">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>Capacity: {project.capacity}</p>
                  <p>Completion Date: {project.completionDate}</p>
                </div>
              </div>
              <p className="project-title">{project.title}</p>
            </div>
          ))}
        </div>
        <div className="other-projects-container">
          <Slider {...sliderSettings}>
            {otherProjects.map((project, index) => (
              <div key={index} className="other-project-card">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>Capacity: {project.capacity}</p>
                  </div>
                </div>
                <p className="project-title">{project.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
