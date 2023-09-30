import React from "react";
import Cards from "./whychoose-card";
import chooseInfro from "./whychoose-container";


export default function Whychoose(){

    return <div className="container">
     <h1>Why Choose <span style={{color:"red",fontWeight:"800"}}>Us</span> </h1>

     {chooseInfro.map(chooseInfro =>{
        return <Cards
        key={chooseInfro.no}
        image={chooseInfro.image}
        title={chooseInfro.title}
        story={chooseInfro.story}
    />

     })}
     <button>Read More</button>

    </div>
}