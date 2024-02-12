import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Signin from './component/Authentication/Signin'
import Card from './component/Card'
import Modal from './component/Modal'
import Hero from './component/Hero'
import Signup from './component/Authentication/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <Hero />
      <Signup />

      {/* <Card />
      <Modal /> */}
      {/* <Login/>
      <SignUp/> */}
      
    </>
  )
}

export default App;