import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from './navbar'
import logo from './image/CONNECT_LOGO.png'

function login() {
  const [txt,settxt]=useState(false);
  const [inp,setinp] = useState([]);
  const navigate = useNavigate();
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


    const onSubmit = (d)=>{
      const found = inp.find(item=> item.email === d.email)
      try {
        if(found.email===d.email && found.password===d.password){
          navigate(`/dashboard/${found.id}`)
        }else{
          alert("please enter correct email and password")
        }
      } catch (error) {
        alert("please enter correct email and password")
      }
      
    }


  return (
    <>
    <Navbar dash="/"/>
    <div className="log">
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}>
        <img className='login-logo' src={logo} alt="logo" />
        <h2 className='font2'>Login into Connect Coolie (as User)</h2>
        <input className='inp-log' type="email" placeholder='Enter the Email' {...register("email",{required:{value:true,message:"Email require"}})}/>
        {/* {errors.email && <p className='errormsg'>{errors.email.message}</p>} */}
        <div className="view-pass">
          <input className='inp-log inp-pass' type={txt?"text":"password"} placeholder='Enter the Password' {...register("password",{required:{value:true,message:"Password require"}})}/>
          <div className='view' onClick={()=>settxt(!txt)}>{!txt?"Show":"Hide"}</div>
        </div>
        {/* {errors.password && <p className='errormsg'>{errors.password.message}</p>} */}
        <button className="log-btn">Log in</button>
        <div className="login-userlink">
          <Link className='userlink' to="/forgot">Forgotten password</Link>
          <Link className='userlink' to="/signup">Sign up for Connect coolie</Link> 
        </div>
      </form>
    </div>
    </>
  )
}

export default login