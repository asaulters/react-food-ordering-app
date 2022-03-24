import React from 'react';

import './Meals.css';
import MealItem from './MealItem';

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

    const mealArr = DUMMY_MEALS.map((meal) => {
        id={DUMMY_MEALS.id}
        name={DUMMY_MEALS.name},
        description={DUMMY_MEALS.description},
        price={DUMMY_MEALS.price}
    })

    return (
         <ul className='meal-list'>
             <li> 
             {DUMMY_MEALS.map((meal) => {
                <MealItem 
                // dummyMeals= {DUMMY_MEALS}
                // name={DUMMY_MEALS.name}
                // description={DUMMY_MEALS.description}
                // price={DUMMY_MEALS.price}
            />
            })} 
            </li> 
        </ul> 
    )

    // <ul>
    //     {DUMMY_MEALS.map(meal => {
    //         return(
    //             <li id={meal.id}>{meal.name}</li>
    //         )
    //     })}
    // </ul>


};

export default MealForm;