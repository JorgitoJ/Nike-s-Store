import React from 'react'
import { createContext, useState } from 'react'
import {PRODUCTS} from "../products.js"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i]=0;
    }
    return cart
}

export const ShopContextProvider = (props) => {
    
    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]+ 1 }))
    }
    const removeToCart = (itemId) => {
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId] - 1 }))
    }
    
    const contextValue = {cartItem, addToCart, removeToCart}
    

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
