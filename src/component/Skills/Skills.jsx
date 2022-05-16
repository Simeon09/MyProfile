import React from 'react';
import HTML from '../images/html.png';
import Css from '../images/Cssnoback.png';
import SASS from '../images/sass.png';
import NewBoot from '../images/NewBoot (2).png';
import Python from '../images/phyton.png';
import REACTL from '../images/react (2).png';
import line from '../images/lineHtml.png'
import boot from '../images/lineBoot.png'
import phy from '../images/linephy.png'
import reac from '../images/linereact.png'
import './skills.css'
const Skills = () => {
  return (
    < div className='mySkills'>
    
        <h1> My Skills </h1>
        <p>Here are a few skills i possess</p>
        <div className='skills'>
        <div>
            <span>
             <img src={HTML} alt="html"/> <div>

             <label htmlFor="file">HTML</label>
               <img src={line} alt='progress' />
             </div>
            </span>
            <span>
            <img src={Css} alt="css" className='picturePro'/>
            <div>

             <label htmlFor="file">CSS</label>
             <img src={line}  alt="progress"/>
            </div>
            </span> 
            <span>
            <img src={SASS} alt="css" className='picturePro'/>
            <div>

             <label htmlFor="file">SASS</label>
             <img src={line} alt="progress" />
            </div>
            </span> 
            
        </div>
        <div>
        <span>
             <img src={NewBoot} className='pictureProboost' alt="html"/>
             <div>

             <label htmlFor="file">Bootstrap</label>
             <img src={boot} alt="boot"/>

             </div>
            </span>
            <span>
            <img src={Python} alt="phyton" />
            <div>

             <label htmlFor="file">Python</label>
               <img src={phy} alt="phy"/>

            </div>
            </span> 
            <span>
            <img src={REACTL} alt="css" className='picturereact'/>
            <div>

             <label htmlFor="file">REACT</label>
                <img src={reac} alt="progress"/>
            </div>
            </span> 
        </div>

        </div>

    


    </div>
  )
}

export default Skills