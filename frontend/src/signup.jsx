import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Navbar from './navbar'
import logo from './image/CONNECT_LOGO.png'
import {useNavigate} from 'react-router-dom'

function signup() {
    const navigate = useNavigate();

    const [value,setvalue]=useState()
    const [inp,setinp]=useState([]);


    useEffect(()=>{
        axios.get("/api/login")
        .then((res)=> {
          setinp(res.data)
        })
        .catch((err)=>{console.log(err)})
      })
      
      useEffect(()=>{
        setvalue(inp.length+1100)
      },[inp])
      



     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()


        const onSubmit = async (data)=>{
            try {
                const newdata = {...data,id: value};
                await axios.post("/api/signup",newdata)
                alert("sign up is completed successfully")
                navigate(`/login`)

            } catch (error) {
                console.log(error)
            }
        }
        




  return (
    <>
    <Navbar dash="/" nav="no"/>
    <div className="log">
      <form className="logsdetail logDetail" onSubmit={handleSubmit(onSubmit)}>
        <img className='login-logo' src={logo} alt="logo" />
        <h2>Create a new account (as User)</h2>
        <div className="signup-data">
        <div className="inp-data">
        <input className='inps inp-log' type="text" placeholder='Enter Firstname' {...register("firstname",{required:{value:true,message:"Firstname Require"}})}/>
        {/* {errors.firstname && <p className='errormsg'>{errors.firstname.message}</p>} */}
        </div>
        <div className="inp-data">
        <input className='inps inp-log' type="text" placeholder='Enter Lastname' {...register("lastname",{required:{value:true,message:"Lastname Require"}})}/>
        {/* {errors.lastname && <p className='errormsg'>{errors.lastname.message}</p>} */}
        </div>
        </div>


        <div className="signup-data">
        <div className="inp-data">
        <input className='inps inp-log' type="email" placeholder='Enter Email'{...register("email",{required:{value:true,message:"Email Require"}})}/>
        {/* {errors.email && <p className='errormsg'>{errors.email.message}</p>} */}
        </div>
        <div className="inp-data">
        <input className='inps inp-log' type="text" placeholder='Enter phone number' {...register("phonenumber",{required:{value:true,message:"Phone Number Require"}})}/>
        {/* {errors.phonenumber && <p className='errormsg'>{errors.phonenumber.message}</p>} */}
        </div>
        </div>

        <input className='inp-log' type="text" placeholder='Enter password' {...register("password",{required:{value:true,message:"Password Require"}})}/>
        {/* {errors.password && <p className='errormsg'>{errors.password.message}</p>} */}
        
        <button className='log-btn'>Sign up</button>
      </form>
    </div>
    </>
  )
}

export default signup