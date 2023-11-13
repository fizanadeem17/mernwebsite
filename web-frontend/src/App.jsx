
import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './login';
import Home from './home';
import Register from './register';
function App() {

  return (
    <> 
   <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home /> } />
        </Routes>
      </BrowserRouter>
     
    {/* <Register/> <Login/> */}
    </>
     );
  }

  export default App


