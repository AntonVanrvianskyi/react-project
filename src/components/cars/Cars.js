import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux";

import Form from "../form/Form";
import Car from "../car/Car";
import css from './Cars.module.css'

const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(carAction.getAll())
    }, [dispatch, trigger])
    return (

        <div>
            <Form/>
            <div className={css.Cars}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </div>
    );
};

export default Cars;