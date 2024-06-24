import React from 'react'
import './Navbar.css'
import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navLogo} className='nav-logo'></img>
        <img src={navProfile} className='nav-profile'></img>
    </div>
  )
}

export default Navbar