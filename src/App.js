import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage.jsx';
// eslint-disable-next-line
import LandingPage from './components/LandingPage.jsx';
// eslint-disable-next-line
import SignUp from './components/SignUp.jsx'
// eslint-disable-next-line
import LogIn from './components/LogIn.jsx';


function App() {

  return (
    <Router>
     
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Homepage' element={<Homepage/>}/>
          <Route path='/Signup' element={<SignUp/>}/>
          <Route path='/Login' element={<LogIn/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
