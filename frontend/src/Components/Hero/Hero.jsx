import React from 'react';
import "./Hero.css";
import  handImg from '../Assetss/Assets/hand_icon.png';
import  heroImg from '../Assetss/Assets/hero_image.png';
// import  heroImg from '../Assetss/Assets/hero_image.png'
import arrowIcon from '../Assetss/Assets/arrow.png'

const Hero = () => {
    return (
        <div className='Hero-section'>
            <div className='hero-left'>
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img  src={handImg}></img>
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>

                <div className='hero-latest-btn'>

                    <div>Latest Collection</div>
                    <img src={arrowIcon}  style={{width:'20px',filter:'invert(100%)' ,fontWeight:'bold'}} alt='arrow icon'></img>

                </div>
            </div>
            <div className='hero-right'>
<img  src={heroImg} alt='hero-img'></img>
            </div>
        </div>
    )
}

export default Hero