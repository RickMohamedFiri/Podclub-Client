import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage.jsx';
import LandingPage from './components/LandingPage.jsx';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {

  return (
    <Router>
     
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Homepage' element={<Homepage/>}/>
          <Route path='/Signup' element={<SignUp/>}/>
          <Route path='Login' element={<Login/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;
