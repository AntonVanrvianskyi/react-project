import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";
import DogForm from "./DogForm";
import './Form.css'
import Cat from "./Cat/Cat";



const reducer = (state,action) => {
  switch (action.type){
      case 'ADD_CAT':
          const cat = action.payload
          const catID = state.cats.slice(-1)[0]?.id+1||1
          cat.id = catID
          return{...state,cats:[...state.cats, cat]}
      case 'DELETE_CAT':
          const idForDeleteCat= action.payload
          const catIndex = state.cats.findIndex(value => value.id===idForDeleteCat)
          state.cats.splice(catIndex,1)
          return {...state}
      case 'ADD_DOG':
          const dog = action.payload
          return {...state, dogs:[...state.dogs, dog]}
      case 'DELETE_DOG':
          const idForDeleteDog= action.payload
          const dogIndex = state.cats.findIndex(value => value.id===idForDeleteDog)
          state.dogs.splice(dogIndex,1)
          return {...state}
      default:
          return {...state}
  }
}


const Form = () => {

    const stateReducer = useReducer(reducer,{cats:[], dogs:[]});
    const [state, dispatch] = stateReducer
    const {register, reset, handleSubmit} = useForm();
    const save = (cat) => {
        dispatch({type:'ADD_CAT', payload:cat})
        reset()
    }

    return (
        <div>
            <div className={'form'}>
           <form className={'cat-form'} onSubmit={handleSubmit(save)}>
               <label>Add Cat:  </label>
               <input placeholder={'cat'} {...register('name')}/>
               <button>Save</button>
           </form>
                    <DogForm stateReducer={stateReducer}/>

        </div>
            {state.cats.map((cat)=><Cat key={cat.id} cat={cat} stateReducer={stateReducer}/>)}
        </div>
    );
};

export default Form;