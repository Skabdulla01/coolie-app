import React from 'react'
import Navbar from './navbar'
import {useNavigate} from 'react-router-dom'

function coolie() {
    const navigate = useNavigate();
  return (
    <>
    <Navbar nav="false" />
    <div className="hero  bghero"></div>
    <div className="hero">
      <div className="hero-info">
        <h1 className='font1'>Go anywhere with<br/>ConnectCoolie</h1>
        <h3 className='font3'>Travel Light, Travel Right</h3>
      </div>
      <button className='hero-btn' onClick={()=>navigate(`/signup`)}>Sign up</button>
      <button className='hero-btn'onClick={()=>navigate(`/login`)}>Login</button>
      <br />
      {/* <button className='hero-btn porter-btn' onClick={()=>navigate(`/plogin`)}>Login as Porter</button> */}
    </div>
    </>
  )
}

export default coolie