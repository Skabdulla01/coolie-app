import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './navbar';

function porter() {
    const [inp,setinp]=useState([]);
    const [name,setname]=useState([])
    const navigate = useNavigate()
    const {pid}=useParams();


    useEffect(()=>{
        axios.get("/api/porterbook")
        .then((res)=> {
          setinp(res.data)
        })
        .catch((err)=>{console.log(err)})
      })

    useEffect(()=>{
      axios.get("/api/plogin")
      .then((res)=> {
        setname(res.data)
      })
      .catch((err)=>{console.log(err)})
    })

      const accept = async (id,uid)=>{
        try{
          const itemToSend = inp.find(item => item.id === id && item.uid===uid);
          const newdata = { ...itemToSend, pid };
          await axios.post("/api/alldata",newdata)
          await axios.delete("/api/confirm",{data:{id,uid}})
          navigate(`/porterconfirm/${id}/${uid}/${pid}`)
        }
        catch(error){
          console.log(error)
        }
      }


      const found = name.find(item => item.pid===parseInt(pid))
    
    
      const lnk = `/porter/${pid}`
  return (
    <>
    <Navbar dash={lnk}/>
    <div className="dash">
      <div className="username">
              <h3 className='font3'>Hello {found?found.pfirstname:""},</h3>
      </div>
      <div className='log-porter'>
        {inp.map((item) => (
          <>
          <div className="req-porter">
            <table className='tab-proter'>
              <tr>
                <td className='p-data'><p><strong>Current Location</strong></p></td>
                <td className='space p-data'><p><b>:</b></p></td>
                <td className='p-data'><p><b>{item.loc}</b></p></td>
              </tr>
              <tr>
                <td className='p-data'><p><strong>Station</strong></p></td>
                <td className='space p-data'><p><b>:</b></p></td>
                <td className='p-data'><p><b>{item.station}</b></p></td>
              </tr>
              <tr>
                <td className='p-data'><p><strong>Train detail</strong></p></td>
                <td className='space p-data'><p><b>:</b></p></td>
                <td className='p-data'><p><b>{item.trainno}/{item.coach}/{item.seat}</b></p></td>
              </tr>
              <tr>
                <td className='p-data'><p><strong>Total Luggage</strong></p></td>
                <td className='space p-data'><p><b>:</b></p></td>
                <td className='p-data'><p><b>{item.lag}</b></p></td>
              </tr>
              <tr>
                <td className='p-data'><p><strong>Total Amount</strong></p></td>
                <td className='space p-data'><p><b>:</b></p></td>
                <td className='p-data'><p><b>{item.totalAmount}</b></p></td>
              </tr>
            </table>
            <button className='por-btn' onClick={()=>accept(item.id,item.uid)}>Accept</button>
            </div>
          </>
        ))}
      </div>
    </div>
    </>
  )
}

export default porter