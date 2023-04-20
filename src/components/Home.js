import "../styles/home.css"
import ShopCard from "./ShopCard";


export default function Home(props) {
    const { data } = props;

    return (
        <div className="home-layout">
            Home page here
            <div className="shopCard-grid">
                <ShopCard 
                    name={data[0].name}
                    price={data[0].price}
                    text={data[0].text}
                />
            </div>   
        </div>
    )
}