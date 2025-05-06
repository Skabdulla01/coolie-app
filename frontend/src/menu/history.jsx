import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../navbar'
import { useParams } from 'react-router-dom';

function history() {
    const [inp,setinp]=useState([]);
    const { id } = useParams();

    useEffect(()=>{
        axios.get("/api/userdetail")
        .then((res)=>{
          setinp(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      })

      
      const lnk=`/dashboard/${id}`

  return (
    <>
    <Navbar dash={lnk}/>
    <div className="log">
        <table className='history-tabel'>
            <thead className='tabel-data'>
                <tr>
                    <th className='tabel-data'>Connect name</th>
                    <th className='tabel-data'>PNR number</th>
                    <th className='tabel-data'>Location</th>
                    <th className='tabel-data'>Station</th>
                    <th className='tabel-data'>Train Detail</th>
                    <th className='tabel-data'>Total Luggage</th>
                    <th className='tabel-data'>Total Amount</th>
                    <th className='tabel-data'>Status</th>
                </tr>
            </thead>
            <tbody>
                {inp
                    .filter(item => item.id.toString().includes(id))
                    .map((item, index) => (
                        <tr key={item.uid}>
                            <td className='tabel-data'>{item.pfirstname}</td>
                            <td className='tabel-data'>{item.pnr}</td>
                            <td className='tabel-data'>{item.loc}</td>
                            <td className='tabel-data'>{item.station}</td>
                            <td className='tabel-data'>{item.trainno}</td>
                            <td className='tabel-data'>{item.lag}</td>
                            <td className='tabel-data'>{item.totalAmount}</td>
                            <td className='tabel-data'>{item.done}</td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default history