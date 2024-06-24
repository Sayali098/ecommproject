import React, { createContext, useEffect, useState } from "react";
// import allProduct from '../Components/Assetss/Assets/all_product'




const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allProduct, setAllProduct] = useState([]);

    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:3000/allproducts')
        .then((response) => response.json())
        .then((data) => setAllProduct(data))
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:3000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})

            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))

        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProduct.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }

        }
        return totalAmount;
    }

    const getTotalcartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }


    const ContextValue = { getTotalcartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart };

    return (<ShopContext.Provider value={ContextValue}>

        {props.children}

    </ShopContext.Provider>
    )
}


export default ShopContextProvider;