import { Button, LinearProgress, TextField } from '@mui/material'
import './Login.css'
import img from './logo_saylaniwelfareusa.22bf709605809177256c-removebg-preview.png'
import img2 from './png-transparent-student-higher-education-study-skills-learning-products-people-logo-teacher-removebg-preview.png'

import React, { useState } from 'react'


const Login = () => {
  const [islodaing,setIsLoding]=useState(false)
  return (
    <div style={{width:"100%",height:"100vh"}}>
       {
        islodaing &&
         <LinearProgress /> 
      }
      {/* <div style={{display:"flex",justifyContent:"center"}}>
            <img src={img} style={{width:"300px"}} alt="" /></div> */}
        <div className='Wrapper'>
            <form className='formclass' action="">
              <img src={img2}alt="" style={{width:"100px" ,marginTop:"80px"}} />
            <p className='title'> Student Login</p>
            <TextField id="outlined-basics" className=' ' type='email' label="Enter Email" variant="outlined" />
            <TextField id="outlined-basics" className=' ' type='password' label="Enter Password" variant="outlined" />
              
                <Button className='button'  variant="contained" color="success"  onClick={()=>{setIsLoding(true)}}> login</Button>
            <p>Not a Member ? <a href="">Register</a> </p>
            </form>
        </div>
    </div>
  )
}

export default Login
