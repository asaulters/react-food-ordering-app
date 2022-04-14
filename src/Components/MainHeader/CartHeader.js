import React, { useContext, useEffect, useState } from 'react';

import CartIcon from './CartIcon';
import CartContext from '../Context/cart-context';
import CartModal from '../Cart/CartModal';
import useModal from '../Cart/useModal';

import { CountContext} from '../Home/Home'
// import {moda}

import  './Header.css';

const CartHeader = (props) => {
    const [modal, setModal] = useState(false)
    const {isVisible, toggleModal} = useModal();

    const cartCtx = useContext(CartContext);
    const countContext = useContext(CountContext);

    const curCart = [props.cart]

    const cartModalHandler = (props) => {
        console.log('cartmodalhandler');
        <CartModal isVisible={isVisible} hideModal={toggleModal} cart={curCart} />
    }

    const cartCur =() => {
        const cartNow = props.cart.map((curCartItem) => {
            console.log(curCartItem)
            // toggleModal(true)
        });
        
        <CartModal isVisible={isVisible} hideModal={toggleModal} cart={cartNow}  />
        // cartModalHandler();
        // console.log(props.cart)
    }

    // const modalHandler = () => {
    //     p
    // }

    // useEffect(() => {
    //     console.log('useEffect from cartHeader ' + countContext.countState)
    // }, [countContext])


    return (
        <React.Fragment >
            <CartIcon />
            <a onClick={props.modal}>Your Cart</a>
            {/* <CartModal isVisible={isVisible} hideModal={toggleModal}  /> */}
            {/* <div className='cart-header-number'>{props.counter}</div> */}
            <div className='cart-header-number'>{countContext.countState}</div>


        </React.Fragment>
    )

}

export default CartHeader;

