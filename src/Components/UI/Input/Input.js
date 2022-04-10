import React, {useContext} from 'react';

import { CountContext } from '../../Home/Home';

const Input = (props) => {

    const countContext = useContext(CountContext)

    return (
        <div >
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
            <button onClick={() => countContext.countDispatch('increment')}>
             + Add
             </button>
        </div>
    )

}

export default Input;