import React from 'react'
import './Admin.css'
import Sidebar from '../../Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../AddProduct/AddProduct'
import ListProduct from '../../Listproduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'> 
    <Sidebar></Sidebar>
<Routes>
    <Route path='/addproduct' element={<AddProduct/>}></Route>
    <Route path='/listproduct' element={<ListProduct/>}></Route>
</Routes>
    </div>
  )
}

export default Admin