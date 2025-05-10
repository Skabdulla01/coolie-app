import React, { useState } from 'react'
import Booking from './booking'
import Train from './book/train';
import Station from './book/station';
import Luggage from './book/luggage';
import Payment from './book/payment';
import no1 from './image/number1.png';
import no2 from './image/number2.png';
import no3 from './image/number3.png';
import no4 from './image/number4.png';
import Navbar from './navbar';

import { useParams } from 'react-router-dom'

function book() {
  const {id,uid} = useParams();

    

  const[a,seta]= useState(0);
  const[step1,setstep1]=useState("white")
  const[step2,setstep2]=useState("white")
  const[step3,setstep3]=useState("white")

  const[bord1,setbord1]=useState("4px solid red")
  const[bord2,setbord2]=useState("4px solid red")
  const[bord3,setbord3]=useState("4px solid red")

  const c = "black"
  const b="4px solid black"

  const handleDataFromChild = (data) => {
    if (data === "train" || data === "station") {
        seta(32); 
        setstep1(c); 
        setbord1(b); 
        setcomp(data === "train" ? <Train id={id} uid={uid} sendDataToParent={handleDataFromChild} /> : <Station id={id} uid={uid} sendDataToParent={handleDataFromChild}/>);
      } else if(data==="lug"){
        seta(64); 
        setstep2(c); 
        setbord2(b); 
        setcomp(<Luggage id={id} sendDataToParent={handleDataFromChild}/>);
    } else if(data==="pay"){
        seta(96); 
        setstep3(c); 
        setbord3(b); 
        setcomp(<Payment/>);
    }
  };

  const [comp,setcomp] = useState(<Booking sendDataToParent={handleDataFromChild}/>);

  const lnk=`/dashboard/${id}`

  return (
    <>
    <Navbar dash={lnk} nav="yes"/>
    <div className="prog-bar">
      <div className="bar">
        <div className="progress">
            <div className="step" style={{backgroundColor: c,border: b}}><img className='num' src={no1} alt="number1" /></div>
            <div className="step" style={{backgroundColor: `${step1}`,border: `${bord1}`}}><img className='num' src={no2} alt="number2" /></div>
            <div className="step" style={{backgroundColor: `${step2}`,border: `${bord2}`}}><img className='num' src={no3} alt="number3" /></div>
            <div className="step" style={{backgroundColor: `${step3}`,border: `${bord3}`}}><img className='num' src={no4} alt="number4" /></div>
        </div>
        <div className="progress-bar" style={{width: `${a}%`}}></div>
      </div>
      </div>

      {comp}
    </>
  )
}

export default book