import React, { useContext} from 'react'
import { Link } from "react-router-dom";
import img from '../assets/images.png'
import { LoadingContext } from '../context/loading-context';


export const Navbar = () => {
    
    const {setIsLoading} = useContext(LoadingContext)

    const handleLoadData = () =>{
        setIsLoading(true)
        setTimeout(() =>{
            setIsLoading(false)
        }, 3000)
    }


    return (
            <nav className='fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm'>
                <div className='flex justify-between'>
                    <div className='flex p-5 items-center'>
                        <img className='h-10 w-15 object-cover' src={img} alt="" />
                        <p className='pl-2 text-lg font-semibold'>Nike's Store</p>
                    </div>
                    <div className='flex items-center gap-4 font-semibold pr-2'>
                        <button
                            onClick={handleLoadData} 
                            className='px-2 py-1 relative hover:after:w-full after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-width after:duration-300'>
                            <Link to="/">Shop</Link>
                            </button>
                        <div className='h-[18px] border border-r-1 border-black '></div>
                        <button className='px-2 py-1 relative hover:after:w-full after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-width after:duration-300'><Link to="/cart">ShoppingCar</Link></button>
                    </div>
                </div>
            </nav>

    )
}
