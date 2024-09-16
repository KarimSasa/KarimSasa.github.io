import React, { useState } from 'react';

const Projects = () => {
  const [showDataMiningOptions, setShowDataMiningOptions] = useState(false);

  const handleShowDataMining = () => {
    setShowDataMiningOptions(true);
  };

  const handleBackToProjects = () => {
    setShowDataMiningOptions(false);
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>
      {!showDataMiningOptions ? (
        <ul>
          <li>
            <a
              href="https://github.com/KarimSasa/Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Projects Repository
            </a>
          </li>
          <li>
            <button onClick={handleShowDataMining} className="project-button">
              Project 1: Data Mining
            </button>
          </li>
        </ul>
      ) : (
        <div className="document-section">
          <h3>Project 1: Data Mining</h3>
          <div>
            <a
              href="../public/Project_1_Karim_Sasa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Open PDF
            </a>
            <a
              href="../public/Project_1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Open HTML
            </a>
          </div>
          <button onClick={handleBackToProjects} className="project-button">
            Back to Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
