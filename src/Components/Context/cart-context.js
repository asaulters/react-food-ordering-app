import React, {useContext, useEffect, useState} from 'react';

const CartContext = React.createContext({
    test: (() => { console.log('test')})


});

export const CartContextProvider = (props) => {
    const [currCartItem, setCurrCartItem] = useState(null);

    const test = () => {
        console.log(('test'))
    }

    useEffect(() => {
        const storedCartInfo = localStorage.getItem('cartitem');

        if(storedCartInfo.length > 0) {
            console.log('>0')
        }
    }, [])

    return (
        <CartContext.Provider 
            value={{
                test: {}
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext; 