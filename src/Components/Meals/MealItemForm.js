import { getValue } from "@testing-library/user-event/dist/utils";
import Input from "../UI/Input/Input";
import mealsCtx from '../Context/MealsContext';

const MealItemForm = (props) => {

    return(
        <form 
        name={props.name} 
        price={props.price}
        description={props.description} 
        onSubmit={props.onSub}
        >
            <Input label="Amount  " input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }} 
                
            />
            <button> + Add</button>
        </form>        
        )
}

export default MealItemForm;