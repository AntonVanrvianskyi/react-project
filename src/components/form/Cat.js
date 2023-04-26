import React from 'react';

const Cat = ({cat}) => {
    return (
        <div>
            <div>{cat}</div>
            <button>Delete</button>
        </div>
    );
};

export default Cat;