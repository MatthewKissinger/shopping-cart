import "../styles/cart.css"
import Footer from "./Footer"
import CartCard from "./CartCard";
import { Link } from "react-router-dom"

// layout and design for when the cart has items
// place a few items in the cart state for design mocking

export default function ShoppingCart(props) {

    const { cartArray } = props;

    // variable that will map the cartArray to render each CartCard component that is qeued for purchase
    const cartCardList = cartArray.map((item) => {

        return(
            <CartCard
                key={item.id}
                {...item}
            />
        )
    })

    console.log(cartArray);

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
                </div>
            }
            <Footer />
        </div>
    )
}