import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from "../../context/shop-context.jsx"
import { CartItem } from './cart-item';

import "./cart.css";

export const Cart = () => {
  
  const {cartItem} = useContext(ShopContext);
  

  return (
    <div className='cart'>
      <div>
          <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map(products => {
          if(cartItem[products.id] !== 0 ){
              return <CartItem data={products} key={products.id}/>
          }
          else{
            return null
          }
        })}
      
      </div>    
    </div>
  )
}
