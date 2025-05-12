import React, { useEffect } from 'react'
import logo from './image/CONNECT_LOGO.png'
import unnamed from './image/unnamed.png'
import {Link,useNavigate} from 'react-router-dom'

const yes = (id)=>{
  return(
    <ul className='nav-ul-info'>
      <li className='nav-info'><Link to={`/aboutus/${"u"+id}`}>About us</Link></li>
      <li className='nav-info'><Link to={`/Contact/${"u"+id}`}>Contact us</Link></li>
      <li className="nav-info dropdown">
      <span className="dropdown-toggle"><img className='nav-logo' src={unnamed} alt="navlogo" /></span>
      <ul className="dropdown-menu">
        <li><Link to={`/profile/${id}`}>Profile</Link></li>
        <li><Link to={`/history/${id}`}>History</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </li>
    </ul>
  )
}

const pyes = (pid)=>{
  return(
    <ul className='nav-ul-info'>
      <li className='nav-info'><Link to={`/aboutus/${"p"+pid}`}>About us</Link></li>
      <li className='nav-info'><Link to={`/Contact/${"p"+pid}`}>Contact us</Link></li>
      <li className="nav-info dropdown">
      <span className="dropdown-toggle"><img className='nav-logo' src={unnamed} alt="navlogo" /></span>
      <ul className="dropdown-menu">
        <li><Link to={`/pprofile/${pid}`}>Profile</Link></li>
        <li><Link to={`/phistory/${pid}`}>History</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </li>
    </ul>
  )
}


const no=(btn)=>{
    const navigate = useNavigate();
    const num=0
  return(
    <ul className='nav-sign'>
      <li className='nav-info'><Link to={`/aboutus/${num}`}>About us</Link></li>
      <li className='nav-info'><Link to={`/Contact/${num}`}>Contact us</Link></li>
      {Boolean(btn)?<button className='nav-info por-btn' onClick={()=>navigate(`/plogin`)}>Login as Connect</button>:""}
      <li className="nav-info dropdown">
      <span className="dropdown-toggle"><img className='nav-logo' src={unnamed} alt="navlogo" /></span>
      <ul className="dropdown-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to={"/login"}>Login as user</Link></li>
        <li><Link to={"/plogin"}>Login as Connect</Link></li>
        <li><Link to={"/aboutus"}>About us</Link></li>
        <li><Link to={"/Contact"}>Contact us</Link></li>
      </ul>
    </li>
      
    </ul>
  )
}
function navbar(props) {
  return (
    <>
    <nav>
        <div className="logo">
            <Link to= {props.dash}><img className='logo-img' src={logo} alt="logo" /></Link>
        </div>
        {Boolean(props.nav)?props.nav==="yes" ?yes(props.userid):pyes(props.userpid):no(props.btn)}
    </nav>
    </>
  )
}

export default navbar