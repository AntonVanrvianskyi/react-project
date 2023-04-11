import React from 'react';

function Simpson({item})  {

    return (
        <div className={'wrap'}>
            <h1>{item.name} {item.surname} {item.age}</h1>
            <p>{item.info}</p>
            <img src={item.photo} className={'img'}/>



        </div>
    );
}

export default Simpson;