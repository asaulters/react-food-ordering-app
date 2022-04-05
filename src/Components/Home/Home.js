import React, {useContext} from 'react';

import Header from '../MainHeader/Header';
import Intro from './Intro';
import MealForm from '../Meals/MealForm';
import CartContext from '../Context/cart-context';
// import Cart from '../Cart/Cart'


const Home = (props) => {

    const currentCartArr = [];
    let cartCounter = 0 ;



    const cartUpdaterHandler = (cartItem) =>{
          currentCartArr.push(cartItem);
          console.log(currentCartArr);
          cartLengthUpdater();
          
        //   console.log(cartCounter)
    }

    const cartLengthUpdater = () => {
        cartCounter = currentCartArr.length;
        console.log(cartCounter);
        
    }

    // const cartCounter = currentCartArr.length;
    

    return (
        <CartContext.Provider value={{
            cartItems: currentCartArr
        }} >
            <Header cartChange={cartLengthUpdater} cartCounter={cartCounter}/>
            <Intro />
            <MealForm onAdd={cartUpdaterHandler} />
            {/* <Cart /> */}
        </CartContext.Provider>
    )
}

export default Home;