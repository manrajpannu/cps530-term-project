import React from "react";
import Section from "./components/Section";
import "./Homepage.css";
import Header from "./components/Header";
import "./App.css";
function HomePage() {
  return (
    <div className="home">
      <div className="App">
        <Header />
      </div>

      <Section

        backgroundImg={"/3417081.jpg"}
        title={"Raghav Sahoo"}
        description={"React Developer"}
        showIcon={true}
        linkedinLink={"https://www.linkedin.com"}
        githubLink={"https://github.com"}
        showAboutMe={true}
        aboutMe={
          "I like to make pretty things."
        }
        showButton={true}
        buttonLink={
          "www.google.com"
        }
        showLower={false}
        lowerText={"Scroll through some of my projects below"}
      />
    </div>
  );
}

export default HomePage;
