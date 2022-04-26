// import React from 'react';
// import CartContext from './cart-context'


// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const CountContext = React.createContext();

// const CartProvider = props => {

//     const addITemToCartHandler = (item) => {

//     }

//     const removeItemFromCartHandler = (id) => {

//     }

//     const cartContext = {
//         items: [],
//         totalAmount: 0,
//         addItem: addITemToCartHandler,
//         removeItem: removeItemFromCartHandler,
//     }

//     return <CartContext.Provider value={cartContext}>
//                  {props.children}
//             </CartContext.Provider>
// }

// export default CartProvider;