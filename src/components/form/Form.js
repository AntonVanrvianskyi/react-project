import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";



const reducer = (state,action) => {
    switch (action.type) {
        case 'cat':
            return {...state, cats:action.payload}
        default:

    }
    return {...state}
}
const Form = () => {


    const [state,dispatch] = useReducer(reducer,{cats:null, dogs:[]});

    const {register,handleSubmit} = useForm()

    const save = (cat) => {
        dispatch({type:'cat', payload:cat})

    }

    return (
        <div>
                <form onSubmit={handleSubmit(save)}>
                    <label>Add Cat:  </label>
                    <input placeholder={'cat'} {...register('cat')}/>
                    <button>Save</button>
                </form>

            <div>{state.cats}</div>

        </div>
    );
};

export default Form;