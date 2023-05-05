import "../styles/cart.css"
import Footer from "./Footer"
import CartCard from "./CartCard";
import { Link } from "react-router-dom"


export default function ShoppingCart(props) {

    const { cartArray } = props;

    // conditionally render whether the cartArray is empty or contains some items

    // variable that will map the cartArray to render each CartCard component that is qeued for purchase
    const cartCardList = '';

    return (
        <div className="cart-page">
            {cartArray.length === 0 ? 
                <div className="cart-layout">
                    <p className="cart-empty-p">Your cart is empty &#128542;</p> 
                    <Link to="/products">
                        <button className="shop-btn">Shop Now</button>
                    </Link> 
                </div>
                : 
                <div className="cart-layout"> 
                    <div className="cartCard-grid">
                        Your cart has items
                    </div>  
                </div>
            }
            <Footer />
        </div>
    )
}