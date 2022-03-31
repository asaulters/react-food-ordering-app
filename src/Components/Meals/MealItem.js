import React, { useContext, useState } from 'react';

import Card from '../UI/Card/Card';
import MealItemForm from './MealItemForm';
import AvailableMeals from './AvailableMeals';
// import mealsCtx from '../Context/MealsContext';

import Button from '../UI/Button/Button';
import './Meals.css';


const MealItem =(props) => {

    // const mealsCtx = useContext(AvailableMeals);
    const [cart, setCart] = useState(null)
    const [curMeal, setCurMeal] = useState(null)


    const addToCartHandler = (e, props) => {
        e.preventDefault();
        console.log(e.target.name, e.target.description, e.target.price); 
      };
  





    if ( props.meals.length === 0) {
        return( <h2>No meals found!!</h2>)
    } else{
        return (
            <Card >
                    {AvailableMeals.map((meal)=> {
                        return<>
                            <ul className='mealItem'>
                                <div className='mealItem-info'>
                                    <li>{meal.name}</li>
                                    <li>{meal.description}</li>
                                    <li>{meal.price}</li>
                                    <MealItemForm 
                                    id={meal.id}
                                    key={meal.id}
                                    name={meal.name}
                                    description={meal.description}
                                    onSub={addToCartHandler}
                                />
                                </div>


                            </ul>
                        </>
                        
                    })};

            </Card>
        )

    }

};

export default MealItem;