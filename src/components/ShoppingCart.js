import Footer from "./Footer"
import CartCard from "./CartCard";


export default function ShoppingCart(props) {

    const { cartArray } = props;

    // conditionally render whether the cartArray is empty or contains some items

    // variable that will map the cartArray to render each CartCard component that is qeued for purchase
    const cartCardList = '';

    return (
        <div>
            <div className="cart-layout">
                {cartArray.length === 0 ? 
                    <div>Your cart is empty</div> 
                    :  
                    <div className="cartCard-grid">
                        Your cart has items
                    </div>  
                }
                
            </div>
            <Footer />
        </div>
    )
}