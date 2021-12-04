import React from "react";
import Card from "./components/card";
import Nav from "./components/nav";
import { useState } from "react";
const Page2 = () => {

    const [onNode, setOnNode] = useState(0);

    return (
        <div className="pageContent">
           
            <Nav />
            
            <div className="switchButtons">
                <button className="frameWorkButton" onClick={()=> setOnNode(false)}>React.Js</button>
                <button className="frameWorkButton" onClick={()=> setOnNode(true)}>Node.js</button>
            </div>
            
            <FrameWorkToShow onNode = {onNode} />
        </div>
    )
}


const DisplayNode = () => {
    return (
      <div className="NodeJsCards">
        <Card title = "How to install Node JS:" content=""/>
        <Card title="Step 1: Download Node.Js installer:" image="https://cdn.discordapp.com/attachments/823031722781442109/916448656486445056/unknown.png" content="To install Node.js you must first download the installer from the node.js website: " />
        <Card title="Step 2:" content="Follow the steps in the installer you have downloaded. Once complete npm (node package manager) and Node.Js will be installed on your machine. You can use 'node -v ' and 'npm -v' in order to check if it was installed correctly."  image="https://cdn.discordapp.com/attachments/823031722781442109/916453568079335444/unknown.png" />
      </div>
    )
  }
  
  
  const DisplayReact = () => {
    return (
      <div className="ReactJsCards">
       
        <Card title = "How to install React JS:" content=""/>
        <Card title="Step 1: install Node.JS / NPM"  content = "In order to create react apps you must use the tool create-react-app, this tool can be easily installed through the node package manager (npm). In order to install create-react-app make sure you have node.js installed on your machine. If you are unsure if you have node.js and npm installed, simple enter 'npm -v' on the command prompt to check your version. "/>
        <Card title="Step 2:" image="https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg"content="Once you are sure that NPM is installed on your machine, simply type 'npx create-react-app x' in the directory where you desire your react app to be created, where x is the desired name of your app. This command is running the create-react-app program and creating a react app in the directory you are in without installing anything on your machine besides the assets required for your react app."/>
   
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

export default Page2;