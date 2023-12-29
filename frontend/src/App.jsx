import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Navbar from './Pages/Navbar'
import PrivateRoute from './Pages/PrivateRoute'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route element={<PrivateRoute/>}>
          <Route path='/Profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
