import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projectsData.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <Link to={`/projects/${project.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
