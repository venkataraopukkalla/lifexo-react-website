import React from "react";

export default function Cards(props){

    return <div className="cards-container">
         <img src={props.image} alt={props.title}/>
         <h2>{props.title}</h2>
         <p className="info">{props.story}</p>
         <button className="readmore">{props.readmore}</button>
    </div>
    

}