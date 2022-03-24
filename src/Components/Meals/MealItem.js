import React from 'react';

import Button from '../UI/Button/Button'
import './Meals.css';

const MealItem =(props) => {

    if ( props.length === 0) {
        return <h2>No meals found!!</h2>
    } else{
        return (
            <React.Fragment>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <h3>{props.price}</h3>
                <h3>Amount: </h3>
                <Button />
            </React.Fragment>
        )
    }

};

export default MealItem;