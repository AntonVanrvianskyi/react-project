import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import css from './Form.module.css'
import {carService} from "../../services/car.service";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux";


const Form = () => {
    const {register,reset,handleSubmit, setValue} = useForm();
    const {updateCar} = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (updateCar){
            setValue('brand', updateCar.brand)
            setValue('year', updateCar.year)
            setValue('price', updateCar.price)
        }
    },[setValue,updateCar])
    const save = async (car) => {
        await carService.create(car);
        dispatch(carAction.TRIGGER())
        reset()
    }
    const update = async (car) => {
      await carService.updateById(updateCar.id, car)
        dispatch(carAction.TRIGGER())
        reset()

    }
    return (
        <div className={css.Form}>
            <form onSubmit={handleSubmit(updateCar?update:save)}>
                <input placeholder={'brand'} {...register('brand')}/>
                <input placeholder={'year'} {...register('year')}/>
                <input placeholder={'price'} {...register('price')}/>
                <button>{updateCar?'Update':'Save'}</button>
            </form>
        </div>
    );
};

export default Form;