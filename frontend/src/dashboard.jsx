import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from './navbar';

function dashboard() {
    const [data,setdata] = useState([]);
    const [inp,setinp] = useState([]);
    const navigate = useNavigate();
    const {id}=useParams();


    useEffect(()=>{
          axios.get("/api/detail")
          .then((res)=>{
            setdata(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
        })

        useEffect(()=>{
          axios.get("/api/login")
          .then((res)=>{
            setinp(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
        })

    const book =()=>{
        navigate(`/book/${id}/${data.length+100}`)
    }

    const found = inp.find(item=> item.id === parseInt(id))
    



  return (
    <>
    <Navbar dash={`/dashboard/${id}`} userid={id}/>
    <div className="dash">
        <div className="username">
            <h3 className='font3'>Hello {found?found.firstname:""},</h3>
        </div>
        <div className="booking-data log">
          <div className="logDetail bookingstep">
              <h3 className='font3'>How to book your Connect?</h3>
              
              <ol>
                  <li className='para-data'>Click on the “Book My Connect” button.</li>
                  <li className='para-data'>Fill all the details asked.</li>
                  <li className='para-data'>Enter your luggage count.</li>
                  <li className='para-data'>You can view the status of your booking on the home screen.</li>
                  <li className='para-data'>Once booked your connect will come and help you with your luggage.</li>
              </ol>
              <button className='log-btn' onClick={book}>Book My Connect</button>
          </div>
        </div>
    
    </div>
    </>
  )
}

export default dashboard