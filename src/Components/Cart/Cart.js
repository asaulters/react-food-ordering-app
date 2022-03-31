import React, { useState, useContext } from 'react';

const Cart = (props) => {
    const [currentCart, setCurrentCart] = useState([])

    const cart = useContext(currentCart); 

    const addToCartHandler = (props) => {
        // setCurrentCart
        console.log('CArt Baby')
        
    }




}

export default Cart;