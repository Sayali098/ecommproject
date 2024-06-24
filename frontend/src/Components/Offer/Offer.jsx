import React from 'react';
import './Offer.css';
// import ExclusiveImg from '../Assets/exclusive_img.png'

import ExclusiveImg from '../Assetss/Assets/exclusive_image.png'

const Offer = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
         <h1>Exclusive </h1>
         <h1>Offers for you</h1>
         <p>Only On Best Sellet Products</p>
         <button>Check Now</button>
            </div>
            <div className='offers-right'>
                  <img src={ExclusiveImg}></img>
            </div>
        </div>
    )
}

export default Offer