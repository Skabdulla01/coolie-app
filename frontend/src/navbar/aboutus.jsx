import React from 'react'
import Navbar from '../navbar'

function aboutus() {
  return (
    <>
    <Navbar />
    <div className="about-intro">
      <div className="bg-about"></div>
      <div className="bg-info">
      <h1 className='font1'>Welcome to Connect Coolie</h1>
      <p className='para-about font3'>At Connect Coolie, we recognize and honor the vital role of railway coolies – the unsung heroes who help millions of travelers every day by carrying their burdens, quite literally. Our platform is dedicated to making their services more accessible, organized, and respectful in today’s fast-paced world.</p>
      </div>
    </div>

    {/* <div className="mission">
      <h3>Our Mission</h3>
      <p>To modernize the traditional porter system while preserving its legacy.
To provide dignity, visibility, and fair earning opportunities to coolies through technology.
To offer travelers a trusted, hassle-free luggage handling experience at railway stations across India.</p>
    </div> */}
    
    <div className="desc-about">
        <div className="desc">
          <h3 className='font3'>Who We Are</h3>
          <p>We are a team of passionate individuals working to bridge the gap between passengers and railway porters through smart, user-friendly digital solutions. Whether you're arriving at a crowded station or boarding a train with heavy luggage, our platform connects you with verified, experienced porters who are ready to help – with fairness, dignity, and efficiency.</p>
        </div>

        <div className="desc">
          <h3 className='font3'>What We Offer</h3>
          <ul>
            <li><p>Book a Porter Online – No more last-minute rushes. Reserve a coolie in advance.</p></li>
            <li><p>Verified Porters – All coolies listed on our platform are verified and trained.</p></li>
            <li><p>Transparent Pricing – Know the charges upfront with no hidden fees.</p></li>
          </ul>
        </div>
    </div>


    {/* <div className="Why-It-Matters">
      <h3>Why It Matters</h3>
      <p>Coolies are part of India’s living history. Often working in tough conditions, they continue to serve millions with strength and humility. We believe they deserve respect, recognition, and fair work opportunities—and we’re here to make that happen.</p>
    </div>
    <div className="p">Join us in supporting those who support you.
Book a coolie with confidence. Travel with ease.
[Link to Booking Page or Contact Page]</div> */}
    </>
  )
}

export default aboutus