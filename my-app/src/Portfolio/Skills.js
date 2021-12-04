import React from "react";
import { useState } from "react";
import BarChart from "./components/BarChart";
import "./Skills.css";
import Header from "./components/Header";
function Skills() {
  const [state, setstate] = useState(" ");
  return (

    <div id="SpecialPage">
      <Header/>
    <div
      className="skills-page"
      style={{ backgroundImage: `url(/skillsbg.jpg)` }}
      
    >
      <BarChart />
    </div>
    </div>
  );
}

export default Skills;
