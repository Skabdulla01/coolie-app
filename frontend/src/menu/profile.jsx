import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../image/unnamed.png'

function profile() {
  const { id } = useParams();
  const [inp,setinp] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("/api/login")
    .then((res)=> {
      setinp(res.data)
    })
    .catch((err)=>{console.log(err)})
  })

  const found = inp.find(item=> item.id === parseInt(id))


  const lnk=`/dashboard/${id}`
  return (
    <>
    <Navbar dash={lnk} nav="yes" userid={id}/>
    <div className="log">
      <div className='logDetail'>
      <img className='logo-img' src={logo} alt="logo" />
      <p className='profile-para'><strong>Name: </strong><b>{found ? found.firstname : ""} {found ? found.lastname : ""}</b></p>
      <p className='profile-para'><strong>Email: </strong><b>{found ? found.email : ""}</b></p>
      <p className='profile-para'><strong>Phone number: </strong><b>{found ? found.phonenumber : ""}</b></p>

      <button className='log-btn' onClick={()=>navigate(`/dashboard/${id}`)}>Back</button>
      </div>
      </div>
    </>
  )
}

export default profile