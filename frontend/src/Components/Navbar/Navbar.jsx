import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../Assetss/Assets/logo.png'
import './Navbar.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Shopcontext';
import { useRef } from 'react';
import navMenuBar from '../Assetss/Assets/dropdown_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
const {getTotalcartItems}=useContext(ShopContext);

const menuRef=useRef();

const dropDown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.current.classList.toggle('open');
}
  return (
    <div className='navbar'>
<div className='nav-logo'>
        <img  src={logo} alt='logo' width={'50px'}></img>
        <p>Shopper</p>
       

</div>
<div className='nav-menu'>
  <img className='nav-menubar' onClick={dropDown_toggle}  style={{width:'40px'}} src={navMenuBar}></img>
    <ul ref={menuRef} className='menu-List'>
       <li onClick={()=>setMenu("shop")}><Link  className='menu-Link' to='/'>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("mens")}><Link className='menu-Link' to='/mens'> Men</Link> {menu==="mens"?<hr></hr>:<></>}</li>
       
        <li onClick={()=>setMenu("womens")}><Link className='menu-Link' to='/womens'>Women </Link>{menu==="womens"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link className='menu-Link' to='/kids'>kids </Link>{menu==="kids"?<hr></hr>:<></>}</li>
    </ul>
</div>
<div className='nav-login-cart'>
{
  localStorage.getItem('auth-token')?
  <button onClick={()=>{localStorage.removeItem('auth-token');
  window.location.replace('/')}}
  >Logout</button>:<Link to='/login'><button>LogIn</button></Link>
}

<Link to='/cart' className='menu-Link'><AiOutlineShoppingCart className='cart-icon'></AiOutlineShoppingCart></Link>
<div className='nav-cart-count'>
  {getTotalcartItems()}
</div>

</div>
    </div>
  )
}

export default Navbar