import React, {useContext} from 'react'
import { LoadingContext } from '../../context/loading-context'
import { Spinner } from '../spinner'
import { PRODUCTS } from '../../products'
import { Products } from './products'





export const Shop = () => {
    const {isLoading} = useContext(LoadingContext)
    return (
        <div className='shop'>
            {isLoading ? <Spinner/> : 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-3'>
                {PRODUCTS.map((product)=>(
                    <Products data={product} />
                ))}

            </div>
            }
        </div>
    )
}
