import React from 'react';

const Rickandmorty = ({item}) => {
    return (
        <div className={'inner'}>
            <h1>{item.id}. {item.name}, status: {item.status}, species:{item.species}, gender:{item.gender}</h1>
            <img src={item.image}/>
        </div>
    );
};

export default Rickandmorty;