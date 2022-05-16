import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import linkeden from "../images/Group 7.png";
import twitter from "../images/Group 8.png";
import "./sass/styles.css";

export const Navbar = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <div>
      <nav>
        <h1>SIMEON  OJETOLA.</h1>
        <ul
          className={responsive ? "nav-links-mobile" : "nav-links"}
          onClick={() => setResponsive(false)}>
          <a href="#About">
            <li>About Me</li>
          </a>
          <a href="#Services">
            <li> Services</li>
          </a>
          <a href="#Projects">
            <li> Projects</li>
          </a>
          <a href="#contact">
            <li>Contact Me</li>
          </a>
        </ul>
        <div className="social">
          <a rel="noopener noreferrer"  href="https://www.linkedin.com/in/ojetola-simeon-6328111a4" target='_blank'><img src={linkeden} alt="link" /></a>
          <a  rel="noopener noreferrer" href="https://twitter.com/OjaySimeon?s=09" target='_blank'><img src={twitter} alt="twit" /></a>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => setResponsive(!responsive)}
        >
          {responsive ? <VscChromeClose /> : <FaBars />}
        </button>
      </nav>
      <div>
        
        
      </div>
    </div>
  );
};
export default Navbar
