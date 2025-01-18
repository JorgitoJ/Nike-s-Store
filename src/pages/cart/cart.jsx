import React, { useContext} from 'react'
import {useNavigate} from "react-router-dom";
import { PRODUCTS } from '../../products'
import {ShopContext} from "../../context/shop-context.jsx"
import { CartItem } from './cart-item';



export const Cart = () => {
  
  const {cartItem, getTotalCartAmmount} = useContext(ShopContext);
  const totalAmmount = getTotalCartAmmount()

  const navigate = useNavigate()


  return (
    <div className='mt-20'>
      <div className='flex justify-center text-2xl font-semibold '>
          <h1>Your Cart Items</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-3'>
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
        <div className='flex flex-col items-center'>
          <div>
            <p className='text-xl flex'>Subtotal:<p>${totalAmmount}</p></p>
          </div>
          <div className='flex gap-6'>
            <button className='relative hover:after:w-full after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-width after:duration-300' onClick={() => {navigate("/")}}>Continue Shopping</button>
            <button>Out</button>
          </div>

        </div>
        ):
        <h1>Your Cart is Empty</h1>
        }


    </div>
  )
}
