import React, { useContext } from 'react';

import CartIcon from './CartIcon';
import CartContext from '../Context/cart-context';

import  './Header.css';

const CartHeader = (props) => {

    const cartCtx = useContext(CartContext);


    return (
        <React.Fragment >
            <CartIcon />
            <h5 >Your Cart</h5>
            {/* <div className='cart-header-number'>{props.counter}</div> */}
            <div className='cart-header-number'>{cartCtx.cartItems}</div>

        </React.Fragment>
    )

}

export default CartHeader;

