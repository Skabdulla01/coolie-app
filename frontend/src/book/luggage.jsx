import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


function luggage({ sendDataToParent, id }) {

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const watchedLag = watch('lag');

  const onSubmit = async (data)=>{
    try {
        await axios.put("/api/lagdata",data)
        sendDataToParent("pay");
        
    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
    <div className="log-booking log">
      {/* <p className="lag-msg">Each luggage should not be weight more than 10kg and if there if more than 5 bag the weight should be 35 kg only</p> */}
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}> 
        <h1>Total Number of Luggage</h1>
        <input className='inp-lag' type="text" readOnly value={watchedLag || 6} />
        
        <input className='range-lag' type="range" min={1} max={10} {...register('lag')}/>

        <input hidden type="text" value={id} {...register('id')}/>
        <button className='log-btn'>Next</button>
      </form>
    </div>
    </>
  )
}

export default luggage

