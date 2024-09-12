import { Navbar } from './components/navbar';
import './App.css';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context'; 

import {Footer} from './components/footer'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    } from "react-router-dom";

export const App = () => {
    return (
        <div className='App'>
        
            <ShopContextProvider>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Shop/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                    <Footer/>
                </Router>

            </ShopContextProvider>
        </div>
    )
}
