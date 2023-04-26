import { Outlet, Link } from "react-router-dom";
import '../styles/header.css'

export default function Header(props) {
    const { cartTotal } = props;

    return (
        <div>
            <header>
                <div className="header-left">
                    <h2>Matt's Coffee Beans</h2>
                </div>
                <div className="header-right">
                    <ul className='header-right-list'>
                        <Link className="text-link" to="/">
                            <li className='home-link'>
                                <h2>Home</h2>                 
                            </li>
                        </Link>
                        <Link className="text-link" to="/products">
                            <li className="products-link">
                                <h2>Products</h2>
                            </li>
                        </Link> 
                        <Link className="text-link" to="/cart">
                            <li className='cart-link'>
                                <span className='material-icons cart-icon'>
                                    shopping_cart
                                </span>
                                <div className="cart-total">
                                    <p>{cartTotal}</p>
                                </div>                               
                            </li>
                        </Link>   
                    </ul>
                </div>           
            </header>
            <Outlet />
        </div>
    )
}