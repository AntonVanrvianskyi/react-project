import React from 'react';
import {useForm} from "react-hook-form";

import css from './User.form.module.css'
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const UserForm = () => {

    const {register,reset,handleSubmit} = useForm();
    const dispatch = useDispatch()
    const save = async (user) => {
        await dispatch(userActions.createUser({user}))
        console.log(user)
        reset()
    }
    return (
        <div className={css.form} >
            <form onSubmit={handleSubmit(save)}>
                <input placeholder={'name'} {...register('name')}/>
                <input placeholder={'username'} {...register('username')}/>
                <button>Save</button>
            </form>

        </div>
    );
};

export default UserForm;