import React from 'react'
import './Footer.css'
import instaImg from '../Assetss/Assets/instagram_icon.png'
import pinterestImg from '../Assetss/Assets/pintester_icon.png'
import whatsAppImg from '../Assetss/Assets/whatsapp_icon.png'
import footerLogo from '../Assetss/Assets/logo.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-logo'>
            <img src={footerLogo}></img>
            <p>Shopper</p>
            </div>
            <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
      
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img style={{color:'white'}} src={instaImg} alt='insta-icon'></img>
        </div>
        <div className='footer-icons-container'>
            <img style={{color:"black"}} src={pinterestImg} alt='pinterest-icon'></img>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsAppImg} alt='whatsapp-icon'></img>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr></hr>
        <p>copyright @ 2023 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer