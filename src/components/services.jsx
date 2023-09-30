
import React from "react";

import "./services.css";
import Cards from "./services-cards";
import cardReqInfo from "./services-card-container";



export default function Services(){
    return <div>
        <div className="services-container">

         <div className="services-title">
              <h2>Our Services</h2>
              <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>

         </div>


         <div className="services-grid">
         {cardReqInfo.map(cardReqInfo =>{
            return <Cards
                key={cardReqInfo.no}
                image={cardReqInfo.image}
                title={cardReqInfo.title}
                story={cardReqInfo.story}
                readmore={cardReqInfo.readmore}
    />

         })}
         </div>

         <div className="services-viewall">
          
          <button >Viewall</button>

         </div>
         

        </div>
    </div>
}