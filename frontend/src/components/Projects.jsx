import React from 'react';
import '../styles/projects.css';

const Projects = () => {
    return (
        <div className="container">
            <h1 className="section-title">Our Projects</h1>

            <div className="responsive-container-block bigContainer">
                <div className="container-block mainColumn">
                    <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" alt="Project 1" />
                    <div className="allText">
                        <p className="text-blk headingText">Project 1</p>
                        <p className="text-blk subHeadingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-blk description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget.</p>
                        <button className="explore">Explore</button>
                    </div>
                </div>
                <div className="container-block mainColumn reverse">
                    <div className="allText">
                        <p className="text-blk headingText">Project 2</p>
                        <p className="text-blk subHeadingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-blk description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget.</p>
                        <button className="explore">Explore</button>
                    </div>
                    <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg" alt="Project 2" />
                </div>
            </div>

            <div className="grid-container">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div className="grid-item" key={index}>
                        <img src={`https://via.placeholder.com/150?text=Project+${index + 1}`} alt={`Project ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
