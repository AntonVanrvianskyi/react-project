import React, {useEffect, useState} from 'react';
import {CarService} from "../../services/Car.services";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";


const Cars = () => {

    const [cars, setCars] = useState([]);
    const [onChange, setOnChange] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    // const [updateCar, setUpdateCar] = useState(null);



    useEffect(()=>{
        CarService.getAll().then(value => value.data).then(value => setCars(value))
    },[onChange])


    return (
        <div className={'cars'}>
            <CarForm setOnChange={setOnChange} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}  />
            <hr/>
            {
                cars.map(car=><Car key={car.id} car={car}  setCarForUpdate={setCarForUpdate} setOnChange={setOnChange} />)
            }
        </div>
    );
};

export default Cars;