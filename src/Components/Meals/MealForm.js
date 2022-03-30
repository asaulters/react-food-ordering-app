import React, { useContext, useState } from 'react';

import './Meals.css';
import MealItem from './MealItem';
import AvailableMeals from './AvailableMeals';


const MealForm =(props) => {

    // const [meals, setMeals] =useState(DUMMY_MEALS);



    return (
        <ul className='mealForm'>
            
                <MealItem  meals={AvailableMeals} />
            
        </ul>
    )


};

export default MealForm;