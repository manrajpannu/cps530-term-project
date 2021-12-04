import React from 'react';
import "./credits.css";





const Profile = (props) => {
    const name = props.name;
    const responsibilities=props.responsibilities.split(", ")
  return(
    <div className="mycard">
    <h1>{name}</h1>
    <h2>Responsibilities:</h2>
    <div className="Strengths">
        <ul>
        {responsibilities.map((source) => <li>{source}</li>)}
        </ul>
    </div>
    </div>
  )
}


export default Profile;