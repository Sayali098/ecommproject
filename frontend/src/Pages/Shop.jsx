import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/Newcollection/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
// import Footer from '../Components/Footer/Footer'
const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offer></Offer>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
   
    </div>
  )
}

export default Shop