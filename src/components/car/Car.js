import React from 'react';
import css from './Car.module.css'
import {useDispatch} from "react-redux";
import {carAction} from "../../redux";
const Car = ({car}) => {
    const {id, brand, price,year} = car
    const dispatch = useDispatch();
    const update = (car) => {
      dispatch(carAction.CAR_FOR_UPDATE(car))
    }
    const deleteCar = async (id) => {
      await dispatch(carAction.deleteCar({id}))
    }
    return (
        <div className={css.Car}>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button className={css.Btn} onClick={()=>update(car)}>Update</button>
            <button onClick={()=>deleteCar(id)}>Delete</button>
        </div>
    );
};

export default Car;