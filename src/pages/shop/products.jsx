import React, { useContext } from 'react'

import {ShopContext} from "../../context/shop-context.jsx"


export const Products = (props) => {
    
    const {addToCart, cartItem} = useContext(ShopContext);
    
    const {id, productName, price, productImage} =props.data
    const cartItemAmmount = cartItem[id]

    return (
        <div className='product'>
            <img src={productImage} alt={productName}/>
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <button className='addToCartBttn' onClick={()=> addToCart(id)}>
                    Add To Cart {cartItemAmmount>0 && <>({cartItemAmmount})</>} 
                </button>
            </div>
        </div>
    )
}
