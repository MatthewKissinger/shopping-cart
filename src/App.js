import { useState } from 'react'
import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingCart from "./components/ShoppingCart";

// create a footer
// add github link

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
            console.log('not in the cart, please add the first instance')
            setCartArray([
                ...cartArray, 
                result
            ])
        } else {
            console.log('update the quantity');
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
                        element={<ShoppingCart />} 
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}