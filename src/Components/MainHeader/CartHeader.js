import React, { useContext, useEffect } from 'react';

import CartIcon from './CartIcon';
import CartContext from '../Context/cart-context';

import { CountContext} from '../Home/Home'

import  './Header.css';

const CartHeader = (props) => {

    const cartCtx = useContext(CartContext);
    const countContext = useContext(CountContext);


    // useEffect(() => {
    //     console.log('useEffect from cartHeader ' + countContext.countState)
    // }, [countContext])


    return (
        <React.Fragment >
            <CartIcon />
            <h5 >Your Cart</h5>
            {/* <div className='cart-header-number'>{props.counter}</div> */}
            <div className='cart-header-number'>{countContext.countState}</div>


        </React.Fragment>
    )

}

export default CartHeader;

