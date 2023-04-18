import React, {useEffect, useState} from 'react';
import {CarService} from "../../services/Car.services";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";


const Cars = () => {

    const [cars, setCars] = useState([]);
    const [createCar, setCreateCar] = useState([]);
    const [updateCar, setUpdateCar] = useState([])


    useEffect(()=>{
        CarService.getAll().then(value => value.data).then(value => setCars(value))
    },[createCar])

    return (
        <div className={'cars'}>
            <CarForm setCreateCar={setCreateCar} updateCar={updateCar} />
            <hr/>
            {
                cars.map(car=><Car key={car.id} car={car} setUpdateCar={setUpdateCar}/>)
            }
        </div>
    );
};

export default Cars;