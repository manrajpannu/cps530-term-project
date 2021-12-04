import React from "react"
import ReactDom from "react-dom"
import Nav  from "./components/nav";
import  'react-router-dom';
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";

import HomePage from "./Portfolio/HomePage";
import Projects from "./Portfolio/Projects";
import Skills from "./Portfolio/Skills";
import Contact from "./Portfolio/Contact";

import './index.css';
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";


const reactContentRoot = document.getElementById("root")

const App = () => {



  return (
    <div>
      <div className="App"  >
        <Router>
            <Routes>
             
                <Route path="/" exact element={<Home />}/>
                <Route path="/page2" element = {<Page2 />} />
                <Route path="/page3" element = {<Page3 />} />
                <Route path="/page4" element = {<Page4 />} />
                <Route path="/HomePage" element = {<HomePage />} />
                <Route path="/Projects" element = {<Projects />} />
                <Route path="/Skills" element = {<Skills />} />
                <Route path="/Contact" element = {<Contact />} />
                <Route path="/page5" element = {<Page5 />} />
                <Route path="/page6" element = {<Page6 />} />

             </Routes>
        
        </Router>
      </div>
    </div>
  )


}

const DisplayNode = () => {
  return (
    <div className="NodeJsCards">
      <Card title = "Node JS" content=""/>
      <Card title="Popularity" content="Node.JS is a very popular backend framework/library. Node's popularity is because it is lightweight, easy-to-learn and because it is fast. The 2020 Stackoverflow developer survey reports that Node.JS is the number 1 technology in the miscellaneous technologies category. Node's popularity may be due to its fast, lightweight and easy-to-learn nature. Below is a graph of the top ranked Miscellaneous technologies from the 2020 Stackoverflow Developer Survey:" image="https://cdn.discordapp.com/attachments/823031722781442109/916412405725151242/unknown.png"/>
      <CardList title="" strengths="easy to learn as it uses Javascript Syntax, Cost effective when used in team development scenarios, Fast because it is based on C++" weaknesses="Not reliable for cpu intensive tasks, Requires many callback  functions due to its asynchronous nature, Requires experience in Javascript"/>
      <Card title="Uses" content="Node is used as a backend solution usually emplyoed for web apps. It is unique because it is classified as a Javascript runtime environment. It is unique because though it is written in javascript, it executes outside of the browser. Some big companies that use Node.Js in their projects include Amazon, Netflix and LinkedIn. It is also used by Paypal who reported that they saw a 35% decrease in response time after implementing Node.Js."/>
  
    </div>
  )
}


const DisplayReact = () => {
  return (
    <div className="ReactJsCards">
      <Card title = "React JS" content=""/>
      <Card title="Popularity" image="https://cdn.discordapp.com/attachments/823031722781442109/916233483196702750/unknown.png" content = "React JS is a very popular web framework. It is debated if React JS should be considered a library or framework. The 2020 developer survey by Stackoverflow reported that React is the second most popular framework after jQuery. Below is a graph representing the popularity of frameworks amongst profesional developers from the 2020 Stackoverflow Developer Survey."/>
      <CardList title="" strengths = "Easy to pick up if exprienced in HTML and Javascript, Good Documentation and Tutorials Availible, Uses reusable components" weaknesses="Syntax may be confusing to those inexperienced in html or Javascript, Can be confusing if uncomfortable with JSX syntax, Framework is rapidly changing due to frequent updates, forces developers to constantly learn new standards"/>
      <Card title="Uses" content="React is used to create single page applications. It excels at this through its emphasis on building UI components that are made to be reusable. Though it excels at creating single page web applications, it can be used to create multipage websites as well through libraries such as react router or axios along with a backend design. According to React Router their library is used by teams at companies such as Apple, Netflix and Microsoft."/>
 
    </div>
  )
}

const FrameWorkToShow = (props) => {
  if (props.onNode == false){
    return <DisplayReact />;
  } else {
    return <DisplayNode />;
  }
}


const Home = () => {
  const [onNode, setOnNode] = useState(0);

  return(
    <div className="pageContent">
                  <Nav />
      <div className="switchButtons">
        <button className="frameWorkButton" onClick={()=> setOnNode(false)}>React.Js</button>
        <button className="frameWorkButton" onClick={()=> setOnNode(true)}>Node.js</button>
      </div>
    <FrameWorkToShow onNode = {onNode} />
    </div>
  
  )


};







export default App;
ReactDom.render(App(), reactContentRoot)