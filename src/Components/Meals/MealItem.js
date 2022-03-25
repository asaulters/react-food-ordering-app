import React, { useContext } from 'react';

import Button from '../UI/Button/Button'
import './Meals.css';

const MealItem =(props) => {

    
    

    if ( props.meals.length === 0) {
        return( <h2>No meals found!!</h2>)
    } else{
        return (
            <li className='mealItem'>
                {props.meals.map((meal)=> {
                    return<>
                        <div className='mealItem-info'>
                            <li>{meal.name}</li>
                            <li>{meal.description}</li>
                            <li>{meal.price}</li>
                        </div>
                        <div className='mealItem-input'>
                            <h3>Amount: <input type="number" placeholder='0' className='quantityInput' /></h3>
                            <Button />
                        </div>
                    {/* console.log(meal.id) */}
                    </>
                   {/* <li>{meal.id}</li>;
                    console.log(meal.id) */};
                    
                })};

            </li>
        )

    }

};

export default MealItem;