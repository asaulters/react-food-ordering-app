import React, {useReducer} from 'react';
import CartContext from './cart-context';




// export const CountContext = React.createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price;
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    } else if (action.type === 'REMOVE'){
        const updatedItems = state.items.filter((items) => items.id !== action.item)
    }
    return defaultCartState;
}

const CartProvider = props => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addITemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addITemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
                 {props.children}
            </CartContext.Provider>
}

export default CartProvider;