

import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";
export default function Nav() {
  const [menu, setMenu] = React.useState(false);

  //const myRef = React.useRef();
  
  function menuAction() {
    setMenu(!menu);
  }
  return (
    

    <div className="nav-container">
      <div className="nav-title">
        <h2>Lifexo</h2>
      </div>
      <div className="nav-menu" onClick={menuAction}>
        <i className="fa-solid fa-bars icon"></i>
      </div>
      <div className="nav-item">
        <ul className={menu ? "open" : "close"}>
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About 
            </Link>
          </li>
          <li>
            <Link to="/services" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/whyus" className="link">
              Why Us
            </Link>
          </li>
          <li>
            <Link to="/team" className="link">
              Team
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
            <i class="fa-solid fa-user usericon"></i>Login
            </Link>
          </li>
          <li>
            <Link to="/team" className="link">
            <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    
  );
}
