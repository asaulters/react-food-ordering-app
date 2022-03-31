import React, { useContext, useState } from 'react';

import './Meals.css';
import MealItem from './MealItem';
import AvailableMeals from './AvailableMeals';


const MealForm =(props) => {

    // const [meals, setMeals] =useState(DUMMY_MEALS);

    const [currentCart, setCurrentCart] = useState([{
      name: null,
      price: null,
      description: null
    }])



    const addCartItemHandler = (cartItem) => {
      console.log('cartItem');
      // setCurrentCart(cartItem)
    }
    

    return (
        <ul className='mealForm'>
            
                <MealItem  meals={AvailableMeals} onAdd={addCartItemHandler} />
            
        </ul>
    )


};

export default MealForm;