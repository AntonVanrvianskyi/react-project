import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {CarService} from "../../services/Car.services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../Validators/Validators";

const CarForm = ({setCarForUpdate,setOnChange,carForUpdate}) => {
    const {register,reset,handleSubmit, setValue, formState:{errors} } = useForm({mode:"all", resolver:joiResolver(carValidator)});
useEffect(()=>{
    if (carForUpdate){
        setValue('brand', carForUpdate.brand)
        setValue('year', carForUpdate.year)
        setValue('price', carForUpdate.price)
    }
},[carForUpdate])
    const save = async (car)=>{
        await CarService.create(car);
        setOnChange(prevState => !prevState)
        reset()
    }


    const update = async (car)=>{
        await CarService.update(carForUpdate.id, car)
        setOnChange(prevState => !prevState)
        reset()
        setCarForUpdate(false)

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
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