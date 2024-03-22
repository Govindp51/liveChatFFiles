import React from 'react';
import { Button, TextField } from '@mui/material';
import logo from '../Images/lives.png';


function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p className='text-area'>Login to your Account</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField id="outlined-password-input" label="Enter Password" type="password" autoComplete='current-password' />
            <Button variant="outlined">Login</Button>

        </div>
    </div>
  )
}

export default Login;