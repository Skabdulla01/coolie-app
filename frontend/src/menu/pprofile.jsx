import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../image/unnamed.png'

function pprofile() {
    const { pid } = useParams();
    const [inp,setinp] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get("/api/plogin")
      .then((res)=> {
        setinp(res.data)
      })
      .catch((err)=>{console.log(err)})
    })

    const found = inp.find(item=> item.pid === parseInt(pid))


    const lnk=`/porter/${pid}`
  return (
    <>
    <Navbar dash={lnk} nav="no" userpid={pid}/>

    <div className="log">
      <div className='logDetail'>
      <img className='logo-img' src={logo} alt="logo" />
      <p className='profile-para'><strong>Name: </strong><b>{found ? found.pfirstname : ""} {found ? found.plastname : ""}</b></p>
      <p className='profile-para'><strong>Email: </strong><b>{found ? found.pemail : ""}</b></p>
      <p className='profile-para'><strong>Phone number: </strong><b>{found ? found.pnumber : ""}</b></p>

      <button className='log-btn' onClick={()=>navigate(`/porter/${pid}`)}>Back</button>
      </div>
      </div>
    </>
  )
}

export default pprofile