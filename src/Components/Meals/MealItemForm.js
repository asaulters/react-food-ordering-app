import React, {useContext} from 'react';

// import { getValue } from "@testing-library/user-event/dist/utils";
import Input from "../UI/Input/Input";
import { CountContext } from '../Home/Home';


const MealItemForm = (props) => {

    const countContext = useContext(CountContext)


    return(
        <form 
        name={props.name} 
        price={props.price}
        description={props.description} 
        onSubmit={props.onSubmit}
        >
            <Input label="Amount  " input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1',
            }}   
            />

        </form>        
        )
}

export default MealItemForm;