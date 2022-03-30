import React, { useContext, useState } from 'react';

import './Meals.css';
import MealItem from './MealItem';
import AvalibleMeals from './AvalibleMeals';


const MealForm =(props) => {

    // const [meals, setMeals] =useState(DUMMY_MEALS);



    return (
        <ul className='mealForm'>
            
                <MealItem  meals={AvalibleMeals} />
            
        </ul>
    )


};

export default MealForm;