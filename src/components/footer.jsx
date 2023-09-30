import React from "react";
import "./footer.css";

export default function Footer(){
    const year=new Date().getFullYear();

    return <div className="footer">
    <div className="footer-container">
    <div className="address">
     <h2> Address</h2>
     <h4><i class="fa-solid fa-location-dot" style={{paddingRight:"10px"}}></i>Bengaluru,India</h4>
     <h4><i class="fa-solid fa-phone" style={{paddingRight:"10px"}}></i>call +0123456789</h4>
     <h4> <i class="fa-solid fa-envelope"style={{paddingRight:"10px"}}></i>becoolupdates@gmail.com</h4>


    </div>

    <div className="info">
    <h2>Info</h2>
    <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>

    </div>
    
    </div>
    
   
    <div className="copyright" >
    <p >Copyright<i class="fa-regular fa-copyright"></i>{year}</p>


    </div>


    </div>
}