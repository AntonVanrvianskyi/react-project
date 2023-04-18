import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CarService} from "../../services/Car.services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../Validators/Validators";

const CarForm = ({setCreateCar,updateCar}) => {
    const {register,reset,handleSubmit, setValue, formState:{errors} } = useForm({mode:"all", resolver:joiResolver(carValidator)});
useEffect(()=>{
    if (updateCar){
        setValue('brand', updateCar.brand)
        setValue('year', updateCar.year)
        setValue('price', updateCar.price)
    }
},[updateCar])
    const save = async (car)=>{
        await CarService.create(car).then(value => value.data).then(value => setCreateCar(value));
        reset()
    }
    const update = async (car)=>{
        await CarService.update(updateCar.id, car).then(value => value.data).then(value => setCreateCar(value))
        reset()

    }

    return (
        <form onSubmit={handleSubmit(updateCar ? update : save)}>
            <input placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <input placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <button>Create</button>
        </form>
    );
};

export default CarForm;