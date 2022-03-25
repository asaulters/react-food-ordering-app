import React, { useContext, useState } from 'react';

import './Meals.css';
import MealItem from './MealItem';
import DummyMeals from './DummyMeals';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealForm =(props) => {

    // const mealCtx = useContext(DummyMeals);
    const [meals, setMeals] =useState(DUMMY_MEALS);
    // {console.log(meals)}



    return (
        <ul className='mealForm'>
            
                <MealItem meals={meals} />
            
        </ul>
    )


};

export default MealForm;