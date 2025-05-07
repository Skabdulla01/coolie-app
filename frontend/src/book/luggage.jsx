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
      <form className="logDetail" onSubmit={handleSubmit(onSubmit)}> 

        <h1 className='font-lug'>Total Number of Luggage</h1>
        <input className='inp-lag' type="text" readOnly value={watchedLag || 3} />
        
        <input className='range-lag' type="range" min={1} max={5} {...register('lag')}/>

        <input hidden type="text" value={id} {...register('id')}/>
        <button className='log-btn'>Next</button>

      </form>
    </div>
    </>
  )
}

export default luggage

