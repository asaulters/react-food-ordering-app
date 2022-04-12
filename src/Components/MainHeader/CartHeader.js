import React, { useContext, useEffect, useState } from 'react';

import CartIcon from './CartIcon';
import CartContext from '../Context/cart-context';
import CartModal from '../Cart/CartModal';

import { CountContext} from '../Home/Home'

import  './Header.css';

const CartHeader = (props) => {
    const [modal, setModal] = useState(false)

    const cartCtx = useContext(CartContext);
    const countContext = useContext(CountContext);

    const curCart = [props.cart]

    const cartModalHandler = (props) => {
        <CartModal title={'My Cart'}  />
    }

    const cartCur =() => {
        props.cart.map((curCartItem) => {
            console.log(curCartItem)
        })
        cartModalHandler();
        // console.log(props.cart)
    }

    // useEffect(() => {
    //     console.log('useEffect from cartHeader ' + countContext.countState)
    // }, [countContext])


    return (
        <React.Fragment >
            <CartIcon />
            <a onClick={cartCur}>Your Cart</a>
            {/* <div className='cart-header-number'>{props.counter}</div> */}
            <div className='cart-header-number'>{countContext.countState}</div>


        </React.Fragment>
    )

}

export default CartHeader;

