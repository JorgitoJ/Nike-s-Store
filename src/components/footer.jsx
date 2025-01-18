import React from 'react'

import igafooter from '../assets/imgfooter.jpg'

export const Footer = () => {
    

    return (
        <footer className='bg-black text-white pb-3 justify-center items-center flex flex-col bottom-0'>
            
            <div className='flex flex-col items-center '>
                <img className='h-12 w-12 object-cover flex justify-center ' src={igafooter} alt="imagr" />
                <p>Just do It</p>
            </div>
            <div className=''>
                <p className='text-'>© Copyright 2024 Nike's Store. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
