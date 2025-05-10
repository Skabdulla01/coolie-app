import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function pforgot() {
  const navigate = useNavigate()
    const [inp,setinp]=useState([]);

    useEffect(()=>{
      axios.get("/api/plogin")
      .then((res)=> {
        setinp(res.data)
      })
      .catch((err)=>{console.log(err)})
    })
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()


    const onSubmit = async (data)=>{
      const found = inp.find(item=> item.pnumber.toString() === data.pnumber)
        try {
          if (found) {
              await axios.put("/api/pupdatepassword",data)
              alert("Password is successfully changed")
              navigate(`/plogin`)
          } else {
          alert("Please enter correct Phone number")
          }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <Navbar dash="/" />
    <div className="log-booking log">
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}>
      <h2>Reset the Password (as connect)</h2>

      <input className='inp-log' type="text" placeholder='Enter register Phone Number'{...register('pnumber',{required: {value:true, message:"Please enter phone number"}})}/>
      {/* {errors.pnr && <p className='errormsg'>{errors.pnr.message}</p>} */}

      <input className='inp-log' type="text" placeholder='Enter new password'{...register('ppassword',{required: {value:true, message:"Please enter station"}})}/>
      {/* {errors.station && <p className='errormsg'>{errors.station.message}</p>} */}
      
      <button className='log-btn'>Next</button>
      </form>
    </div>
    </>
  )
}

export default pforgot