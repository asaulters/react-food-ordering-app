import React, { useContext } from 'react';

import CartHeader from './CartHeader'
import HeaderImage from './meals.jpg'
import Intro from '../Home/Intro'
import CartContext from '../Context/cart-context';

import  './Header.css'

const MainHeader = (props) => {

    const cartCtx = useContext(CartContext);

    const cartLength = props.cartCounter;
    console.log('Header' + cartLength)

    return (
        <div >
            <div className='header'>
                <div>
                    <h3>ReactMeals</h3>
                </div>
                <div className='cartHeader'><CartHeader counter={cartLength} /></div>
                
            </div>
            <div className='main-image'>
                <img src={HeaderImage} alt="meals" />
            </div>
            {/* <Intro /> */}
        </div>
    )

}

export default MainHeader;