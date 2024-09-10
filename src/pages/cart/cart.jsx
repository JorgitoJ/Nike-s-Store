import React, { useContext} from 'react'
import {useNavigate} from "react-router-dom";
import { PRODUCTS } from '../../products'
import {ShopContext} from "../../context/shop-context.jsx"
import { CartItem } from './cart-item';

import "./cart.css";

export const Cart = () => {
  
  const {cartItem, getTotalCartAmmount} = useContext(ShopContext);
  const totalAmmount = getTotalCartAmmount()

  const navigate = useNavigate()


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
        {totalAmmount > 0 ?(
        <div className='checkout'>
          <p>Subtotal: ${totalAmmount}</p>
          <button onClick={() => {navigate("/")}}>Continue Shopping</button>
          <button>Checkout</button>

        </div>
        ):
        <h1>Your Cart is Empty</h1>
        }


    </div>
  )
}
