import React from 'react';
import "./credits.css";





const Credits = (props) => {
    const title = props.title;
    const sources = props.sources.split(" ")
  return(
    <div className="mycard">
    <h1>{title}</h1>
    <div className="Strengths">
        <ul>
        {sources.map((source) => <li>{source}</li>)}
        </ul>
    </div>
    </div>
  )
}


export default Credits;