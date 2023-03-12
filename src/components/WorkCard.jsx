import React from 'react';
function WorkCard(props){
  return(
    <div className="work-card">
        <img src={props.image} className="work-image" alt={props.alt}/>
        <h2 className="work-title">{props.title}</h2>
        <p className="work-text">{props.text}</p>
    </div>
  )
}

export default WorkCard