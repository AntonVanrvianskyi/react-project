import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import './CarFormShow.css'
import {carService} from "../../services/car.service";

const CarFormUpdate = ({setShowForm,updateCar}) => {

    const {register, handleSubmit,reset,setValue } = useForm();
    useEffect(()=>{
        if (updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    },[updateCar])
    const update = async (car) => {
        await carService.updateById(updateCar.id,car)
        reset()
    }
    return (


        <div className={'container-form'}>
            <div className={'car-form-update'}>

            <form className={'form-update'} onSubmit={handleSubmit(update)}>
                <input className={'input-form-update'} placeholder={'brand'} {...register('brand')}/>
                <input className={'input-form-update'} placeholder={'price'} {...register('price')}/>
                <input className={'input-form-update'} placeholder={'year'} {...register('year')}/>
                <button className={'button-form-update'} onClick={()=>setShowForm((prev)=>!prev)}>Update</button>
            </form>

            </div>

        </div>

    );
};

export default CarFormUpdate;