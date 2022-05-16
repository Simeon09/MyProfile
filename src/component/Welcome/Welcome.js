import React from 'react'
import './welcome.css'

const Welcome = () => {
    const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
    console.log(userDetails)
  return (
    <div className='welcome'>
        <h1 className='message'>Your message have been sent, {userDetails.Name } <br></br>
            Thanks for your time. 
            </h1>
    </div>
  )
}

export default Welcome