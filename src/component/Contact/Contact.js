import React, {  useState } from 'react';
import './sass/contact.css'
import linkeden from "../images/Group 7.png";
import twitter from "../images/Group 8.png";
import Email  from '../images/emailIcon.svg';
import Phone from "../images/phoneIcon.png"
const Contact = () => {
    const [details, setDetails] = useState({
        Name: "",
        email: "",
        message: "",


    });
    // const [name ,setName] = useState('simeon')
    
    const HandleChange = (e) =>{
        setDetails({
            ...details,
            [e.target.name]: e.target.value

        })
    
    }
    const submitHandler = (e) => {
            e.preventDefault();
            sessionStorage.setItem('userDetails' ,JSON.stringify({...details}))
            window.location="/Welcome"
    }
   
    
  return (
    <div className='contact' id='contact'>
        <div className='socialContact'>
            <h1>Get In Touch.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
            <span>
            <a rel="noopener noreferrer"  href="https://www.linkedin.com/in/ojetola-simeon-6328111a4" target='_blank'><img src={linkeden} alt="link" /></a>
            <a  rel="noopener noreferrer" href="https://twitter.com/OjaySimeon?s=09" target='_blank'><img src={twitter} alt="twit" /></a>
            <p>- Xyluz</p>
          </span>
          <div>
              <span>
              <img src={Email} alt='email'/>
              </span>
              <span>
                  <h6>Simeonolawale69@gmail.com</h6>
                  <p>Send a message Anytime!</p>
              </span>

              
          </div>
          <div>
              <span>
              <img src={Phone} alt='email'/>
              </span>
              <span>
                  <h6>09036287406</h6>
                  <p>Send a message Anytime!</p>
              </span>

              
          </div>
        </div>
        <div className='Message'>
            <h2>Need a Service?</h2>
            <h1>Send A Message </h1>
            <form autoComplete='off' onSubmit={submitHandler}>

            
               <label htmlFor="name">Enter Fullname</label><br></br>
               <input  id='name' type='text' name='Name' onChange={HandleChange} /><br></br>
               
            
            
               <label htmlFor="email">Enter Email Address</label><br></br>
               <input  id='email' type='email' name='email'  required  onChange={HandleChange} /><br></br>
               
            
               <label htmlFor="message">Write a Message</label><br></br>
               <textarea id='message' rows='3' cols='50'  onChange={HandleChange} name='message' ></textarea> <br></br>
               
               <button type='submit'>Send Message</button>
            
            </form>



        </div>

    </div>
  )
}

export default Contact