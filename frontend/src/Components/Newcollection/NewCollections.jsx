import React, { useEffect, useState } from 'react';
import './Newcollection.css';

// import newcollection from '../Assetss/Assets/data';
import Item from '../Item/Item';

const NewCollections = () => {
  const [newcollection, setNewcollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/getcollections')
    .then((response)=>response.json())
     .then((data)=>setNewcollection(data))


  }, [])
  return (
    <div className='newcollections'>
      <h1>New Collections</h1>
      <hr></hr>
      <div className='collections'>
        {
          newcollection.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
          })
        }
      </div>
    </div>
  )
}

export default NewCollections