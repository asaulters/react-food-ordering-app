import React from 'react';

import CartIcon from './CartIcon';

import  './Header.css';

const CartHeader = (props) => {

    return (
        <React.Fragment >
            <CartIcon />
            <h5 >Your Cart</h5>
            <div className='cart-header-number'>2</div>

        </React.Fragment>
    )

}

export default CartHeader;

