import "../styles/products.css"
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
        <div className="product-layout">
            <h1 className="home-banner">Banner Message here</h1>
            <div className="shopCard-grid">
                {shopCardList}
            </div>   
        </div>
    )
}