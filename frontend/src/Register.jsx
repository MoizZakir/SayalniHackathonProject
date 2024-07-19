import React, { useRef, useState } from 'react'
import  './register.css'
import { Button, LinearProgress, Modal, TextField } from '@mui/material'
import img from './images.png'
import { UseRegister } from './CustomHook/RegisterHook'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { registerStart } from './Redux/UserReducers'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const data=useSelector(state=> state.users)
    console.log(data);
    const [islodaing,setIsLoding]=useState(false)
    const cnic=useRef()
    const name=useRef()
    const email=useRef()
    const password=useRef()
    async function  apiCall(){
        await UseRegister(cnic.current,name.current,email.current,password.current,setIsLoding,dispatch,navigate)

    }
  return (
    <div>
         {
        islodaing &&
         <LinearProgress /> 
      }

<ToastContainer />
        <div className='wrapper'>
            <div className='left d-md-flex d-none w-75'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9k-6c92vXz8TQNd40T75fX-rwgVdLw9uGA&s" alt="" style={{width:"100%", height:"100%"}}/>
            </div>
            <div className='right d-flex w-100 w-md-50  '>
                <img style={{marginBottom:"20px" ,width:"100px"}} src={img} alt="" />
                <h4>STUDENT REGISTRATION</h4>
            <form className='form' action="">
        <p>Already Member Go to <a href="">Login</a></p>
        
        <TextField onChange={(e) => cnic.current=e.target.value} id="outlined-basic" className=' '  type='number' label="Enter CNIC NUMBER" variant="outlined" />
        <TextField onChange={(e) => name.current=e.target.value}  id="outlined-basic" className=' ' type='text' label="Your Name" variant="outlined" />
        <TextField onChange={(e) => email.current=e.target.value} id="outlined-basic" className=' ' type='email' label="Your Email" variant="outlined" />
        <TextField onChange={(e) => password.current=e.target.value} id="outlined-basic" className=' ' type='password' label="Enter Password" variant="outlined" />
              
                <Button className='button'  variant="contained" color="success" onClick={()=>{apiCall()}}> signup</Button>
            </form>
            </div>

        </div>



    </div>
  )
}

export default Register