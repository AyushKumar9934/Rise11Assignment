import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AllUser from './AllUser'

import Header from './Header'

import ParticularCard from './ParticularCard'
import Login from './login.jsx';
import Signup from './signup.jsx';

const App = () => {
  return (
    <>

  <Router>
    <Routes>
      <Route path='/login' element ={<Login /> }/>
      <Route path='/signup' element={<Signup />}/>


      <Route path='/' element={  <><Header /> <AllUser /></>}/>


      <Route path='/item/:id' element={<><Header /> <ParticularCard /></>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App