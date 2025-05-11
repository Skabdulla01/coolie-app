import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function station({ sendDataToParent, uid }) {

  const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()

  const onSubmit = async (data)=>{
    try {
      const newdata = { ...data, uid };
        await axios.put("/api/userdata",newdata)
        sendDataToParent("lug");
    } catch (error) {
        console.log(error)
    }
}
const back=()=>{
        sendDataToParent("booking");
  }
  return (
    <>
    <button className='backword' onClick={back}><i id='ibackword' className="fa fa-angle-left"></i></button>

    <div className="log-booking log">
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}>
      {/* <input hidden type="text" value={'station'} readOnly {...register('loc')}/> */}

      <input className='inp-log' type="text" placeholder='PNR Number'{...register('pnr',{required: {value:true, message:"Please enter pnr"}})}/>
      {/* {errors.pnr && <p className='errormsg'>{errors.pnr.message}</p>} */}

      <input className='inp-log' type="text" placeholder='Enter Station Name'{...register('station',{required: {value:true, message:"Please enter station"}})}/>
      {/* {errors.station && <p className='errormsg'>{errors.station.message}</p>} */}
      
      <input className='inp-log' type="text" placeholder='Enter Train Number' {...register('trainno',{required: {value:true, message:"Please enter train number"}})}/> 
      {/* {errors.trainno && <p className='errormsg'>{errors.trainno.message}</p>} */}
      
      <input className='inp-log' type="text" placeholder='Enter Coach Number' {...register('coach',{required: {value:true, message:"Please enter coach number"}})}/>
      {/* {errors.coach && <p className='errormsg'>{errors.coach.message}</p>} */}
      
      <input className='inp-log' type="text" placeholder='Enter Seat Number' {...register('seat',{required: {value:true, message:"Please enter seat number"}})}/>
      {/* {errors.coach && <p className='errormsg'>{errors.coach.message}</p>} */}
      
      <button className='log-btn'>Next</button>
      </form>
    </div>
  </>
  )
}

export default station