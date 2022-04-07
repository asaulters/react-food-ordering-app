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


    const cartCtx = useContext(CartContextProvider)

    let cartCounter = 0 ;
    let cartItem;

    const cartUpdaterHandler = (cartItem) =>{
        setCart([...cart, cartItem]);
        cartItem= cartItem

    }

    useEffect(() => {
        console.log(cart.length);
        console.log(cart);
        cartCounter = cart.length;
    }, [cart])


    

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <Header cartChange={cart} cartCounter={cart}/>
            <Intro />
            <MealForm onAdd={cartUpdaterHandler} />
            {/* <Cart /> */}
        </CountContext.Provider>
    )
}

export default Home;