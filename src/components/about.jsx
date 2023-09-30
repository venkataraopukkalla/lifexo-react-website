import React from "react";
import "./about.css"

export default function About(){
    return  <div className="aboutDiv">
     <div className="about-container">
             <h1><span style={{color:"#6499E9"}}>About</span> <span style={{color:"white",fontFamily:"sans-serif"}}>Us</span></h1>
             <p>Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus</p>
     </div>

       <div className="about-grid">
                <div className="grid-img">
                <img src="/images/about-img.png " alt="about"/>
                </div>
                <div className="grid-part">
                    <h1>We Are Lifexo</h1>
                    <p className="p1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    <p className="p2">All Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.</p>
                            <div className="grid-button">
                              <button> Read More</button>
                            </div>
                </div>
                    
                
                
                

       </div>


       </div>

    
}