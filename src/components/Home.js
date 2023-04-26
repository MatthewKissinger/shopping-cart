import "../styles/home.css"
import coffeePic from "../assets/coffee-shop.jpg"
import { Link } from "react-router-dom"

export default function Home() {
    
    return (
        <div className="home-layout">
            <div className="home-left-container">
                <h1>Fresh Coffee Beans shipped straight to your door</h1>
                <Link to="/products">
                    <button className="shop-btn">Shop Now</button>
                </Link>    
            </div>
            <div className="home-right-container">
                <img src={coffeePic} alt="market stall" />
            </div>
        </div>
    )
}