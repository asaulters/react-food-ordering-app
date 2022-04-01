import React from 'react';

import './Meals.css';
import MealItem from './MealItem';
import AvailableMeals from './AvailableMeals';


const MealForm =(props) => {

  // const currrentCartArr = [];

    // const [currentCart, setCurrentCart] = useState([{
    //   name: null,
    //   price: null,
    //   description: null
    // }])



    // const addCartItemHandler = (cartItem) => {
    //   props.currrentCartArr.push(cartItem);
    //   console.log(props.currrentCartArr);
    //   props.onStatement('hola')

    // }

    const addCartItemHandler =(cartItem) =>{
      props.onAdd(cartItem)
    }
    

    return (
        <ul className='mealForm'>
            
                <MealItem  meals={AvailableMeals} onAdd={addCartItemHandler} />
            
        </ul>
    )


};

export default MealForm;