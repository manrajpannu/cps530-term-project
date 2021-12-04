import React from "react";
import Project from "./Project";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div className="project-section">
      <Project
        projectLink={"https://www.google.com/"}
        projectImg={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"}
        title={"Google"}
        description={
          "Worked as a Software engineeer for Google!"
        }
        skillsUsed={["Laravel/PHP Custom Theme", "Sass", "Wordpress"]}
      />
      <Project
        projectLink={"http://www.facebook.com/"}
        projectImg={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"}
        title={"Facebook"}
        description={"Worked as a Software engineeer for Facebook."}
        skillsUsed={["Laravel/PHP Custom Theme", "Sass", "Wordpress"]}
      />
      <Project
        projectLink={"https://www.apple.com/"}
        projectImg={"https://qph.fs.quoracdn.net/main-qimg-32a38eb3353bfb125206cc39a0b7794e-lq"}
        title={"Apple"}
        description={"(Still in development) An exercise in CSS and animations"}
        skillsUsed={[
          "React",
          "Redux & Redux Toolkit",
          "React Router",
          "Material UI, Framer Motion",
        ]}
      />
 
    
    </div>
  );
}

export default ProjectSection;
