import React from 'react'
import {Link} from 'react-router-dom'

function footer() {
  return (
    <>
    <footer>
      <div className="footer-data">
          <div className="social">
                <div className="icon">
                    <div className="fa fa-facebook"></div>
                </div>
                <div className="icon">
                    <div className="fa fa-twitter"></div>
                </div>
                <div className="icon">
                    <div className="fa fa-linkedin"></div>
                </div>
                <div className="icon">
                    <div className="fa fa-instagram"></div>
                </div>
            </div>
          <ul className='footer-ul'>
            <li className='font-footer'><Link className='font-footer' to='/'>Home</Link></li>
            <li className='font-footer'><Link className='font-footer' to='/aboutus'>About Us</Link></li>
            <li className='font-footer'><Link className='font-footer' to='/Contact'>Contact Us</Link></li>
          </ul>
      </div>
      <div className="credit">
      <p>Copyright &copy;2025; Designed by Connect Coolie Team</p>
      </div>
    </footer>
    </>
  )
}

export default footer