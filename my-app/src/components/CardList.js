import React from 'react';
import "./cardList.css";





const CardList = (props) => {
    const title = props.title;
    const strengths = props.strengths.split(", ")
    const weaknesses = props.weaknesses.split(", ")
    

  return(
    <div className="mycard">
    <h1>{title}</h1>
    <p>{}</p>
    <div className="listContainer">
    <div className="Strengths">
        <h1>Strengths</h1>
        <ul>
        {strengths.map((strength) => <li>{strength}</li>)}
        </ul>
    </div>
    <div className="Weaknesses">
        <h1>Weaknesses</h1>
        <ul>
        {weaknesses.map((weakness) => <li>{weakness}</li>)}    
        </ul>
    </div>
    </div>
    </div>
  )
}


export default CardList;