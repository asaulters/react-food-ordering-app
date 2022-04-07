import React, {useContext, useEffect, useState} from 'react';

const CartContext = React.createContext({
    cartItems: null


});

export const CartContextProvider = (props) => {
    const [cart, setCart] = useState(null)


    useEffect(() => {

    }, [])

    return (
        <CartContext.Provider 
            value={{
                cartItems:cart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext; 