import { useState, useEffect } from 'react'
import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingCart from "./components/ShoppingCart";


export default function App() {
    // State
    const [ cartArray, setCartArray ] = useState([]);
    const [ cartItemTotal, setCartItemTotal ] = useState([0]);
    const [ cartPriceTotal, setCartPriceTotal ] = useState([0]);


    // create a useEffect function that tracks the total cart items everytime the cartArray is updated

    useEffect(() => {

        const itemTotal = cartArray.reduce((acc, object) => {
            return acc + object.quantity;
        }, 0);

        setCartItemTotal(itemTotal);

    }, [cartArray]);

    // create a useEffect function that tracks the grand total of the cart everytime the cartArray is updated

    useEffect(() => {

    }, [cartArray]);

    // Methods
    function addToCart(e) {
        const cardId = e.target.id;

        // find shop item in the shopItemsData
        const result = shopItemsData.find(item => item.id === cardId);

        // check cartArray to see if it already exists in the cartArray --> if it does increment the quantity
        const inCart = cartArray.find(item => item.id === result.id)

        if (inCart === undefined) {
            setCartArray([
                ...cartArray, 
                result
            ])

            console.log(cartArray)
        } else {
            const newCart = cartArray.map((item) => {
                if(item.id === inCart.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            })

            setCartArray(newCart);
        }
    }

    // create a method that adds up the total quantities in the cart array and outputs a number, that number will be passed to the cartTotal prop in the header
    


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Header 
                        cartTotal={cartItemTotal}
                    />}>
                    <Route index 
                        element={<Home />}
                    />
                    <Route path='products'
                        element={<Products 
                            addToCart={addToCart}
                            data={shopItemsData}
                        />}    
                    />
                    <Route path='cart' 
                        element={<ShoppingCart 
                            cartArray={cartArray}
                        />} 
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}