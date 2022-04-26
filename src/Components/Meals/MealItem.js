import React from 'react';

import Card from '../UI/Card/Card';
import MealItemForm from './MealItemForm';
import AvailableMeals from './AvailableMeals';
// import Cart from '../Cart/Cart';
// import mealsCtx from '../Context/MealsContext';

import './Meals.css';


const MealItem =(props) => {


    // const [mealItemName, setMealItemName] = useState(null);
    // const [mealItemDesc, setMealItemDesc] = useState(null);
    // const [mealItemPrice, setMealItemPrice] = useState(null);
    // const [mealItem, setMealItemName] = useState(null);


    const addToCartHandler = (e) => {
        e.preventDefault();
        const mealName = e.target.name;
        const mealPrice = e.target.getAttribute('price');
        const mealDesc = e.target.getAttribute('description');
        
        const newCartItemObj = {
            name: mealName,
            price: mealPrice,
            description: mealDesc,
            id: Math.random()
        };
        // console.log(newCartItemObj);
        props.onAdd(newCartItemObj);
      };
      

    if ( props.meals.length === 0) {
        return( <h2>No meals found!!</h2>)
    } else{
        return (
            <Card >
                    {AvailableMeals.map((meal)=> {
                        return<div key={meal.id} >
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
                                    onSubmit={addToCartHandler}
                                    
                                />
                                </div>


                            </ul>
                        </div>
                        
                    })};

            </Card>
        )

    }

};

export default MealItem;