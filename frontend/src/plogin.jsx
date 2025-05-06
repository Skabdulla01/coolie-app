import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Navbar from './navbar'
import logo from './image/CONNECT_LOGO.png'

function plogin() {
  const [txt,settxt]=useState(false);
    const [inp,setinp] = useState([])
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    useEffect(()=>{
      axios.get("/api/plogin")
      .then((res)=> {
        setinp(res.data)
      })
      .catch((err)=>{console.log(err)})
    })


    




    const onSubmit = (d)=>{
      const found = inp.find(item=> item.pemail === d.email)
      try {
        if(found.pemail===d.email && found.ppassword===d.password){
          navigate(`/porter/${found.pid}`)
        }else{
          alert("please enter correct email and password")
        }
      } catch (error) {
        alert("please enter correct email and password")
      }
    }
  return (
    <>
    <Navbar dash="/" />
    <div className="log">
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}>
        <img className='login-logo' src={logo} alt="logo" />
        <h2>Login into Connect Coolie (as Connect)</h2>
        <input className='inp-log' type="email" placeholder='Enter the Email' {...register("email",{required:{value:true,message:"Email require"}})}/>
        {/* {errors.email && <p className='errormsg'>{errors.email.message}</p>} */}
        <div className="view-pass">
          <input className='inp-log inp-pass' type={txt?"text":"password"} placeholder='Enter the Password' {...register("password",{required:{value:true,message:"Password require"}})}/>
          <div className='view' onClick={()=>settxt(!txt)}>{!txt?"Show":"Hide"}</div>
        </div>
        {/* {errors.password && <p className='errormsg'>{errors.password.message}</p>} */}
        <button className='log-btn'>Log in</button>
        <Link className='userlink' to="/psignup">Sign up for Connect</Link>
        <p className='userlink'>--or--</p>
        <Link className='userlink' to="/pforgot">Forgotten password</Link>
      </form>
    </div>
    </>
  )
}

export default plogin




    

