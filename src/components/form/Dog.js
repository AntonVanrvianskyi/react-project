import React from 'react';
import './DogFom.css'
const Dog = ({dog}) => {
    return (
        <div className={'dog'}>
            <div>{dog}</div>
            <button>Delete</button>
        </div>
    );
};

export default Dog;