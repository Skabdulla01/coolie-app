import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar'
import Footer from '../footer'

function contact() {
  const {data}=useParams();
  return (
    <>
    {data[0]==="0"?<Navbar dash="/"/>:data[0]==="u"?<Navbar dash={`/dashboard/${data.slice(1)}` || "/"} nav={"yes"} userid={data.slice(1)}/>:<Navbar dash={`/porter/${data.slice(1)}` || "/"} nav={"no"} userpid={data.slice(1)}/>}
    <div className="log">
      <div className="contactus">
        <div className="contact-src">
          <div className="contact-img"></div>
        </div>
        <div className="contact-src">
          <h1 className='font1'>Contact us</h1>
          <p className='para-desc'>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is always here to assist you.</p>
    
          <div className="contact-info">
            <p className='icon-font'><i className="fas fa-map-marker-alt"></i> Mumbai, Maharashtra</p>
            <p className='icon-font'><i className="fas fa-phone-alt"></i> +91 989765xxxx</p>
            <p className='icon-font'><i className="fas fa-envelope"></i> Connectcoolie@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default contact