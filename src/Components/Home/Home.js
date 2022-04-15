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
// import Cart from '../Cart/Cart'

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

    let totalPrice;

    let cartCounter ;

    const cartUpdaterHandler = (cartItem) =>{
        setCart([...cart, cartItem]);
        cartItem= cartItem;
    }

    useEffect(() => {
        cartCounter = cart.length;
        totalPrice = cart.reduce((acc, {price}) => parseFloat(acc) + parseFloat(price), 0).toFixed(2);
    }, [cart])

    const modalHandler = () => {
      toggleModal(true)
    }

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch, currentCart: cart}} >
            <Header cart={cart} cartCounter={cart} modal={modalHandler}/>

            <Intro />
            <MealForm onAdd={cartUpdaterHandler} />
            {/* <Cart /> */}
            <CartModal isVisible={isVisible} hideModal={toggleModal} currentCart={cart} totalPrice={totalPrice}/>
        </CountContext.Provider>
    )
}

export default Home;