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

export const Context = React.createContext();


function App() {

  const {token, removeToken, setToken} = useToken()

  
  return (
    <Context.Provider value={[token, removeToken, setToken]}>
         <Router>
              { !token ?
                <Routes>
                  <Route path='/' element={<LandingPage/>}/>
                  <Route path='/Login' element={<LogIn setToken={setToken}/>}/>
                  <Route path='/Signup' element={<SignUp/>}/>
                </Routes>
                :
                (
                <Routes>
                  <Route path='/' element={<LandingPage/>}/>
                  <Route path='/Login' element={<LogIn setToken={setToken}/>}/>
                  <Route path='/Signup' element={<SignUp/>}/>
                  <Route path='/Homepage' element={<Homepage removeToken={removeToken} />}/>
                </Routes>
                )
              }
         </Router>
    </Context.Provider>
  );
}

export default App;
