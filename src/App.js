import { useState } from 'react'
import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingCart from "./components/ShoppingCart";

// setup the cart page
// 1) empty cart render
// 2) items in cart render
// it should render each item in the cart 
// the user will have the ability to increase or decrease the number of each item that is in the cart
// the cost for each item should be displayed
// the cart total in dollars should be displayed as well

export default function App() {
    // State
    const [ cartArray, setCartArray ] = useState([]);

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
                        cartTotal={cartArray.length}
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