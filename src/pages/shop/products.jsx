import React, { useContext } from 'react'

import {ShopContext} from "../../context/shop-context.jsx"


export const Products = (props) => {
    
    const {addToCart, cartItem} = useContext(ShopContext);
    
    const {id, productName, price, productImage} =props.data
    const cartItemAmmount = cartItem[id]

    return (
        <div className='mt-20 p-2 container mx-auto'>
            <div className='bg-white flex items-center rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
            
            <div className='relative'>
                <img className='transition-transform hover:scale-110 w-[220px] h-[220px] overflow-hidden object-contain' src={productImage} alt={productName}/>
            </div>
            
            <div className='relative ml-4'>
                <p className='text-3xl lg:text-2xl'><b>{productName}</b></p>
                <p className='text-xl text-gray-700'>${price}</p>
                
                <button className='text-lg font-semibold relative hover:after:w-full after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-width after:duration-300' onClick={()=> addToCart(id)}>
                    Add {cartItemAmmount>0 && <>({cartItemAmmount})</>} 
                </button>
            </div>
        </div>
        </div>
    )
}
