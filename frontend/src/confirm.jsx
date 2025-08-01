import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';

function Confirm() {
  const { id, uid } = useParams();
  const [inp, setInp] = useState([]);
  const [loadingState, setLoadingState] = useState(true); // Added state for loading
  const [found, setFound] = useState(null);
  const [tryagain, setTryagain] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);  // Reference for the timeout

  // Timer for showing "try again" after 30 seconds
  useEffect(() => {
    const parsedId = parseInt(id);
    const parsedUid = parseInt(uid); 
  
    timerRef.current = setTimeout(async () => {
      try {
        await axios.delete("/api/confirm", { data: { id: parsedId, uid: parsedUid } });
        setTryagain(true);
      } catch (error) {
        console.log(error);
      }
    }, 30000); // 30 seconds
  
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [id, uid]);


  // Fetching data
  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('/api/userdetail');
          setInp(res.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoadingState(false);
        }
      };

      fetchData();
    }, 2000); // Fetch data every 2 seconds

    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  // When data is fetched, clear the timeout
  useEffect(() => {
    if (inp.length > 0) {
      // Clear the timeout when data is successfully fetched
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      const user = inp.find(item => item.id === parseInt(id) && item.uid === parseInt(uid));
      setFound(user);
      setLoadingState(false); // Set loadingState to false when data is found
    }
  }, [inp, id, uid]);

  const done = () => {
    if (found) {
      // Navigate to the dashboard with found user details
      navigate(`/dashboard/${found.id}`);
    }
    else{
      console.log("not found");
    }
  };

  const Pay = () => (
    <div className="logDetail">
      <h3 className='font3'>Invoice Summary</h3>
      <table className='tabel-pay'>
        <tr>
          <td><p className='p-data'><strong>Current Location</strong></p></td>
          <td className='space pdata'><p><b>:</b></p></td>
          <td><p className='p-data'><b>{found ? found.loc : "not found"}</b></p></td>
        </tr>
        <tr>
          <td><p className='p-data'><strong>Station</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td><p className='p-data'><b>{found ? found.station : "not found"}</b></p></td>
        </tr>
        <tr>
          <td><p className='p-data'><strong>PNR number</strong></p></td>
          <td className='space pdata'><p><b>:</b></p></td>
          <td><p className='p-data'><b>{found ? found.pnr : "not found"}</b></p></td>
        </tr>
        <tr>
          <td><p className='p-data'><strong>Train detail</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td><p className='p-data'><b>{found ? `${found.trainno}/${found.coach} ${found.seat}` : "not found"}</b></p></td>
        </tr>
        <tr>
          <td><p className='p-data'><strong>Total Luggage</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td><p className='p-data'><b>{found ? found.lag : "not found"}</b></p></td>
        </tr>
        <tr>
          <td><p className='p-data'><strong>Total Amount</strong></p></td>
          <td className='space p-data'><p><b>:</b></p></td>
          <td><p className='p-data'><b>₹{found ? found.totalAmount : "not found"}</b></p></td>
        </tr>
      </table>
      <p className='p-data'><strong>Pay ₹<b>{found ? found.totalAmount : "not found"}</b> to Connect</strong></p>
      <button className='por-btn' onClick={done}>Done</button>
    </div>
  );

  const View = () => (
    <div className="logDetail">
      <h1>Connect Detail</h1>
      <table className='tabel-pay'>
        <tr>
          <td className='p-data'><p><strong>Connect name</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? `${found.pfirstname} ${found.plastname}` : "not found"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Phone number</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? found.pnumber : "not found"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Current Location</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? found.loc : "not found"}</b></p></td>
        </tr>

        
        <tr>
          <td className='p-data'><p><strong>PNR number</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? found.pnr : "not found"}</b></p></td>
        </tr>


        <tr>
          <td className='p-data'><p><strong>Station</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? found.station : "not found"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Train detail</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? `${found.trainno}/${found.coach} ${found.seat}` : "not found"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Total Luggage</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>{found ? found.lag : "not found"}</b></p></td>
        </tr>
        <tr>
          <td className='p-data'><p><strong>Total Amount</strong></p></td>
          <td className='space p-data'><b>:</b></td>
          <td className='p-data'><p><b>₹{found ? found.totalAmount : "not found"}</b></p></td>
        </tr>
      </table>
    </div>
  );

  const loading = () => (
    <div className="load">
      <div className="loader"></div>
      <h1>Finding a Connect....</h1>
    </div>
  );

  const check = () => {
    if (found && found.done === "completed") {
      return <Pay />;
    } else if (found) {
      return <View />;
    } else {
      return loading();
    }
  };

  // "Try Again" button component
  const again = () => (
    <div className='logDetail'>
      <p className='font-align para-data'><h3 className='font3'>Connect are busy, </h3><br />Please try in a few seconds...</p>
      <button className='por-btn' onClick={() => { navigate(`/dashboard/${id}`); }}>Book Again</button>
    </div>
  );


  const lnk=`/dashboard/${id}`
  return (
    <>
    <Navbar dash={lnk} nav="yes"/>
    <div className='log'>
      {loadingState ? loading() : tryagain ? again() : check()}
    </div>
    </>
  );
}

export default Confirm;


  