import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";
import Dog from "./Dog";
import {MyContext} from "./Form";
const reducer = (state, action) => {
  switch (action.type){
      case 'dog':
          return{
              ...state,
              dogs:[...state.dogs, action.payload]
          }
  }
}
const DogForm = () => {

    const [state, dispatch] = useReducer(reducer, {dogs:[]})
    const {register,handleSubmit, reset} = useForm()
    const saveDog = (dog) => {
        dispatch({type:'dog', payload:dog.dog})
        reset()
    }
    return (
        <div>
        <form onSubmit={handleSubmit(saveDog)}>
            <label>Add Dog:  </label>
            <input placeholder={'dog'} {...register('dog')}/>
            <button>Save</button>
        </form>
            <div>
                {state.dogs.map((dog,index)=><Dog key={index} dog={dog}/>)}
            </div>

        </div>
    );
};

export default DogForm;