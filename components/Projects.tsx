// src/components/Projects.tsx
import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/KarimSasa/Projects" target="_blank" rel="noopener noreferrer">
            Projects Repository
          </a>
        </li>
        <li>
          <a href="https://github.com/KarimSasa/DataMining" target="_blank" rel="noopener noreferrer">
            Data Mining Project
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
