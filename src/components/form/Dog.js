import React from 'react';

const Dog = ({dog,stateReducer}) => {
    const [,dispatch] = stateReducer
    return (
        <div>
            <div>{dog.name}</div>
            <button onClick={()=>dispatch({type:'DELETE_DOG', payload:dog.id})}>Delete</button>
        </div>
    );
};

export default Dog;