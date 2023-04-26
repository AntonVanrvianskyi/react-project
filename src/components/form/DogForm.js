import React from 'react';
import {useForm} from "react-hook-form";

const DogForm = ({dispatch}) => {
    const {register,handleSubmit, reset} = useForm()
    const saveDog = (dog) => {
        dispatch({type:'dog', payload:dog.dog})
        reset()
    }
    return (
        <form onSubmit={handleSubmit(saveDog)}>
            <label>Add Dog:  </label>
            <input placeholder={'dog'} {...register('dog')}/>
            <button>Save</button>
        </form>
    );
};

export default DogForm;