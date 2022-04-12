import React, { useContext, useEffect } from 'react';

import CartHeader from './CartHeader'
import HeaderImage from './meals.jpg'
import Intro from '../Home/Intro'
import CartContext from '../Context/cart-context';

// import { CountContext } from '../Home/Home';

import  './Header.css'

const MainHeader = (props) => {

    const cartCtx = useContext(CartContext);
    const cartCount = [props.cart] 
    const curCart = [props.cart]

    // useEffect(() => {

    //     console.log('useEffect from header ' + cart.length)
    // }, [cart], [cart.length])

    return (
        <div >
            <div className='header'>
                <div>
                    <h3>ReactMeals</h3>
                </div>
                <div className='cartHeader'><CartHeader counter={cartCount} cart={curCart}/></div>
                
            </div>
            <div className='main-image'>
                <img src={HeaderImage} alt="meals" />
            </div>
            {/* <Intro /> */}
        </div>
    )

}

export default MainHeader;