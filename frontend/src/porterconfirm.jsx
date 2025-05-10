import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';

function porterconfirm() {
  const [inp,setinp]=useState([]);
  const [pay,setpay]=useState(false);
  const {id,uid,pid}=useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get("/api/display")
    .then((res)=> {
      setinp(res.data)
    })
    .catch((err)=>{console.log(err)})
  })

  const found = inp.find(item=> item.id===parseInt(id) && item.uid===parseInt(uid) && item.pid===parseInt(pid))

  const complete = async()=>{
    setpay(true)
    try {
      const done = "completed"
      await axios.put("/api/updatedone",{done,id,uid,pid})
  } catch (error) {
      console.log(error)
  }
  }

  const Paid = ()=>{
    return(
      <div className="log-port log">
        <div className="logp logDetail">
          <h3>Collect Cash: ₹{found ? found.totalAmount : "not found"}</h3>
          <button className='por-btn' onClick={()=>navigate(`/porter/${pid}`)}>OK</button>
        </div>
      </div>
    )
  }

  const lnk = `/porter/${pid}`
  return (
    <>
    <Navbar dash={lnk} nav="no" userpid={pid}/>
    <div className="log">
      <div className='logDetail'>
      <h1>User Detail</h1>
      <table className="tabel-pay">
        <tr>
          <td className='p-data'><p><strong>Customer name</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.firstname : "Customer name"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Customer number</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.phonenumber : "Customer number"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Current Location</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.loc : "Current Location"}</b></p></td>
        </tr>

        <tr>
          <td className='p-data'><p><strong>PNR number</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.pnr : "Current Location"}</b></p></td>
        </tr>


        <tr>
          <td className='p-data'><p><strong>Station</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.station : "Station"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Train detail</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.trainno : "not found"}/{found ? found.coach : "not found"}/{found ? found.seat : "not found"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Total Luggage</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td className='p-data'><p><b>{found ? found.lag : "not found"}</b></p></td>
        </tr>
      </table>
      <button className='log-btn' onClick={complete}>Complete</button>
      </div>
      </div>
    {pay?Paid():""}
    </>
  )
}

export default porterconfirm