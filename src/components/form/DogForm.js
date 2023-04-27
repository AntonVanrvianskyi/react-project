import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";
import Dog from "./Dog";

const DogForm = ({stateReducer}) => {

    const [{dogs}, dispatch] = stateReducer
    const {register, reset, handleSubmit} = useForm()
    const save = (dog) => {
        dispatch({type:'ADD_DOG', payload:dog})
        reset()
    }
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit(save)}>
                <label>Add Dog:  </label>
                <input placeholder={'dog'} {...register('name')}/>
                <button>Save</button>
            </form>
            </div>

            {dogs.map(dog=><Dog key={dog.id} dog={dog} stateReducer={stateReducer}/>)}

        </div>
    );
};

export default DogForm;