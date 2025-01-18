import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {cartItem , addToCart, removeToCart, updateAmmount} = useContext(ShopContext);
    const {id, productName, price, productImage} =props.data
    return (
    <div className='mt-10 p-2 container mx-auto'> 
        
        <div className=''>
        <div className='bg-white flex items-center rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow m-'>
        <div>
        <img src={productImage} alt={productName} className='w-[220px] h-[220px] object-contain'/>
        </div>
        <div className='flex flex-col col-span-2 justify-center items-center'>
            <div className='flex flex-col mx-6'>
                <p className='text-xl font-semibold'>{productName}</p>
                <p className='text-center'>${price}</p>
            </div>
            <div className='flex  text-center font-bold'>
                <button  onClick={() => removeToCart(id)}>-</button>
                <input className='w-[40px] text-center' value={cartItem[id]} onChange={(e) => updateAmmount(Number(e.target.value),id)} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
