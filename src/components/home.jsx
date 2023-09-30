import React from "react";
import "./home.css"
import Services from "./services";
import About from "./about";
import Whychoose from "./whychoose";
import Team from "./team";
import Footer from "./footer";

function Home(){
    return <div>
        <div className="home-container">
         <div className="home-title-info">
             <h1>CRYPTO <br/>CURRENCY</h1>
             <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
             <button>Read More</button>
         </div>
          <div className="home-logo" style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
            <img  className="logo"  src="images/slider-img.png" alt="slide" style={
                {width:"350px",
                height:"450px",
                padding:"0px",
                
                }
                } />
         </div>
            
       </div>
       <Services/>
       <About/>
       <Whychoose/>
       <Team/>
       <Footer/>
    </div> 
}
export default Home;