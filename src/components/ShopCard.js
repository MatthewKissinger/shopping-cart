import "../styles/shopCard.css"

export default function ShopCard(props) {
    const { name, price, text, id, addToCart } = props;

    return (
        <div id={id} className="shop-card">
            <div className="img-container">x</div>
            <div className="card-info">
                <h1 className="card-name">{name}</h1>
                <p className="card-text">{text}</p>
                <h2 className="card-price">{`$${price}`}</h2>
            </div> 
            <div className="card-btns">
                <button 
                    id={id}
                    onClick={addToCart}
                    className="card-add-btn">Add to Cart
                </button>
            </div>
        </div>
    )
}