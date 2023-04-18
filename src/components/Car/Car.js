import React, {useEffect,useState} from 'react';
import {CarService} from "../../services/Car.services";

const Car = ({car,setUpdateCar}) => {
    const {brand, price, year} = car

    const del = async (car) => {
      CarService.delete(car.id)

    }
    return (
        <div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>  setUpdateCar(car)}>Update</button>
            <button onClick={()=>del(car)}>Delete</button>
        </div>
    );
};

export default Car;