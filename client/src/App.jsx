import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Projects from './pages/Projects';





export default function App() {
  return (
    <BrowserRouter>
    
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<Search />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/sign-in' element = {<SignIn />}/>
      <Route path='/sign-up' element = {<SignUp/>}/>
      <Route path='Projects' element ={<Projects/>}/>

      
     
      
    </Routes>
   
  </BrowserRouter>
  )
}
