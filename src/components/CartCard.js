import React from 'react';
import "../styles/cartCard.css";

export default function CartCard(props) {
    const { name, price, image, id, quantity, description } = props;

    return (
        <div id={id} className='cart-card'>
            <div className='img-container'>
                <img src={require(`../assets/images/${image}.jpg`)} loading='lazy' alt={description}></img>
            </div>
            <div className='cart-card-info'>
                <p className='cart-card-name'>{name}</p>
                <p className='cart-card-price'>{`$${price * quantity}`}</p>
            </div>
            <div className='update-cart-card-quantity'>
                <button>-</button>
                <p className='cart-card-quantity'>{quantity}</p>
                <button>+</button>
            </div>

        </div>
    )
}