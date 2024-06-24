import React, { useContext } from 'react';
import './cartItems.css'
import { ShopContext } from '../../Context/Shopcontext';
import RemoveIcon from '../Assetss/Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount,allProduct, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='CartItems'>
            <div className='cartItems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr></hr>

            {allProduct.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='CartItems-format cartItems-format-main'>
                            <img src={e.image_url} className='carticon-product-icon'></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={RemoveIcon} onClick={() => { removeFromCart(e.id) }}></img>
                        </div>
                        <hr></hr>
                    </div>
                }
                return null;
            })}
            <div className='cartItems-down'>

                <div className='cartitems-total'>
                    <h1>Cart total</h1>
                    <div className=''>
                        <div className='cartitems-total-items'>
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr></hr>
                        <div className='cartitems-total-items'>
                            <p>Shipping free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-items'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>





                <div className='cartitems-promocode'>
                    <p>If you have a promo code ,enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promo code'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems