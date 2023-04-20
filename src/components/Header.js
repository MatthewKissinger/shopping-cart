import { Outlet, Link } from "react-router-dom";
import '../styles/header.css'


export default function Header() {
    return (
        <div>
            <header>
                <div className="header-left">
                    <h2>Matt's Potion Shop</h2>
                </div>
                <div className="header-right">
                    <ul className='header-right-list'>
                        <Link className="text-link" to="/">
                            <li className='home-link'>
                                <span className='material-icons home-icon'>
                                    home
                                </span>
                                <h2>Home</h2>                 
                            </li>
                        </Link> 
                        <Link className="text-link" to="/cart">
                            <li className='cart-link'>
                                <span className='material-icons cart-icon'>
                                    shopping_cart
                                </span>
                                <h2>Cart</h2>
                            </li>
                        </Link>   
                    </ul>
                </div>           
            </header>
            <Outlet />
        </div>
    )
}