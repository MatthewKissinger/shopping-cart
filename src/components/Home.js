import "../styles/home.css"
import ShopCard from "./ShopCard";


export default function Home(props) {
    const { data, addToCart } = props;

    return (
        <div className="home-layout">
            <h1 className="home-banner">Banner Message here</h1>
            <div className="shopCard-grid">
                <ShopCard 
                    addToCart={addToCart}
                    id={data[0].id}
                    name={data[0].name}
                    price={data[0].price}
                    text={data[0].text}
                />
                <ShopCard 
                    addToCart={addToCart}
                    id={data[1].id}
                    name={data[1].name}
                    price={data[1].price}
                    text={data[1].text}
                />
            </div>   
        </div>
    )
}