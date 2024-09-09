import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {cartItem , addToCart, removeToCart} = useContext(ShopContext);
    const {id, productName, price, productImage} =props.data
    return (
    <div className='cartItem'> 
        <img src={productImage} alt={productName} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeToCart(id)}>-</button>
                <input value={cartItem[id]} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
