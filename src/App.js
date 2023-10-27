import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage.jsx';
import LandingPage from './components/LandingPage.jsx';
function App() {

  return (
    <Router>
     
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Homepage' element={<Homepage/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;
