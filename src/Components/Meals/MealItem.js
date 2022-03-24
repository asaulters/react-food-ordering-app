import React, { useContext } from 'react';

import Button from '../UI/Button/Button'
import './Meals.css';

const MealItem =(props) => {
    

    if ( props.length === 0) {
        return <h2>No meals found!!</h2>
    } else{
        return (
            <div>
                {props.meals.map((meal)=> {
                   <p>{meal.name}</p>;
                    console.log(meal)
                })}
                {/* <h3>Amount: </h3>
                <Button /> */}
            </div>
        )
    }

};

export default MealItem;