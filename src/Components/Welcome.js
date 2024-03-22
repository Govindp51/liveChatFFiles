import React from 'react';
 import logo from "../Images/lives.png";
function Welcome() {
  return (
    <div className='welcome-container'>
    <img src={logo} alt='logo' className='welcome-logo'/>
    <p>View and text directly to people present in the chat Room.</p>
    </div>
  )
}

export default Welcome;