import React, {useEffect,useState} from 'react';
import {CarService} from "../../services/Car.services";

const Car = ({car,setCarForUpdate,setOnChange}) => {
    const {brand, price, year} = car

    const del = async (car) => {
        await CarService.delete(car.id);
        setOnChange(prevState => !prevState)
    }
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>  setCarForUpdate(car)}>Update</button>
            <button onClick={()=>del(car)}>Delete</button>
        </div>
    );
};

export default Car;