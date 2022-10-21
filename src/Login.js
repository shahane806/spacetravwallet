import { Button } from '@mui/material';
import React from 'react'
import './Login.css';
import { accessUrl } from './GoogleAuth';

export default function Login() {
 
  return (
    <div className='login'>
     
      
        <img className = "logo" src='https://spacetravblog.000webhostapp.com/logo.png' alt='logo'></img>
        <a  href={accessUrl}>        <Button>Login to SpaceTrav</Button></a>
        
    </div>
  )
}
