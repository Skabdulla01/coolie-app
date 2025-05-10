import Coolie from './coolie'
import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard';
import Book from './book';
import Confirm from './confirm';
import Porter from './porter'
import Porterconfirm from './porterconfirm';
import Plogin from './plogin';
import Psignup from './psignup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from './navbar/aboutus';
import Contact from './navbar/Contact';
import History from './menu/history';
import Profile from './menu/profile'
import Forgot from './forgot';
import Pforgot from './pforgot';
import Pprofile from './menu/pprofile'
import Phistory from './menu/phistory'


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Coolie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/:id" element={<Dashboard/>}/>
        <Route path="/book/:id/:uid" element={<Book/>}/>
        <Route path='/confirm/:id/:uid' element={<Confirm/>}/>
        {/* porter */}
        <Route path='/plogin' element={<Plogin/>}/>
        <Route path='/psignup' element={<Psignup/>}/>
        <Route path='/porter/:pid' element={<Porter/>}/>
        <Route path='/porterconfirm/:id/:uid/:pid' element={<Porterconfirm/>}/>
        {/* nav */}
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        {/* menu */}
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/history/:id' element={<History/>}/>

        <Route path='/pprofile/:pid' element={<Pprofile/>}/>
        <Route path='/phistory/:pid' element={<Phistory/>}/>

        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/pforgot' element={<Pforgot/>}/>
        
        
        
      </Routes>
    </Router>
    </>
  )
}

export default App
