import { Button, LinearProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import './otp.css'
import { useSelector } from 'react-redux'


const Otp = () => {
  const [islodaing,setIsLoding]=useState(false)
  const selector=useSelector(state=>state.users)
  console.log(selector,"====> otp wala ")
  return (
    <div>
      {
        islodaing &&
         <LinearProgress /> 
      }
        <div className='Wrap'>
            <h4>OTP</h4>
            <img src="https://cdn-icons-png.flaticon.com/512/11500/11500580.png" alt="" style={{width:"100px", marginTop:"50px"}} />
            <h6>Otp Verifcation</h6>
            <p style={{textAlign:'center'}}>we have sent an otp code on your gmail Account , enter <br/> the code to get Verifcation</p>

            <form className='form3' action="">
            <TextField id="outlined-basis" className=' ' type='text' label="Enter OTP"  variant="outlined" />
            <Button className='buttons'  variant="contained" color="success" onClick={()=>{setIsLoding(true)}}> Verify</Button>
            </form>
        </div>
    </div>
  )
}

export default Otp