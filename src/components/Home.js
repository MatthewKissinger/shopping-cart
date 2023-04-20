import ShopCard from "./ShopCard";


export default function Home(props) {
    const { data } = props;

    return (
        <div>
            Home page here
            <ShopCard 
                name={data[0].name}
                price={data[0].price}
                text={data[0].text}
            />
        </div>
    )
}