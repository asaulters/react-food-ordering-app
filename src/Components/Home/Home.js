import React, {
  useContext, 
  useState, 
  useEffect,
  useReducer
      } from 'react';
import { CartContextProvider } from '../Context/cart-context';

import Header from '../MainHeader/Header';
import Intro from './Intro';
import MealForm from '../Meals/MealForm';
import CartContext from '../Context/cart-context';
import useModal from '../Cart/useModal';
import CartModal from '../Cart/CartModal';
import classes from '../Cart/CartModal.module.css'



const initialState = 0;
const reducer = (state, action) => {
switch (action) {
  case "increment":
    return state + 1;
  case "decrement":
    return state - 1;
  case "reset":
    return initialState;
  default:
    return state;
}
};

export const CountContext = React.createContext();


const Home = (props) => {
  const [cart, setCart] = useState([]);
  const [count, dispatch] = useReducer(reducer, initialState);
  const {isVisible, toggleModal} = useModal();
   const [cartCounter, setCartCounter] = useState(0)

  let totalPrice;
  let incrementCounter = () => setCartCounter(cartCounter +1);
  let decrementCounter = () => setCartCounter(cartCounter -1);
  // let cartCounter ;

  

  const cartUpdaterHandler = (cartItem) =>{
      setCart([...cart, cartItem]);
      cartItem= cartItem;
  }

  useEffect(() => {
      if(cart.length > cartCounter) {
        incrementCounter();
        dispatch({ type: 'increment'});
        console.log(cartCounter +1);
      } else if ( cart.length < cartCounter) {
        decrementCounter();
        console.log( cartCounter -1);
      }
      // setCartCounter(cart.length)
      totalPrice = cart.reduce((acc, {price}) => parseFloat(acc) + parseFloat(price), 0).toFixed(2);
  }, [cart, cartCounter.length])

  const modalHandler = () => {
    toggleModal(true)
  }

 const removeCI = ( cartItemId) => {
    setCart(cart.filter((cartItem) => cartItem !== cartItemId))
    dispatch({ type: 'decrement'});
    console.log(cartCounter)
  }

  return (
      <CountContext.Provider 
        value={{ countState: count, 
        countDispatch: dispatch, 
        currentCart: cart
        }}
        className={classes.contextProvider}
        >
        {isVisible && (
          <CartModal 
            overlayClassName="custom_overlay"   
            isVisible={isVisible} 
            hideModal={toggleModal} 
            currentCart={cart} 
            totalPrice={totalPrice}
            remove={removeCI}
            />
        )}
          <Header cart={cart} cartCounter={cart} modal={modalHandler}/>

          <Intro />
          <MealForm onAdd={cartUpdaterHandler} />
          {/* <Cart /> */}
          {/* <CartModal isVisible={isVisible} hideModal={toggleModal} currentCart={cart} totalPrice={totalPrice}/> */}
      </CountContext.Provider>
  )
}



export default Home;