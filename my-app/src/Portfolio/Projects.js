import React from "react";
import ProjectSection from "./components/ProjectSection";
import "./Projects.css";
import Header from "./components/Header";
function Projects() {
  return (
    <div id="SpecialPage">
      <Header/>
      <div className="project-section-container">
        <ProjectSection />
      </div>
    </div>
   
  );
}

export default Projects;
