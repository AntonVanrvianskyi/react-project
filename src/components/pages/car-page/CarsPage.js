import React, {useEffect, useState} from 'react';
import {carService} from "../../../services/car.service";
import Car from "./Car";
import './css/Cars.css'


const CarsPage = ({setShowForm, setUpdateCar}) => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[])
    return (
        <div  className={'cars-header'}>
            {
                cars.map(car=><Car key={car.id} car={car} setShowForm={setShowForm} setUpdateCar={setUpdateCar}/>)
            }
        </div>
    );
};

export default CarsPage;