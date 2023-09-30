
import React from "react";
import "./team.css";

export default function Card(props){
    return <div className="teamcard-container">
    <img src={props.image} alt={props.name}/>
    <h3>{props.name}</h3>
    <p>{props.role}</p>
     <div className="social-images">
     <i className={props.fb}></i>
     <i className={props.twitter}></i>
     <i className={props.linkdin}></i>
     <i className={props.youtube}></i>

     </div>
           
    </div>
}