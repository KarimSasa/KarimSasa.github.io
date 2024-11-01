import React, { useState } from 'react';

const Projects = () => {
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);

  const handleShowProject1 = () => {
    setShowProject1(true);
    setShowProject2(false);
    setShowProject3(false);
  };

  const handleShowProject2 = () => {
    setShowProject2(true);
    setShowProject1(false);
    setShowProject3(false);
  };

  const handleShowProject3 = () => {
    setShowProject3(true);
    setShowProject1(false);
    setShowProject2(false);
  };

  const handleBackToProjects = () => {
    setShowProject1(false);
    setShowProject2(false);
    setShowProject3(false);
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>
      {!showProject1 && !showProject2 && !showProject3 ? (
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
            <button onClick={handleShowProject1} className="project-button">
              Project 1: Data Mining
            </button>
          </li>
          <li>
            <button onClick={handleShowProject2} className="project-button">
              Project 2: Data Mining
            </button>
          </li>
          <li>
            <button onClick={handleShowProject3} className="project-button">
              Project 3: Data Mining
            </button>
          </li>
        </ul>
      ) : showProject1 ? (
        <div className="document-section">
          <h3>Project 1: Data Mining</h3>
          <div>
            <a
              href="Project_1_Karim_Sasa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Open PDF
            </a>
            <a
              href="Project_1.html"
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
      ) : showProject2 ? (
        <div className="document-section">
          <h3>Project 2: Data Mining</h3>
          <div>
            <a
              href="Project_2_Karim_Sasa_final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Open PDF
            </a>
            <a
              href="Project_2.html"
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
      ) : (
        <div className="document-section">
          <h3>Project 3: Data Mining</h3>
          <div>
            <a
              href="Project_3_Karim_Sasa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Open PDF
            </a>
            <a
              href="Project_3.html"
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
