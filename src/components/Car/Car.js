import React from 'react';

const Car = ({car,setUpdateCar}) => {
    const {brand, price, year} = car
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setUpdateCar(car)}>Update</button>
        </div>
    );
};

export default Car;