import React from 'react'
import Navbar from './navbar'
import {useNavigate} from 'react-router-dom'
import coolielogo from './image/CONNECT_LOGO.png'
import steps from './image/step.jpeg'
// import Footer from './footer';

function coolie() {
    const navigate = useNavigate();
  return (
    <>
    <Navbar nav="false" />

      <div className="hero  bghero"></div>
      <div className="hero">
        <div className="hero-info">
          <h1 className='font1'>Go anywhere with<br/>ConnectCoolie</h1>
          <h3 className='font3'>Travel Light, Travel Right</h3>
        </div>
        <button className='hero-btn' onClick={()=>navigate(`/signup`)}>Sign up</button>
        <button className='hero-btn'onClick={()=>navigate(`/login`)}>Login</button>
      </div>


      <div className="container">
      <h1 className='font3'>Who We Are</h1>
      <div className="whoWeAre">
        <div className="whoweare-data">
          <p className='para-data'>
          We are a passionate team on a mission to simplify your travel experience by connecting you with reliable, professional coolies at your fingertips. Whether you're at a railway station, bus terminal, or airport, our platform makes it easy to book trained helpers who will carry your luggage safely and assist you from start to finish.
          <br />Rooted in tradition but driven by technology, we aim to modernize the way luggage assistance works—bringing respect, dignity, and opportunity to the hardworking coolie community while offering travelers convenience, comfort, and peace of mind.
          <br />With a few clicks, you can now reserve a coolie in advance, track their location, and focus on your journey—while we handle the heavy lifting.
          </p>
        </div>
        <img src={coolielogo} alt="logo" className="whoweare-img" />
        </div>
      </div>

      <div className="container">
      <h1 className='font3'>Why we brought this website</h1>
        <br />
        <div className="whoWeAre">
          <p className='para-data'>
          Traveling can be stressful—managing heavy luggage, navigating crowded stations, and finding trustworthy help at the right time only adds to the hassle. We saw an opportunity to solve this real-world problem with a simple solution: make luggage assistance easy, reliable, and accessible with just a few clicks.
          <br />
          <br />
          This website was created to bridge the gap between travelers and the hardworking coolies who have served us for generations. While travelers benefit from the convenience of pre-booking assistance, coolies get more visibility, better work opportunities, and the dignity of a modern platform.
          <br />
          <br />
          We built this platform not just for ease—but with purpose: to support a community, improve travel experiences, and bring a traditional service into the digital age.
          </p>
        </div>
      </div>

      <div className="container">
      <h1 className='font3'>How it work</h1>
      <br />
        <div className="whoWeAre">
          <img src={steps} alt="step" className="whoweare-img"/>
          <ol className='para-data'>
            <li><p><b>Select Location:</b> <br /> Choose At Station or In Train to specify where you need the connect to meet you.</p></li>
            <br />
            <li><p><b>Enter Details:</b><br />Provide your train number, station name, coach number, and seat number for accurate connect dispatch.</p></li>
            <br />
            <li><p><b>Luggage Count:</b><br />Indicate the number of luggage pieces you have (maximum 10) for the connect to handle.</p></li>
            <br />
            <li><p><b>Confirm & Search:</b> <br />Confirm details, select cash payment, and click to search for available connect.</p></li>
          </ol>
        </div>
      </div>
    {/* <Footer /> */}
    </>
  )
}

export default coolie