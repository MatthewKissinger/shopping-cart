import { useState, useEffect } from 'react'
import { shopItemsData } from "./data";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ShoppingCart from "./components/ShoppingCart";

// when calling the subtract(decrement function) and the quantity is at zero prompt the user if they want to remove the item from the cart, if yes, remove the item from the cartArray state
// filter could work to remove an object from the cart array

// create a function for checking out the cart

// create a function for clearing the cart

// link the back to shop button on the cart page to go to the products page

export default function App() {
    // State
    const [ cartArray, setCartArray ] = useState([]);
    const [ cartItemTotal, setCartItemTotal ] = useState([0]);
    const [ cartPriceTotal, setCartPriceTotal ] = useState([0]);


    //useEffect function that tracks the total cart items everytime the cartArray is updated

    useEffect(() => {

        const itemTotal = cartArray.reduce((acc, object) => {
            return acc + object.quantity;
        }, 0);

        setCartItemTotal(itemTotal);

    }, [cartArray]);

    //useEffect function that tracks the grand total of the cart everytime the cartArray is updated

    useEffect(() => {

        const cartGrandTotal = cartArray.reduce((acc, object) => {
            return acc + (object.quantity * object.price); 
        }, 0);

        setCartPriceTotal(cartGrandTotal);

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

    // Methods for the CartCard.js buttons
    function increaseCartItem(e) {

        const itemId = e.target.id;

        const newCart = cartArray.map((item) => {
            if (item.id === itemId) {
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })

        setCartArray(newCart);
        
    }

    function decreaseCartItem(e) {

        const itemId = e.target.id;

        const result = cartArray.find((item) => item.id === itemId);

        if (result.quantity === 1) {
            const response = window.confirm("Do you want to remove this item from the cart?");

            if (response === false) {
                return;
            } else {
                // filter out the result item from the array
                const newCart = cartArray.filter((item) => {
                    if (item.id !== itemId) {
                        return item;
                    }
                })
                setCartArray(newCart);
            }
        } else {
            const newCart = cartArray.map((item) => {
                if (item.id === itemId) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item;
            })
            setCartArray(newCart); 
        }
    }

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
                            cartPriceTotal={cartPriceTotal}
                            increaseCartItem={increaseCartItem}
                            decreaseCartItem={decreaseCartItem}
                        />} 
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}