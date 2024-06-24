import React, { useContext } from 'react';
import './ProductDisplay.css';
 import starIcon from '../Assetss/Assets/star_icon.png'
 import starIcomDum  from '../Assetss/Assets/star_dull_icon.png'
 import { ShopContext } from '../../Context/Shopcontext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

    return (
        <div className='productDisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
           <img src={product.image}></img>
           <img src={product.image}></img>
           <img src={product.image}></img>
           <img src={product.image}></img>
                </div>
                <div className='productdisplay-img'>
              <img className='productdisplay-mainImg' src={product.image}></img>
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img className='star-icon' src={starIcon}></img>
                    <img  className='star-icon' src={starIcon}></img>
                    <img  className='star-icon' src={starIcon}></img>
                    <img  className='star-icon' src={starIcon}></img>
                    <img  className='star-icon1' src={starIcomDum}></img>
                   
                </div>
                <p>(122)</p>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-prices-old'>
                        {product.old_price}
                    </div>
                    <div className='productdisplay-right-prices-new'>
                        {product.new_price}
                    </div>
                    </div>
                    <div className='productdisplay-right-desc'>
                        A lightweight .usually knitted pullover shirt,close fitting and with a 
                        round neckline and short sleeve, worn as a  undershirt or outer garments
                    </div>
                    <div className='productdisplay-right-size'>
                        <h1>Select Size</h1>
                        <div className='productdisply-right-sizes'>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
                    <p className='productdisplay-right-category'>
                        <span>Category:</span>Women ,T-Shirt ,Crop Top
                    </p>
                    <p className='productdisplay-right-category'>
                        <span>Tags:</span>Modern ,Latest
                    </p>
                
            </div>
        </div>
    )
}

export default ProductDisplay