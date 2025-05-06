import React from 'react'
import Navbar from './navbar'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function forgot() {
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
    const onSubmit = async (data)=>{
        try {
            await axios.put("/api/updatepassword",data)
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <Navbar dash="/" />
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