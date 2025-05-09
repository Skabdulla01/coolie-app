import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function forgot() {
  const [inp,setinp]=useState([]);
  const navigate = useNavigate()
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()

    useEffect(()=>{
      axios.get("/api/login")
      .then((res)=> {
        setinp(res.data)
      })
      .catch((err)=>{console.log(err)})
    })



    const onSubmit = async (data)=>{
      const found = inp.find(item=> item.phonenumber.toString() === data.phonenumber)
      try {
        if (found) {
          await axios.put("/api/updatepassword",data)
          alert("Password is successfully changed")
          navigate(`/login`)
        }
        else{
          alert("Please enter correct Phone number")
        }
      } catch (error) {
        console.log(error)
      }

    }
  return (
    <>
    <Navbar dash="/" nav="no"/>
    <div className="log-booking log">
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}>
      <h2>Reset the Password (as user)</h2>

      <input className='inp-log' type="text" placeholder='Enter register Phone Number'{...register('phonenumber',{required: {value:true, message:"Please enter phone number"}})}/>
      {/* {errors.pnr && <p className='errormsg'>{errors.pnr.message}</p>} */}

      <input className='inp-log' type="text" placeholder='Enter new password'{...register('password',{required: {value:true, message:"Please enter station"}})}/>
      {/* {errors.station && <p className='errormsg'>{errors.station.message}</p>} */}
      
      <button className='log-btn'>Next</button>
      </form>
    </div>
    </>
  )
}

export default forgot