import React, { useContext, useState } from 'react';

import Button from '../UI/Button/Button'
import './Meals.css';

const MealItem =(props) => {


    const [currentCart, setCurrentCart] = useState(null)

    const addToCartHandler = (e, props) => {
      e.preventDefault();
      console.log(props.value)
    }

    const preventSub = (e)=> {
        e.preventDefault()
    }

    if ( props.meals.length === 0) {
        return( <h2>No meals found!!</h2>)
    } else{
        return (
            <form onSubmit={preventSub}>
                {/* <ul className='mealItem'> */}
                    {props.meals.map((meal)=> {
                        return<>
                            <ul className='mealItem' >
                                <div className='mealItem-info'>
                                    <li>{meal.name}</li>
                                    <li>{meal.description}</li>
                                    <li>{meal.price}</li>
                                </div>
                                <div className='mealItem-input'>
                                    <h3>Amount: <input type="number" placeholder='0' className='quantityInput' /></h3>
                                    {/* <Button /> */}
                                    <button type='submit' onClick={addToCartHandler}> + Add</button>
                                </div>
                            </ul>
                        </>
                        
                    })};

                {/* </ul> */}
            </form>
        )

    }

};

export default MealItem;