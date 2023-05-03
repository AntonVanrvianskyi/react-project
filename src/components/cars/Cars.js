import React, {useEffect} from 'react';
import Form from "../form/Form";
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services/car.service";
import {carAction} from "../../redux";
import Car from "../car/Car";
import css from './Cars.module.css'

const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch()
    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => dispatch(carAction.setCars(value)))
    },[dispatch, trigger])
    return (

        <div>
            <Form/>
            <div className={css.Cars}>
            {
                cars.map(car=><Car key={car.id} car={car}/>)
            }
            </div>
        </div>
    );
};

export default Cars;