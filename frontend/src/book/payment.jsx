import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function payment({ sendDataToParent }) {
  const navigate = useNavigate();
    const {id,uid}=useParams();
    const [inp,setinp] = useState([])
    const [fee,setfee] = useState(39)
    const [gstRate, setGstRate] = useState(18); // Sample GST rate (18%)
    const [isCod, setIsCod] = useState(false); // Track if COD is selected

    useEffect(()=>{
      axios.get("/api/detail")
      .then((res)=> {
        setinp(res.data)
      })
      .catch((err)=>{console.log(err)})
    })

  const found = inp.find(item=> item.id===parseInt(id) && item.uid===parseInt(uid))//verify id and uid both
  
  
  const orderAmount = fee+(found?found.lag*49:0*4)
  // Calculate GST
  const gstAmount = (orderAmount * gstRate) / 100;

  // Calculate total (orderAmount + GST)
  const totalAmount = orderAmount + gstAmount;

  const handleCodChange = (event) => {
    setIsCod(event.target.checked);
  };

  const confirmbooking = async()=>{
    if(isCod){
      try {
        const newdata = {...found,totalAmount}
        await axios.post("/api/booking",newdata)
        navigate(`/confirm/${id}/${uid}`)
    } catch (error) {
        console.log(error)
    }
           
    }
    else{
      alert("please select payment option")
    }
  }
  const back=()=>{
        sendDataToParent("lug");
  }
  
    


  return (
    <>
    <button className='backword' onClick={back}><i id='ibackword' className="fa fa-angle-left"></i></button>
     <div className="log-booking log">
      <div className='logDetail'>
        <h1>Booking Details</h1>
        <table className='tabel-pay'>
          <tr>
            <td><p><strong>Pickup location</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>{found ? found.loc : "Not Found"}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>Station name</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>{found ? found.station : "Not Found"}</b></p></td>
          </tr>

          <tr>
            <td><p><strong>PNR number</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>{found ? found.pnr : "Not Found"}</b></p></td>
          </tr>


          <tr>
            <td><p><strong>Train detail</strong><br />(Train no/Coach no/Seat no)</p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>{found ? found.trainno : "Not Found"}/{found ? found.coach : "Not Found"}/{found ? found.seat : "Not Found"}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>Total Luggage</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>{found ? found.lag : "Not Found"}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>Luggage Fee</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>₹{found?found.lag*49:0*4}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>Convinent fee</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>₹{fee}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>Order Amount</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>₹{orderAmount}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>GST ({gstRate}%)</strong></p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>₹{gstAmount.toFixed(2)}</b></p></td>
          </tr>
          <tr>
            <td><p><strong>Total</strong><br />(Including GST)</p></td>
            <td className='space'><p><b>:</b></p></td>
            <td><p><b>₹{totalAmount.toFixed(2)}</b></p></td>
          </tr>
        </table>
      
        <label>
          <input 
            type="checkbox" 
            checked={isCod} 
            onChange={handleCodChange} 
          />
          Pay After Completion
        </label>

      {isCod && <p><strong>Note:</strong> Payment will be collected after droping the luggage.</p>}
      <button className='log-btn' onClick={confirmbooking}>Confirm booking</button>
      </div>
    </div>
    </>
  )
}

export default payment