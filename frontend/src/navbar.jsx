import React from 'react'
import logo from './image/CONNECT_LOGO.png'
import unnamed from './image/unnamed.png'
import {Link,useNavigate} from 'react-router-dom'

const yes = ()=>{
  return(
    <ul className='nav-ul-info'>
      <li className='nav-info'><Link to='/aboutus'>About us</Link></li>
      <li className='nav-info'><Link to='/Contact'>Contact us</Link></li>
      <li className='nav-info'><Link to='/'><img className='nav-logo' src={unnamed} alt="navlogo" /></Link></li>
    </ul>
  )
}


const no=()=>{
    const navigate = useNavigate();
  return(
    <ul className='nav-sign'>
      <li className='nav-info'><Link to='/aboutus'>About us</Link></li>
      <li className='nav-info'><Link to='/Contact'>Contact us</Link></li>
      {/* <li className='nav-info'><Link to="/plogin">Login as Porter</Link></li> */}
      <button className='nav-info por-btn' onClick={()=>navigate(`/plogin`)}>Login as Connect</button>
      <li className='nav-info'><Link to='/'><img className='nav-logo' src={unnamed} alt="navlogo" /></Link></li>
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
        {Boolean(props.nav)?no():yes()}
    </nav>
    </>
  )
}

export default navbar




// import React from 'react'
// import logo from './image/CONNECT_LOGO.png'
// import unnamed from './image/unnamed.png'

// function navbar() {
//   return (
//     <>
//     <nav>
//         <div className="logo">
//             <a href= ''><img className='logo-img' src={logo} alt="logo" /></a>
//         </div>
//         <ul className='nav-ul-info'>
//             <li className='nav-info'><a href=''>About</a></li>
//             <li className='nav-info'><a href=''>Help</a></li>
//             <li className='nav-info'><a href=''><img className='nav-logo' src={unnamed} alt="navlogo" /></a></li>
//         </ul>
//     </nav>
//     </>
//   )
// }

// export default navbar