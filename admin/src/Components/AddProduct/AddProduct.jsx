import React, { useState } from 'react'
import './AddProduct.css'
import uploadarea from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:'women',
        new_price:'',
        old_price:""
       
        })

    const imagehandler = (e) => {
        setImage(e.target.files[0])
    }

    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addProduct=async()=>{

        console.log(productDetails)
        let responseData;
        let product=productDetails;

        let formData= new FormData();
        formData.append('product',image);

        await fetch('http://localhost:3000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData

     
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product)
            await fetch('http://localhost:3000/addproduct',{

            method:"POST",
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)

            }).then((resp)=>resp.json()).then((data)=>{

                data.success?alert("Product added"):alert("failed")
            })
        }
    
    
    }

   
    return (
        <div className='addProduct'>
            <div className='addproduct-item_field'>
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'></input>
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-item_field'>
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here'></input>
                </div>
                <div className='addproduct-item_field'>
                    <p> Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here'></input>
                </div>
            </div>

            <div className='addproduct-item_field'>
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value="women">women</option>
                    <option value="men">men</option>
                    <option value="kid">kids</option>
                </select>
            </div>

            <div className='addproduct-item_field'>
                <label htmlFor="file-input">
                    <img  src={image?URL.createObjectURL(image):uploadarea} className='addproduct-thumbnail-img'></img>
                </label>
                <input onChange={imagehandler} type='file' name='image' id='file-input' hidden></input>

            </div>
            <button onClick={()=>{addProduct()}} className='addProduct-button'>Add</button>
        </div>
    )
}

export default AddProduct