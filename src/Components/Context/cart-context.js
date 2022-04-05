import React, {useContext, useEffect, useState} from 'react';

const CartContext = React.createContext({
    cartItems: 0
});

export const CartContextProvider = (props) => {
    const [currCartItem, setCurrCartItem] = useState(null);

    useEffect(() => {
        const storedCartInfo = localStorage.getItem('cartitem');

        if(storedCartInfo.length > 0) {
            console.log('>0')
        }
    }, [])
}

export default CartContext; 