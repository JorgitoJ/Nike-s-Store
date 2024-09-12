import React from 'react'
import {useNavigate} from "react-router-dom";


export const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className='footer'>
            <div className='marca'>
                <img src="../assets/imgfooter.jpg" alt="imagr" />
                <p>Just do It</p>
            </div>
            <div className='contacto'>

            </div>
        </div>
    )
}
