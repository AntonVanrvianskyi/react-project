import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";
import Cat from "./Cat";
import './DogFom.css'
import Dog from "./Dog";


const reducer = (state,action) => {
    switch (action.type) {
        case 'cat':
            return {
                ...state,
                cats: [...state.cats, action.payload]
            }
        case 'dog':
            return {
                ...state,
                dogs:[...state.dogs, action.payload]
            }


    }
    return {...state}
}
const Form = () => {


    const [state,dispatch] = useReducer(reducer,{cats:[], dogs:[] });

    const {register,handleSubmit, reset} = useForm()


    const save = (cat) => {
        dispatch({type:'cat', payload:cat.name})
        reset()

    }
    const saveDog = (dog) => {
        dispatch({type:'dog', payload:dog.dog})
        reset()
    }



    return (
        <div className={'dog-form'}>
                <form className={'cat-form'} onSubmit={handleSubmit(save)}>
                    <label>Add Cat:  </label>
                    <input placeholder={'cat'} {...register('name')}/>
                    <button>Save</button>
                </form>
            <div>
                <form onSubmit={handleSubmit(saveDog)}>
                    <label>Add Dog:  </label>
                    <input placeholder={'dog'} {...register('dog')}/>
                    <button>Save</button>
                </form>
            </div>

            <div className={'animal'}>
            {state.cats.map((cat,index)=><Cat key={index} cat={cat}/>)}
            {state.dogs.map((dog,index)=><Dog key={index} dog={dog}/>)}
            </div>


        </div>

    );
};

export default Form;