import React from 'react';
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer ON Your Email</h1>
        <p>Subscribe to our newsletter and stay update</p>
        <div>
            <input type='email' placeholder='Your Email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter