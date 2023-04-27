import React from 'react';
import "../styles/shopCard.css"

export default function ShopCard(props) {
    const { name, price, description, image, id, handleClick } = props;

    console.log(image);

    return (
        <div id={id} className="shop-card">
            <div className="img-container">
                <img src={require(`../assets/images/${image}.jpg`)} loading='lazy'></img>
            </div>
            <div className="card-info">
                <h1 className="card-name">{name}</h1>
                <p className="card-text">{description}</p>
                <h2 className="card-price">{`$${price}`}</h2>
            </div> 
            <div className="card-btns">
                <button 
                    id={id}
                    onClick={handleClick}
                    className="card-add-btn">Add to Cart
                </button>
            </div>
        </div>
    )
}