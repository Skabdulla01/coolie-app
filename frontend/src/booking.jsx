import React from 'react'
import Trainimg from './image/trainimage.jpg'
import Stationimg from './image/stationimage.jpg';


function booking({ sendDataToParent }) {

  const handleClick = (data) => {
    sendDataToParent(data);
  };


  return (
    <>
    <div className="log-booking log">
      <div className="book-detail logDetail">
        <h3 className='font-booking'>Where are you currently?</h3>
        <div className="loc_detail">
          <button className="loc_option" onClick={() => handleClick("train")} >
            <img className='bookimg' src={Trainimg} alt="train" />
            <p className='p-booking'>In the Train</p>
          </button>
          <button className="loc_option" onClick={() => handleClick("station")}>
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