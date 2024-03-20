import './App.css';
import TopNavContanct from '../src/Components/TopNavContact'
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import About from './Components/AboutComponents/About';
import Systems from './Components/SystemsComponents/Systems';
import Projects from './Components/ProjectComponents/Q/Projects';
import Quality from './Components/QualityComponents/Quality';
import Enquiry from './Components/EnquiryComponents/Enquiry';
import Careers from './Components/CareersComponetns/Careers';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterCompenent from './Components/FooterCompenent';
import { useState } from 'react';
import Skid from './Components/ProjectComponents/Skid';
import Presseure from './Components/ProjectComponents/Presseure';
import HPCU from './Components/ProjectComponents/HPCU';
import CustomerAdd from './REdux Component/CustomerAdd';
import CustomerView from './REdux Component/CustomerView';


function App() {

  const [isHome ,setIsHome] = useState(true)

  return (
<>
<div className="App">
      <TopNavContanct />
      <Nav
                isHome={isHome}
                setIsHome={setIsHome}
       />
        <Routes>
          <Route path='/' element={<Home
          />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/systems' element={<Systems />}></Route>
          <Route path='/projects' element={<Projects />}>
            <Route path='skid' element={<Skid />}></Route>
            <Route path='pressure' element={<Presseure />}></Route>
            <Route path='hpcu' element={<HPCU />}></Route>
          </Route>        
          <Route path='/quality' element={<Quality />}></Route>
          <Route path='/enquiry' element={<Enquiry />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='*' element={<p>Error</p>}></Route>
        </Routes>
        <FooterCompenent
            isHome={isHome}
            setIsHome={setIsHome}
         />
    </div>
{/* <div>
  <h1>Redux Customer Add</h1>
  
  <CustomerAdd />
  
</div> */}
</>
  );
}

export default App;
