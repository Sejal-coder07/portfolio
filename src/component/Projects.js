import React from 'react';

function Projects() {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1' },
    { name: 'Project 2', description: 'Description of project 2' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
