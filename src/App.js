import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from "./components/ShoppingCart";

// setup Home page shop

// 2) ShopCard.js -> which will take data from database as props
//  test the rendering of one card
// 3) display the ShopCard.js as a list from # in database array

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home data={shopItemsData}/>}/>
                    <Route path='cart' element={<ShoppingCart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}