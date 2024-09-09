import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='navlink'>
                    <Link to="/">Shop</Link>
                    <Link to="/cart">ShoppingCar</Link>
                </div>
            </nav>

    )
}
