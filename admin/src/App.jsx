import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Components/Pages/Admin/Admin'

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Admin></Admin>
    </div>
  )
}

export default App