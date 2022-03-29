import Input from "../UI/Input/Input";

const MealItemForm = (props) => {

    const prevDef = (e, props) => {
        e.preventDefault();
        console.log(props.value);
    }
    return(
        <form onSubmit={prevDef}>
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }} />
            <button> + Add</button>
        </form>
        
            )
}

export default MealItemForm;