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
import Help from './navbar/help';


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
        <Route path='/help' element={<Help/>}/>

        
        
      </Routes>
    </Router>
    </>
  )
}

export default App
