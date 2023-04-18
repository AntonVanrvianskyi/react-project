import React, {useEffect,useState} from 'react';
import {CarService} from "../../services/Car.services";

const Car = ({car,setUpdateCar,setCreateCar}) => {
    const {brand, price, year} = car

    const del = async (car) => {
      await CarService.delete(car.id).then(value => value.data).then(value => setCreateCar(value))

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