import "../styles/cart.css"
import Footer from "./Footer"
import CartCard from "./CartCard";
import { Link } from "react-router-dom"


export default function ShoppingCart(props) {

    const { cartArray, cartPriceTotal, increaseCartItem, decreaseCartItem } = props;

    // variable that will map the cartArray to render each CartCard component that is qeued for purchase
    const cartCardList = cartArray.map((item) => {

        return(
            <CartCard
                key={item.id}
                {...item}
                increaseCartItem={increaseCartItem}
                decreaseCartItem={decreaseCartItem}
            />
        )
    })

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
                        {cartCardList}
                    </div>
                    <div className="cart-grand-total">
                        <p>{`Total: $${cartPriceTotal}`}</p>
                    </div>
                    <div className="cart-options-container">
                        <button className="cart-checkout-btn">Check Out</button>
                        <Link to="/products">
                            <button className="cart-products-btn">Back to Shop</button>
                        </Link>
                        <button className="cart-clear-btn">Clear Cart</button>
                    </div>  
                </div>
            }
            <Footer />
        </div>
    )
}