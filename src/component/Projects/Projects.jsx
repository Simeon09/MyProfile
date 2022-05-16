import React from "react";
import "./sass/projects.css";

const Projects = () => {
   const handleCorbank = (e)=>{
    window.open('https://corebank.netlify.app', '_blank');
   }
   const handleRating = () =>{
     window.open('https://firstratingpage.netlify.app', '_blank')
   }  
   const handleTodo = () => {
    window.open('https://simeonto-do-app.netlify.app', '_blank')
   }
   const handleBookly = () => {
    window.open('https://atc-bookly.netlify.app', '_blank')
   }
   const handleAtc = () => {
    window.open('https://atclanding-bootstrap.netlify.app', '_blank')
   }
   const handleVestium = () => {
    window.open('https://vestiumproject-bootstrap.netlify.app', '_blank')
  }
   


  return (
    <>
      <div className="stress" id="Projects">
        <h1>Milestones of Projects</h1>
        <p>Here are a few  projects i’ve patnered and worked on.</p>
        <div className="dfexbox">
          
            <div className="boxOne" onClick={handleCorbank}>
              <h4>Corebank Project</h4>
            </div>
        
          
            <div className="boxTwo" onClick={handleRating}>
              <h4>Rating-page Project</h4>
            </div>
          

          
            <div className="boxThree" onClick={handleTodo}>
              <h4>My To-Do-List project</h4>
            </div>
         
          
            <div className="boxFour" onClick={handleBookly}>
              <h4>Bookly project</h4>
            </div>
          

          
            <div className="boxFive"  onClick={handleAtc}>
              <h4>ATC-Boostrap Project</h4>
            </div>
          
         
            <div className="boxSix"  onClick={handleVestium}>
              <h4>Vestium Project</h4>
            </div>
          
        </div>
      </div>
      
    </>
  );
};

export default Projects;
