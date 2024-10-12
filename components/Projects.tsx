import React, { useState } from 'react';

const Projects = () => {
  const [showDataMiningOptions, setShowDataMiningOptions] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleShowProject = (project) => {
    setCurrentProject(project);
    setShowDataMiningOptions(true);
  };

  const handleBackToProjects = () => {
    setShowDataMiningOptions(false);
    setCurrentProject(null);
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
            <button
              onClick={() => handleShowProject("Project 1")}
              className="project-button"
            >
              Project 1: Data Mining
            </button>
          </li>
          <li>
            <button
              onClick={() => handleShowProject("Project 2")}
              className="project-button"
            >
              Project 2: Data Mining
            </button>
          </li>
        </ul>
      ) : (
        <div className="document-section">
          {currentProject === "Project 1" ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
          <button onClick={handleBackToProjects} className="project-button">
            Back to Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
