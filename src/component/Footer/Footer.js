import React from 'react'
import {  GoMarkGithub } from "react-icons/go";
import linkeden from "../images/Group 7.png";
import twitter from "../images/Group 8.png";
import './sass/footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <h1>SIMEON OJETOLA</h1>
        <div className='icon'>
        <a rel="noopener noreferrer"  href="https://www.linkedin.com/in/ojetola-simeon-6328111a4" target='_blank'><img src={linkeden} alt="link" /></a>
        <a rel="noopener noreferrer"   href="https://twitter.com/OjaySimeon?s=09" target='_blank'> <img src={twitter} alt="twit" /></a>
       <a rel="noopener noreferrer"  href="https://github.com/Simeon09 " target='_blank'>< GoMarkGithub className='font'/></a>
        </div>
        <p>Copyright &copy; 2022  |  All rights Reserved</p>
    </div>
  )
}

export default Footer