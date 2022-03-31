import React, { useContext, useState } from 'react';

import Card from '../UI/Card/Card';
import MealItemForm from './MealItemForm';
import AvailableMeals from './AvailableMeals';
import Cart from '../Cart/Cart';
// import mealsCtx from '../Context/MealsContext';

import Button from '../UI/Button/Button';
import './Meals.css';


const MealItem =(props) => {

    const cartCtx = useContext(Cart)

    // const mealsCtx = useContext(AvailableMeals);
    const [cart, setCart] = useState(null);
    const [curMeal, setCurMeal] = useState(null);
    // const [mealItemName, setMealItemName] = useState(null);
    // const [mealItemDesc, setMealItemDesc] = useState(null);
    // const [mealItemPrice, setMealItemPrice] = useState(null);
    // const [mealItem, setMealItemName] = useState(null);


    const addToCartHandler = (e, props) => {
        e.preventDefault();
        const mealName = e.target.name;
        const mealPrice = e.target.getAttribute('price');
        const mealDesc = e.target.getAttribute('description');
        const newCartItemObj = {
            name: mealName,
            price: mealPrice,
            description: mealDesc
        }
        console.log(newCartItemObj)
        this.props.onAdd(newCartItemObj)
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
                                    price={meal.price}
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