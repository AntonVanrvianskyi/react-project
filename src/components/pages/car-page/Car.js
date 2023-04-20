import React from 'react';
import './css/Car.css'
const Car = ({car,setShowForm,setUpdateCar}) => {
    const {brand,price, year} = car
    return (
        <div className={'car-component'}>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button className={'car-button'} onClick={()=>{
                setShowForm(prev=>!prev)
                setUpdateCar(car)
            }}>Update</button>
        </div>
    );
};

export default Car;