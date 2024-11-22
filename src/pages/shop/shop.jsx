import React from 'react'
import { PRODUCTS } from '../../products'
import { Products } from './products'
import "./shop.css"




export const Shop = () => {
    return (
        <div className='shop'>
            <div className='m-10 bg-gradient-to-r from-gray-700 to-gray-200"' >
                <h1 className='font-bold text-3xl text-center'>Nike's Store</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product)=>(
                    <Products data={product} />
                ))}

            </div>
        </div>
    )
}
