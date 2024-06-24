import React, { useContext } from 'react'
import './ShopCategory.css';
import { ShopContext } from '../Context/Shopcontext';
import Item from '../Components/Item/Item'
import { SlArrowDown } from "react-icons/sl";

const ShopCategory = (props) => {
  const {allProduct}=useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner}></img>
      
      <div  className='shopcategory-indexSort'>
        <p>
          <span> Showing 1-12</span> Out of 36 products
        </p>
        <div className='shopcategory-sort'>
Sort by<SlArrowDown></SlArrowDown>
        </div>
      </div>
      <div className='shopcategory-Products'>
        {allProduct.map((item,i)=>{
             if(props.category.toLowerCase()===item.category.toLowerCase()){
              return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
             }
// here i have changed image_url to image
              
             else{
              return null;
             }
          })
        }
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
      </div>
  )
}

export default ShopCategory