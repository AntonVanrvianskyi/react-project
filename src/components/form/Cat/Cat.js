import React from 'react';
import './Cat.css'
const Cat = ({cat,stateReducer}) => {
    const [, dispatch] = stateReducer
    return (
        <div className={'cat'}>
            <div>{cat.name}</div>
            <button onClick={()=>dispatch({type:'DELETE_CAT',payload:cat.id})}>Delete</button>
        </div>
    );
};

export default Cat;