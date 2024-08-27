import React from 'react';

const projects = [
  { name: 'Project 1', url: 'https://github.com/KarimSasa/project1' },
  { name: 'Project 2', url: 'https://github.com/KarimSasa/project2' },
];

const Projects = () => (
  <section>
    <h1>My Projects</h1>
    <ul>
      {projects.map((project) => (
        <li key={project.name}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
