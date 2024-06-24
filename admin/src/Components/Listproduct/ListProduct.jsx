import React, { useState,useEffect } from 'react'
import './ListProduct.css'
import crossIcon from '../../assets/cross_icon.png'


const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch('http://localhost:3000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      })
  }

  useEffect(() => {
    fetchInfo();
  }, [])

const removeProduct=async(id)=>{

  await fetch('http://localhost:3000/removeproduct',{
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',

    },
    body:JSON.stringify({id:id})
  })
  
  await fetchInfo();
}


  return (
    <div className='listProduct'>
      <h1>All Products List</h1>
      <div className='listProduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listProduct-AllProduct'>
        <hr></hr>

        {allProducts.map((product, index) => {

          return<>
          <div key={index} className='listProduct-format-main listProduct-format'>
            <img className='listProduct-product-icon' src={product.image}></img>

            <p>{product.name}</p>
           <p>${product.old_price}</p>
           <p>${product.new_price}</p>
           <p>{product.category}</p>
           <img onClick={()=>{ removeProduct(product.id)}} src={crossIcon} className='listProduct-remove-icon'></img>
          </div>
          <hr/>
          </> 
        })}
      </div>
    </div>
  )
}

export default ListProduct