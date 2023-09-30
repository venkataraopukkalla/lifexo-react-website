import React from "react";
import "./whychoose.css"
export default function Cards(props){
    return <div className="card-container">
        <img src={props.image} alt={props.title}/>
        <h2>{props.title}</h2>
        <p>{props.story}</p>
    </div>
 }