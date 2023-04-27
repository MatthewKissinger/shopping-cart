import "../styles/products.css"
import Footer from "./Footer";
import ShopCard from "./ShopCard";

export default function Products(props) {
    const { data, addToCart } = props;

    const shopCardList = data.map((item) => {

        return (
            <ShopCard 
                key={item.id}
                {...item}
                handleClick={addToCart}
            />
        )
    })

    return (
        <div>
            <div className="product-layout">
                <div className="shopCard-grid">
                    {shopCardList}
                </div>   
            </div>
            <Footer />
        </div>
        
    )
}