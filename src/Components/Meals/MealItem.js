import React from 'react';

import Button from '../UI/Button/Button'
import './Meals.css';

const MealItem =(props) => {

    if ( props.DUMMY_MEALS.length === 0) {
        return <h2>No meals found!!</h2>
    } else{
        return (
            <React.Fragment>
                <h2>asdf</h2>
                <p>werwerwerwr</p>
                <h3>121</h3>
                <h3>Amount: </h3>
                <Button />
            </React.Fragment>
        )
    }

};

export default MealItem;