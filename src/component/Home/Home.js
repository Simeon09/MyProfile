import React from "react";

import Navbar from "../Navbar/Navbar";
import linkeden from "../images/Group 7.png";
import twitter from "../images/Group 8.png";
import simeon from "../images/simeonstand (2).png";
import Skills from "../Skills/Skills";
import "./sass/Home.css";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="sectionOne">
        <div>
          <h6>HI THERE </h6>
          <h3>I AM SIMEON OJETOLA</h3>
          <h1>
            A Top-notch <br></br>Junior Front-end Developer, <br></br> and
            Hydrologist.
          </h1>
          <span>
            <a href="https://www.linkedin.com/in/ojetola-simeon-6328111a4" target='_blank' rel="noopener noreferrer"  ><img src={linkeden} alt="link" /></a>
            <a href="https://twitter.com/OjaySimeon?s=09" target='_blank' rel="noopener noreferrer" ><img src={twitter} alt="twit" /></a>
          </span>
        </div>
        <div>
          <img src={simeon} alt="personalpicture" />
        </div>
      </section>
      <article>
        <h1 id='About'>About Me</h1>
        <p>
          Simeon Ojetola is a passionate and goal driven Techpreneur whose
          interest is in using technology to build solutions to solve real world
          problems.
        </p>
        <a href="https://www.linkedin.com/in/ojetola-simeon-6328111a4" rel="noopener noreferrer"  target='_blank'><img src={linkeden} alt="link" /></a>
        <a  rel="noopener noreferrer"  href="https://twitter.com/OjaySimeon?s=09" target='_blank'> <img src={twitter} alt="twit" /></a>
      </article>
      <Skills/>
      <Services/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
