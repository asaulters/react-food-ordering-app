import React, { useContext, useState } from 'react';

import Card from '../UI/Card/Card';
import MealItemForm from './MealItemForm';
import AvalibleMeals from './AvalibleMeals';
import mealsCtx from '../Context/MealsContext';

import Button from '../UI/Button/Button';
import './Meals.css';

// export const mealsCtx = useContext(AvalibleMeals);

const MealItem =(props) => {

    const mealsCtx = useContext(AvalibleMeals);
    const [cart, setCart] = useState(null)

    const addToCartHandler = (e, props) => {
      e.preventDefault();
      console.log(e.value);
    }

    const preventSub = (e)=> {
        e.preventDefault();
        console.log(e.target.value)
        console.log(this)
    }

    if ( props.meals.length === 0) {
        return( <h2>No meals found!!</h2>)
    } else{
        return (
            <Card >
                {/* <ul className='mealItem'> */}
                    {AvalibleMeals.map((meal)=> {
                        return<>
                            <ul className='mealItem' >
                                <div className='mealItem-info'>
                                    <li>{meal.name}</li>
                                    <li>{meal.description}</li>
                                    <li>{meal.price}</li>
                                    <MealItemForm 
                                    id={meal.id}
                                    key={meal.id}
                                    name={meal.name}
                                    description={meal.description}
                                    onSub={preventSub}
                                />
                                </div>


                            </ul>
                        </>
                        
                    })};

                {/* </ul> */}
            </Card>
        )

    }

};

export default MealItem;