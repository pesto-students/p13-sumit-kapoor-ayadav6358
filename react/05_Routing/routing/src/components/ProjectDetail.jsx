import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Add more details about the project */}
    </div>
  );
};

export default ProjectDetail;
