

export default function ShopCard(props) {
    const { name, price, text } = props;

    return (
        <div className="shop-card">
            <h3>{name}</h3>
            <h2>{price}</h2>
            <p>{text}</p>
        </div>
    )
}