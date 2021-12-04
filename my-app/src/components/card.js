import React from 'react';
import "./card.css";





const Card = (props) => {
    const title = props.title;
    var content = "";
    if (props.content == undefined){
      content = "content not given"
    } else {
      content = props.content;
    }
    

  return(
    <div className="mycard">
    <h1>{title}</h1>
    <p>{content}</p>
    <div className="image-container">
    <img className="image" src={props.image ? props.image : null} />
    </div>
    </div>
  )
}


export default Card;