import React from 'react';
import '../app.css';
import { projects } from '../data'; 


const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3 className="project-title">{project.title}</h3>
            <img src={project.image} alt={project.title} className="project-image"/>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
