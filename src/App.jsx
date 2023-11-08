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
import useToken from './components/useToken';


function App() {

  const {token, removeToken, setToken} = useToken()

  return (
    <Router>

     { !token && token!=="" & token!==undefined?
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Login' setToken={setToken} element={<LogIn/>}/>
          <Route path='/Signup' element={<SignUp/>}/>
        </Routes>
        :
        <Routes>
          <Route path='/Homepage' element={<Homepage/>}/>
        </Routes>
    }
    </Router>
  );
}

export default App;
