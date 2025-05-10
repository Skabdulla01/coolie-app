import React from 'react'
import Navbar from '../navbar'
import mission from '../image/mission.jpeg'
import Footer from '../footer'
import connect from '../image/connect.jpeg'


function aboutus() {
  return (
    <>
    <Navbar dash="/" />
    <div className="aboutus">

      <div className="container">
            <h1 className='font1'>Welcome to Connect Coolie</h1>
            <div className="whoWeAre">
              <div className="whoweare-data">
                <p className='para-about'>At Connect Coolie, we deeply recognize and honor the invaluable contributions of railway coolies—those tireless, often overlooked individuals who form the backbone of travel infrastructure across the country. These unsung heroes provide essential support to millions of passengers each day, lifting not just physical luggage but also the stress and challenges of transit, often in difficult conditions and with limited recognition. Through our platform, we aim to bring dignity, structure, and convenience to their work by making their services more accessible, better organized, and seamlessly integrated into the modern travel experience. In a world that moves quickly and often forgets the people who keep it going, Connect Coolie is committed to shining a light on their dedication and ensuring they are treated with the respect they have long deserved.</p>
              </div>
              <img src={connect} alt="logo" className="whoweare-img" />
            </div>
      </div>

      <div className="container">
      <h1 className='font3'>Why It Matters</h1>
        <div className="whoWeAre">
        <p className='para-data'>Coolies are the silent lifelines of bustling transport hubs like railway stations and bus terminals. They do more than just carry luggage—they help keep the flow of travel smooth and manageable, especially for the elderly, disabled, or travelers with heavy baggage. Their work reduces chaos, saves time, and ensures safer, more comfortable journeys for countless people every day.
          <br /><br />Despite their vital contribution, coolies often go unnoticed and underappreciated. Recognizing their role is not just about fairness—it's about valuing the human effort behind every journey. By understanding and supporting the work of coolies, we acknowledge the dignity of labor and the importance of every individual in making our systems work.</p>
        </div>
      </div>


      <div className="container">
            <h1 className='font3'>Our Mission</h1>
              <div className="whoWeAre">
                <img src={mission} alt="mission" className="whoweare-img"/>
                <p className='para-data whoweare-data para-about'>Our mission is to shine a light on the hardworking coolies who make travel easier for millions. We aim to recognize their dedication, share their stories, and raise awareness about the challenges they face every day.
                  <br /><br />We believe that coolies deserve respect, fair working conditions, and opportunities for a better future. Through this platform, we hope to build understanding, appreciation, and support for these unsung heroes of our transport system.</p>
              </div>
      </div>

      <div className="container">
      <h1 className='font3'>What We Offer</h1>
        
        <div className="whoWeAre">
          <p className='para-data'>
          Coolies are an essential part of India’s living history—symbols of resilience, dedication, and service. For generations, they have carried the physical weight of travelers' journeys, often under scorching sun, pouring rain, or in the middle of crowded, chaotic stations. Despite the tough and physically demanding conditions, they perform their work with strength, patience, and a quiet humility that often goes unnoticed.
          <br />
          <br />
          These men are not just luggage carriers; they are guides, helpers, and protectors for countless passengers every day. Yet, their contributions are rarely acknowledged, and they continue to face economic hardship, lack of social security, and limited access to opportunities for advancement.
          <br />
          <br />
          We believe it's time to change that. Coolies deserve respect for their hard work, recognition for their vital role in society, and access to fair wages, safe working conditions, and opportunities for a better future. Our mission is to bring visibility to their stories, dignity to their profession, and support where it's most needed—because behind every journey is a coolie making it possible.
          </p>
        </div>
      </div>





      {/* <div className="about-intro">
        <div className="bg-about"></div>
        <div className="bg-info">
        <h1 className='font1'>Welcome to Connect Coolie</h1>
        <p className='para-about font3'>At Connect Coolie, we recognize and honor the vital role of railway coolies – the unsung heroes who help millions of travelers every day by carrying their burdens, quite literally. Our platform is dedicated to making their services more accessible, organized, and respectful in today’s fast-paced world.</p>
        </div>
      </div>

      <div className="Why-it-matters">
        <h3 className='font3'>Why It Matters</h3>
        <p className='para-desc'>Coolies are part of India’s living history. Often working in tough conditions, they continue to serve millions with strength and humility. We believe they deserve respect, recognition, and fair work opportunities—and we’re here to make that happen.</p>
      </div>
          


      <div className="mission">
        <h3 className='font3'>Our Mission</h3>
        <div className="mission-data">
          <div className="mission-set">
            <p className='mission-set para-desc'>To modernize the traditional porter system while preserving its legacy. To provide dignity, visibility, and fair earning opportunities to coolies through technology. To offer travelers a trusted, hassle-free luggage handling experience at railway stations across India.</p>
          </div>
          <div className="mission-set">
            <img className='mission-set' src={ourmission} alt="mission image" />
          </div>
        </div>
      </div>


      <div className="desc-about">
          <div className="desc">
            <h3 className='font3'>Who We Are</h3>
            <p className='para-desc'>We are a team of passionate individuals working to bridge the gap between passengers and railway porters through smart, user-friendly digital solutions. Whether you're arriving at a crowded station or boarding a train with heavy luggage, our platform connects you with verified, experienced porters who are ready to help – with fairness, dignity, and efficiency.</p>
          </div>

          <div className="desc">
            <h3 className='font3'>What We Offer</h3>
            <ul>
              <li><p className='para-desc'>Book a Porter Online – No more last-minute rushes. Reserve a coolie in advance.</p></li>
              <li><p className='para-desc'>Verified Porters – All coolies listed on our platform are verified and trained.</p></li>
              <li><p className='para-desc'>Transparent Pricing – Know the charges upfront with no hidden fees.</p></li>
            </ul>
          </div>
      </div> */}
    </div>
    <Footer />
    </>
  )
}

export default aboutus