import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from "./components/ShoppingCart";

// create state for the shoppingCart
// - an array that holds objects with all of the data of each shopCard plus the quantity of each item




// Methods

// clickAddToCart Function that will first console.log the id of the card clicked
function addToCart(e) {
    console.log(e.target.id);
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={
                    <Home 
                        addToCart={addToCart}
                        data={shopItemsData}/>}/>
                    <Route path='cart' element={<ShoppingCart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}