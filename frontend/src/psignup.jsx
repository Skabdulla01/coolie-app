import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Navbar from './navbar'
import logo from './image/CONNECT_LOGO.png'
import {useNavigate} from 'react-router-dom'

function psignup() {
    const navigate = useNavigate();

    const [value,setvalue]=useState()
    const [inp,setinp]=useState([]);


    useEffect(()=>{
        axios.get("/api/plogin")
        .then((res)=> {
          setinp(res.data)
        })
        .catch((err)=>{console.log(err)})
      })
      
      useEffect(()=>{
        setvalue(inp.length+2200)
      },[inp])
      



     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()


        const onSubmit = async (data)=>{
            try {
                const newdata = {...data,pid: value};
                await axios.post("/api/psignup",newdata)
                alert("sign up is completed successfully")
                navigate(`/plogin`)
            } catch (error) {
                console.log(error)
            }
        }







  return (
    <>
    <Navbar dash="/"/>
    <div className="log">
      <form className="logsdetail logDetail" onSubmit={handleSubmit(onSubmit)}>
        <img className='login-logo' src={logo} alt="logo" />
        <h2>Create a new account (as Connect)</h2>

        <div className="signup-data">
          <div className="inp-data">
          <input className='inps inp-log' type="text" placeholder='Enter Firstname' {...register("pfirstname",{required:{value:true,message:"firstname require"}})}/>
          {errors.firstname && <p className='errormsg'>{errors.firstname.message}</p>}
          </div>

          <div className="inp-data">
          <input className='inps inp-log' type="text" placeholder='Enter Lastname' {...register("plastname",{required:{value:true,message:"lastname require"}})}/>
          {errors.lastname && <p className='errormsg'>{errors.lastname.message}</p>}
          </div>
        </div>


        <div className="signup-data">
          <div className="inp-data">
          <input className='inps inp-log' type="email" placeholder='Enter Email'{...register("pemail",{required:{value:true,message:"email require"}})}/>
          {errors.email && <p className='errormsg'>{errors.email.message}</p>}
          </div>

          <div className="inp-data">
          <input className='inps inp-log' type="text" placeholder='Enter phone number' {...register("pnumber",{required:{value:true,message:"phone number require"}})}/>
          {errors.phonenumber && <p className='errormsg'>{errors.phonenumber.message}</p>}
          </div>
        </div>

          <input className='inp-log' type="text" placeholder='Enter password' {...register("ppassword",{required:{value:true,message:"password require"}})}/>
          {errors.password && <p className='errormsg'>{errors.password.message}</p>}
        
        <button className='log-btn'>Sign up</button>
      </form>
    </div>
    </>
  )
}

export default psignup