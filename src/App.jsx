// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from './component/Navbar'
import Signin from './pages/Signin'
// import Card from './component/Card'
// import Modal from './component/Modal'
import Hero from './pages/Home'
import Signup from './pages/Signup'
import Error from './pages/Error'
import Home from './pages/Razorpay'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/pay' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;