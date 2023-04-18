import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CarService} from "../../services/Car.services";

const CarForm = ({setCreateCar,updateCar}) => {
    const {register,reset,handleSubmit, setValue} = useForm();
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
        await CarService.update(updateCar.id, car).then(value => value.data).then(value => setCreateCar((prev)=>[...prev,value]))
        reset()

    }

    return (
        <form onSubmit={handleSubmit(updateCar && updateCar.length === 0 ? save : update)}>
            <input placeholder={'brand'} {...register('brand')}/>
            <input placeholder={'year'} {...register('year')}/>
            <input placeholder={'price'} {...register('price')}/>
            <button>Create</button>
        </form>
    );
};

export default CarForm;