import React from "react";
import "./Section.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Form from "./Form";
import { Button } from "@material-ui/core";

function Section({
  title,
  description,
  backgroundImg,
  showIcon,
  linkedinLink,
  githubLink,
  showForm,
  aboutMe,
  showAboutMe,
  showButton,
  buttonLink,
  showLower,
  lowerText,
}) {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="section-container">
        <div className="section-title">
          <h1>{title}</h1>
            
            <div className="section-links">
              <p className="desc">{description}</p>
              {showIcon && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={linkedinLink}
                >
                  <LinkedInIcon
                    style={{ fontSize: "32px" }}
                    className="linkedIn"
                  />
                </a>
              )}
              {showIcon && (
                <a rel="noopener noreferrer" target="_blank" href={githubLink}>
                  <GitHubIcon style={{ fontSize: "32px" }} className="github" />
                </a>
              )}
            </div>
         
          {showAboutMe && <div className="about-me">{aboutMe}</div>}
          {showButton && (
            <a rel="noopener noreferrer" target="_blank" href={buttonLink}>
              <Button variant="contained" className="resume-button">
                View CV
              </Button>
            </a>
          )}
        </div>
        {showLower && <div className="section-lower">{lowerText}</div>}
      </div>
    </div>
  );
}

export default Section;
