import React from 'react'
import './Breadcrum.css'
import { SlArrowDown } from "react-icons/sl";
const Breadcrum = (props) => {
    const {product}=props;

  return (
    <div className='breadcrum'>
  Home <SlArrowDown></SlArrowDown> SHOP  <SlArrowDown></SlArrowDown> {product.category}
   <SlArrowDown></SlArrowDown> {product.name}
    </div>
  )
}

export default Breadcrum