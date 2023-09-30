import React from "react";
import teamInfro from "./team-container";
import Card from "./team-card";

function box(teamInfro){
    return <Card
        key={teamInfro.no}
        image={teamInfro.image}
        name={teamInfro.name}
        role={teamInfro.role}
        fb={teamInfro.fb}
        twitter={teamInfro.twitter}
        linkdin={teamInfro.linkdin}
        youtube={teamInfro.youtube}

    />
}

export default function Team(){
    return <div className="team-container">
     <h2>Our <span style={{color:"red"}}>Team</span></h2>
     <div className="team-grid">
      
     {teamInfro.map(box)}
     

     </div>

    </div>
}