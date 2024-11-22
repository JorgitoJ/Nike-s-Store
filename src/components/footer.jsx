import React from 'react'
import './footer.css'
import igafooter from '../assets/imgfooter.jpg'

export const Footer = () => {
    

    return (
        <footer className='footer'>
            
            <div className='marca'>
                <img src={igafooter} alt="imagr" />
                <p>Just do It</p>
            </div>
            <div className='contacto'>
                <p>© Copyright 2024 Nike's Store. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
