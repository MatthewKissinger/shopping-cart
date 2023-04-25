import { useState } from 'react'
import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from "./components/ShoppingCart";


export default function App() {
    // State
    const [ cartArray, setCartArray ] = useState([]);

    // Methods

    // clickAddToCart Function that will first console.log the id of the card clicked
    // then it will push the object to the cartArray if it is not already in the cartArray
    // if it is already in the array it will increase the quantity
    function clickTest(e) {
        console.log(e.target.id);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={
                    <Home 
                        addToCart={clickTest}
                        data={shopItemsData}/>}/>
                    <Route path='cart' element={<ShoppingCart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}