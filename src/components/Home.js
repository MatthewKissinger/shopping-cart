import "../styles/home.css"
import Footer from "./Footer"
import coffeePic from "../assets/images/coffee-shop.jpg"
import { Link } from "react-router-dom"

export default function Home() {
    
    return (
        <div>
            <div className="home-layout">
                <div className="home-left-container">
                    <h1>Fresh coffee beans shipped straight to your door</h1>
                    <Link to="/products">
                        <button className="shop-btn">Shop Now</button>
                    </Link>    
                </div>
                <div className="home-right-container">
                    <img src={coffeePic} loading="lazy" alt="market stall" />
                </div>
            </div> 
            <Footer /> 
        </div>
        
    )
}