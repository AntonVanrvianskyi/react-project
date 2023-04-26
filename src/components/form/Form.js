import React, {createContext, useReducer} from 'react';
import {useForm} from "react-hook-form";
import Cat from "./Cat";
import './DogFom.css'
import Dog from "./Dog";
import DogForm from "./DogForm";
import {defaults} from "axios";

const MyContext = createContext('default')
const reducer = (state,action) => {
    switch (action.type) {
        case 'cat':
            return {
                ...state,
                cats: [...state.cats, action.payload]
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

    return (

        <div className={'dog-form'}>
                <form className={'cat-form'} onSubmit={handleSubmit(save)}>
                    <label>Add Cat:  </label>
                    <input placeholder={'cat'} {...register('name')}/>
                    <button>Save</button>
                </form>

            <DogForm/>


            {state.cats.map((cat,index)=><Cat key={index} cat={cat}/>)}


        </div>


    );
};

export default Form