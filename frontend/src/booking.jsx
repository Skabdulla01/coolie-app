import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import Trainimg from './image/trainimage.jpg'
import Stationimg from './image/stationimage.jpg';


function booking({ sendDataToParent }) {
  const {id,uid}=useParams();
  const navigate = useNavigate();


  const handleClick = async (loc) => {
    try {
      const newdata = { loc, uid};
        await axios.put("/api/locdata",newdata)
        sendDataToParent(loc);
    } catch (error) {
        console.log(error)
    }
  };

  const back = () =>{
    navigate(`/dashboard/${id}`);
  }

  return (
    <>
    <button className='backword' onClick={back}><i id='ibackword' className="fa fa-angle-left"></i></button>
    <div className="log-booking log">
      <div className="book-detail logDetail">
        <h3 className='font-booking'>Where are you currently?</h3>
        <div className="loc_detail">
          <button className="loc_option" onClick={() => handleClick("Train")} >
            <img className='bookimg' src={Trainimg} alt="train" />
            <p className='p-booking'>In the Train</p>
          </button>
          <button className="loc_option" onClick={() => handleClick("Station")}>
            <img className='bookimg' src={Stationimg} alt="station" />
            <p className='p-booking'>At Station</p>
          </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default booking